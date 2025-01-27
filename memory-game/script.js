const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);
const addClassList = (el,cl) => el.classList.add(cl) 

const item = $$(".fa-solid");
const numbers = getNumbers(16);
const numbersCopy = [...numbers];
const cells = [];
const iconList = [
    "fa-code",
    "fa-dragon",
    "fa-ghost",
    "fa-puzzle-piece",
    "fa-bug",
    "fa-frog",
    "fa-cat",
    "fa-motorcycle",
    "fa-meteor",
    "fa-user-secret",
    "fa-dog",
    "fa-hand-fist",
    "fa-dice",
    "fa-heart",
    "fa-tree",
    "fa-droplet",
];
const icons = getIcons(16)
const iconsCopy = [...icons]

function getNumbers(length) {
  const numbers = [];
  for (let index = 0; index < length; index++) {
    const number = length / 2 <= index ? length - index : index + 1;
    numbers.push(number);
  }
  return numbers;
}

function getIcons(length) {
  const icons = [];
  for (let index = 0; index < length; index++) {
    const icon =
      length / 2 <= index ? iconList[length - index] : iconList[index + 1];
    icons.push(icon);
  }
  return icons;
}

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

item.forEach((element, index) => {
  const maxIndex = icons.length - index - 1;
  const value = getRandomIndex(0, maxIndex);
  addClassList(element, iconsCopy[value]) ;
  cells.push({
    cell: index,
    value: iconsCopy[value],
  });
  iconsCopy.splice(value, 1);
});



// item.forEach((element, index) => {
//   const maxIndex = numbers.length - index - 1;
//   const value = getRandomIndex(0, maxIndex);
//   const innerIcon = getIcons(16)
//   element.innerText = numbersCopy[value];
//   cells.push({
//     cell: index,
//     value: numbersCopy[value],
//   });
//   numbersCopy.splice(value, 1);
// });
