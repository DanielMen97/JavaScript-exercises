const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);
const addClassList = (el, cl) => el.classList.add(cl);
const $$$$ = (el, cl) => el.getAttribute(cl);
const fieldColor = () =>
  currentPlayer === "X" ? "backgroung-pine" : "backgroung-fields";

let playerOne = "";
let playerTwo = "";
let currentPlayer = "";
let winner = "";
let currentPositions = [];

let buttons = $$(".buttons");

buttons.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (!playerOne) {
      playerOne = e.target.value;
      playerTwo = playerOne === "X" ? "O" : "X";
      currentPlayer = playerOne;
      showCurrentShift();
    }
  });
});

const listFields = $$(".field");
const winnerPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const currentShift = $(".shift");

function showCurrentShift() {
  if (!winner && playerOne && currentPositions.length !== 9) {
    currentShift.innerText = `Turno: ${currentPlayer}`;
  }
}
showCurrentShift();

listFields.forEach((element) => {
  element.addEventListener("click", () => paintField(element));
});

function paintField(element) {
  const fieldClass = $$$$(element, "class");
  if (fieldClass.length === 5 && !winner && playerOne) {
    const color = fieldColor();
    addClassList(element, color);
    element.innerText = currentPlayer;
    saveCurrentPosition();
    findWinner();
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
  }
  showCurrentShift();
}

function saveCurrentPosition() {
  const positions = currentPositions.map((element) => element.posicion);
  listFields.forEach((element, index) => {
    const fieldClass = $$$$(element, "class");
    if (fieldClass.length !== 5 && !positions.includes(index)) {
      currentPositions.push({
        player: currentPlayer,
        posicion: index,
      });
    }
  });
}

function getFieldsCurrentPlayer() {
  return currentPositions
    .map((element) => {
      return element.player === currentPlayer ? element.posicion : null;
    })
    .filter((element) => element !== null);
}

function findWinner() {
  if (currentPositions.length >= 5) {
    const fieldsCurrentPlayer = getFieldsCurrentPlayer();
    for (let index = 0; index < winnerPositions.length; index++) {
      const element = winnerPositions[index];
      const isWinnerPositions = element.every((field) =>
        fieldsCurrentPlayer.includes(field)
      );
      if (fieldsCurrentPlayer.length >= element.length && isWinnerPositions) {
        winner = currentPlayer;
      }
    }
    if (winner) showWinner(`Gano Jugador ${currentPlayer}`);
    if (!winner && currentPositions.length === 9) showWinner("Empate");
  }
}

function showWinner(text) {
  const title = $(".winner");
  title.innerText = text;
}
