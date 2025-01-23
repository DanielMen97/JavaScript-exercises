const darkModeBtn = document.querySelector(".dark");
const ligthModeBtn = document.querySelector(".ligth");
const galaxyModeBtn = document.querySelector(".galaxy");

darkModeBtn.addEventListener("click", () => setUserTheme("dark"));
ligthModeBtn.addEventListener("click", () => setUserTheme("ligth"));
galaxyModeBtn.addEventListener("click", () => setUserTheme("galaxy"));

function setUserTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);
const display = $(".calc__display-text");
const numberButtons = $$(".numbers");
const operationButtons = $$(".operations");
const equalButton = $(".equals");
const deleteButton = $(".delete");
const resetButton = $(".reset");

let valueOne = "";
let valueTwo = "";
let currentOperation = "";

numberButtons.forEach((element) => {
  element.addEventListener("click", function (e) {
    const number = e.target.value;
    if (currentOperation) {
      valueTwo = valueTwo + number;
      display.innerText = Number(valueTwo);
    } else {
      valueOne = valueOne + number;
      display.innerText = Number(valueOne);
    }
  });
});

operationButtons.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (valueOne) {
      currentOperation = e.target.value;
    }
  });
});

equalButton.addEventListener("click", function () {
  if (valueOne && valueTwo && currentOperation) {
    const result = operations[currentOperation](
      Number(valueOne),
      Number(valueTwo)
    );
    display.innerText = reduceDecimals(result.toString());
    valueOne = result.toString();
    valueTwo = currentOperation = ""
  }
});

deleteButton.addEventListener("click", function () {
  if (currentOperation) {
    valueTwo = valueTwo.slice(0, valueTwo.length - 1);
    display.innerText = valueTwo ? valueTwo : "0";
   } else {
      valueOne = valueOne.slice(0, valueOne.length - 1);
      display.innerText = valueOne ? valueOne : "0";
  }
});

resetButton.addEventListener("click", function () {
  valueOne = valueTwo = currentOperation = "";
  display.innerText = "0";
});

function reduceDecimals(n) {
  const decimals = n.indexOf(".") + 1;
  if (decimals > 0 && n.slice(decimals).length > 3) {
    return n.slice(0, decimals + 3);
  }
  return n
}