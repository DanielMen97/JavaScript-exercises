const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);

const player1 = 0;
const player2 = 1;
let currentPlayer = player1;

const listFields = $$(".content .field");
let currentPositions = []

listFields.forEach((element) => {
  element.addEventListener("click", function () {
    if(element.style.backgroundColor === ''){
      if (currentPlayer === player1) {
        element.style.backgroundColor = "red";
        saveCurrentPosition()
        currentPlayer = player2;
      } else {
        element.style.backgroundColor = "blue";
        saveCurrentPosition()
        currentPlayer = player1;
      }
    }
    findWinner()
  });
});

function saveCurrentPosition() {
    const positions = currentPositions.map((element) => element.posicion)
    listFields.forEach((element, index) => {
        if(element.style.backgroundColor !== '' && !positions.includes(index)){
            currentPositions.push({color: element.style.backgroundColor, posicion: index})
        }
    })
}

function findWinner() {
    if(currentPositions.length >= 5){
        const fieldPlayer1 = currentPositions.map(element => {
            return element.color === 'red' ? element.posicion : null
        }).filter(element => element !== null)
        const fieldPlayer2 = currentPositions.map(element => {
            return element.color === 'blue' ? element.posicion : null
        }).filter(element => element !== null)
    }
}

// const winner = [
//     [[0,0],[0,1],[0,2]],
//     [[1,0],[1,1],[1,2]],
//     [[2,0],[2,1],[2,2]],
//     [[0,0],[1,0],[2,0]],
//     [[0,1],[1,1],[2,1]],
//     [[0,2],[1,2],[2,2]],
//     [[0,0],[1,1],[2,2]],
//     [[0,2],[1,1],[2,0]]
// ]

const winnerPositions = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
