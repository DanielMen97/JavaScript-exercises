const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);

const playerOne = 0;
const playerTwo = 1;
let currentPlayer = playerOne;

const listFields = $$(".content .field");
let currentPositions = [];
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

listFields.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.style.backgroundColor === "") {
      if (currentPlayer === playerOne) {
        element.style.backgroundColor = "red";
        currentPlayer = playerTwo;
      } else {
        element.style.backgroundColor = "blue";
        currentPlayer = playerOne;
      }
      saveCurrentPosition();
    }
    console.log(findWinner());
  });
});

function saveCurrentPosition() {
  const positions = currentPositions.map((element) => element.posicion);
  listFields.forEach((element, index) => {
    if (element.style.backgroundColor !== "" && !positions.includes(index)) {
      currentPositions.push({
        color: element.style.backgroundColor,
        posicion: index,
      });
    }
  });
}

function findWinner() {
  if (currentPositions.length >= 5) {
    const fieldsPlayerOne = currentPositions
      .map(element => {
        return element.color === "red" ? element.posicion : null;
      })
      .filter(element => element !== null);
    const fieldsPlayerTwo = currentPositions
      .map(element => {
        return element.color === "blue" ? element.posicion : null;
      })
      .filter(element => element !== null);
    for (let index = 0; index < winnerPositions.length; index++) {
      const element = winnerPositions[index];
      if (
        element.every(field => fieldsPlayerOne.includes(field))
      )
        return "Gano Jugador 1";
      if (
        fieldsPlayerTwo.length >= element.length &&
        element.every(field => fieldsPlayerTwo.includes(field))
      )
        return "Gano Jugador 2";
      if (fieldsPlayerOne.length + fieldsPlayerTwo.length === 9)
        return "Empate";
    }
  }
}