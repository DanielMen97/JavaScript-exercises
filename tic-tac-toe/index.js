const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);

const playerOne = 1;
const playerTwo = 2;
let currentPlayer = playerOne;
let winner = 0;

const listFields = $$(".field");
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
    //TODO: Sacar toda esta funcion aparte.
    if (element.style.backgroundColor === "" && !winner) {
      if (currentPlayer === playerOne) {
        element.style.backgroundColor = "red";
        currentPlayer = playerTwo;
      } else {
        element.style.backgroundColor = "blue";
        currentPlayer = playerOne;
      }
      saveCurrentPosition();
      // TODO: Al enviar un pr nunca se pasa con console.log()
      console.log(findWinner());
    }
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
    // TODO: Hay una manera mas optima de revisar los jugadores,
    // aca esta validando siempre los dos jugadores, quiero que ahora solo valide si el jugador actual esta jugando
    // ya gano pero solo valide un jugador.

    const fieldsPlayerOne = currentPositions
      .map((element) => {
        return element.color === "red" ? element.posicion : null;
      })
      .filter((element) => element !== null);
    const fieldsPlayerTwo = currentPositions
      .map((element) => {
        return element.color === "blue" ? element.posicion : null;
      })
      .filter((element) => element !== null);

    for (let index = 0; index < winnerPositions.length; index++) {
      const element = winnerPositions[index];
      if (element.every((field) => fieldsPlayerOne.includes(field))) {
        winner = playerOne;
        return "Gano Jugador 1";
      }
      if (
        fieldsPlayerTwo.length >= element.length &&
        element.every((field) => fieldsPlayerTwo.includes(field))
      ) {
        winner = playerTwo;
        return "Gano Jugador 2";
      }
      if (fieldsPlayerOne.length + fieldsPlayerTwo.length === 9 && !winner)
        return "Empate";
    }
  }
}

/*
 * TODO: Como debe eliminar el console.log ahora quiero que en la pantalla del usuario le muestre si ya gano o si es empate.
 * TODO: Tambien quiero que en la pantalla del usuario ahora muestre el turno del jugador actual. (En estos momentos solo se el turno de quien es al darle a alguna casilla y me pone el color).
 * TODO: Tambien quiero que antes de que el juego empiece el jugador tenga la posibilidad de elegir el color que quiere.
*/
