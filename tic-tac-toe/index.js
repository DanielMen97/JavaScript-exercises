const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);
const $$$ = (el, cl) => el.classList.add(cl);
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
  //TODO: Sacar toda esta funcion aparte. (SOLUCIONADO)
  element.addEventListener("click", () => paintField(element));
});

function paintField(element) {
  const fieldClass = $$$$(element, "class");
  if (fieldClass.length === 5 && !winner && playerOne) {
    const color = fieldColor();
    $$$(element, color);
    element.innerText = currentPlayer;
    saveCurrentPosition();
    findWinner();
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
    // TODO: Al enviar un pr nunca se pasa con console.log() (SOLUCIONADO)
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
    // TODO: Hay una manera mas optima de revisar los jugadores,
    // aca esta validando siempre los dos jugadores, quiero que ahora solo valide si el jugador actual esta jugando
    // ya gano pero solo valide un jugador. (SOLUCIONADO)

    const fieldsCurrentPlayer = getFieldsCurrentPlayer();

    
    for (let index = 0; index < winnerPositions.length; index++) {
      const element = winnerPositions[index];
      const isWinnerPositions = element.every((field) => fieldsCurrentPlayer.includes(field))
      if (
        fieldsCurrentPlayer.length >= element.length &&
        isWinnerPositions
      ) {
        winner = currentPlayer;
      }
    }
    if (winner) showWinner(`Gano Jugador ${currentPlayer}`);
    if (!winner && currentPositions.length === 9) showWinner("Empate");
  }
}

function showWinner(text) {
  // return setTimeout(() => alert(text), 100) 
  const title = $(".winner");
  title.innerText = text;
}

/*
 * TODO: Como debe eliminar el console.log ahora quiero que en la pantalla del usuario le muestre si ya gano o si es empate. (SOLUCIONADO)
 * TODO: Tambien quiero que en la pantalla del usuario ahora muestre el turno del jugador actual. (En estos momentos solo se el turno de quien es al darle a alguna casilla y me pone el color). (SOLUCIONADO)
 * TODO: Cambiar el color por el X o el O y que el usuario pueda seleccionar cual quiere. (SOLUCIONADO)
 */
