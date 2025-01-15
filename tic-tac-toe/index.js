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
        listFields.forEach((element) => {
            currentPositions.push(element.style.backgroundColor)      
        })
        currentPlayer = player2;
      } else {
        element.style.backgroundColor = "blue";
        listFields.forEach((element) => {
            currentPositions.push(element.style.backgroundColor)           
        })
        currentPlayer = player1;
      }
    }
  });
});
listFields.forEach((element) => {
    currentPositions.push(element.style.backgroundColor)  
})
console.log(currentPositions)