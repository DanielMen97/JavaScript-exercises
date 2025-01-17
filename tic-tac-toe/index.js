const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);

const playerOne = 1;
const playerTwo = 2;
let currentPlayer = playerOne;
let winner = 0;
let playerOneColor = 'red'
let playerTwoColor = 'blue'

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

const currentShift = $('.shift')

function showCurrentShift() {
  if(!winner){
    currentShift.innerText = `Turno Actual: ${currentPlayer}`
  }
}
showCurrentShift() 

listFields.forEach((element) => {
  //TODO: Sacar toda esta funcion aparte. (SOLUCIONADO)
  element.addEventListener("click", () => paintField(element));
});

function paintField(element) {
  if (element.style.backgroundColor === "" && !winner) {
    if (currentPlayer === playerOne) {
      element.style.backgroundColor = playerOneColor;
      saveCurrentPosition();
      currentPlayer = playerTwo;
      findWinner(playerOneColor, playerOne);
    } else {
      element.style.backgroundColor = playerTwoColor;
      saveCurrentPosition();
      currentPlayer = playerOne;
      findWinner(playerTwoColor, playerTwo);
    }
    // TODO: Al enviar un pr nunca se pasa con console.log() (SOLUCIONADO)
  }
  showCurrentShift()

}

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

function findWinner(color, player) {
  if (currentPositions.length >= 5) {
    // TODO: Hay una manera mas optima de revisar los jugadores,
    // aca esta validando siempre los dos jugadores, quiero que ahora solo valide si el jugador actual esta jugando
    // ya gano pero solo valide un jugador. (SOLUCIONADO)

      const fieldsCurrentPlayer = currentPositions
      .map((element) => {
        return element.color === color ? element.posicion : null;
      })
      .filter((element) => element !== null);

    for (let index = 0; index < winnerPositions.length; index++) {
      const element = winnerPositions[index];
      if (
        fieldsCurrentPlayer.length >= element.length &&
        element.every((field) => fieldsCurrentPlayer.includes(field))
      ) {
        winner = player
      }
    }
    if (winner) winner === 1 ? showWinner('Gano Jugador X') : showWinner('Gano Jugador O');
    if (!winner && currentPositions.length === 9) showWinner('Empate')
  }
}

function showWinner(text) {
  return setTimeout(() => alert(text))
}

/*
 * TODO: Como debe eliminar el console.log ahora quiero que en la pantalla del usuario le muestre si ya gano o si es empate. (SOLUCIONADO)
 * TODO: Tambien quiero que en la pantalla del usuario ahora muestre el turno del jugador actual. (En estos momentos solo se el turno de quien es al darle a alguna casilla y me pone el color). (SOLUCIONADO)
 * TODO: Cambiar el color por el X o el O y que el usuario pueda seleccionar cual quiere.
 */
