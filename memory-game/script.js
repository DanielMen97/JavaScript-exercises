const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);
const addClassList = (el, cl) => el.classList.add(cl);
const newElement = (el) => document.createElement(el)

const themeList = $$(".theme")
const playersList = $$(".players")
const sizeList = $$(".size")
const buttonStartGame = $(".start");
const containerBoard = $('.container')
const iconList = [
  "",
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
  "fa-code",
]
const cells = []
let themeSelect = ''
let playersSelect = ''
let sizeSelect = ''


buttonStartGame.addEventListener("click", () => {
  themeSelect = getSettings(themeList)
  playersSelect = Number(getSettings(playersList))
  sizeSelect = Number(getSettings(sizeList))
  createBoard()
  const itemsList = getItemsList()
  getRandomValue(itemsList)
});

function getSettings(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (element.checked) return element.value
  }
};

function createBoard() {
  if (!sizeSelect) return
  for (let index = 0; index < sizeSelect; index++) {
    const newDiv = document.createElement('div')
    addClassList(newDiv,'cell')
    containerBoard.appendChild(newDiv)
    createHtmlItem(newDiv)
  }
}

function createHtmlItem(element) {
  if (!themeSelect) return
  let newHTML = ''
  if (themeSelect === 'numbers') {
    newHTML = `<p class="item"></p>`
  } else {
    newHTML = `<i class="item fa-solid"></i>`
  }
  element.innerHTML = newHTML
}

function getItemsList() {
  if (!themeSelect) return
  const newArray = []
  for (let index = 0; index < sizeSelect; index++) {
    let item = ''
    if (themeSelect === 'numbers') {
      item = sizeSelect / 2 <= index ? sizeSelect - index : index + 1
    } else {
      item = sizeSelect / 2 <= index ? iconList[sizeSelect - index] : iconList[index + 1]
    }
    newArray.push(item) 
  }
  return newArray
}

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

function getRandomValue(array) {
  const item = $$('.item')
  item.forEach((element, index) => {
    const maxIndex = sizeSelect - index - 1;
    const value = getRandomIndex(0, maxIndex);
    if (themeSelect === 'numbers') element.innerText = array[value];
    if (themeSelect === 'icons') addClassList(element, array[value]);
    cells.push({
      cell: index,
      value: array[value],
    });
    array.splice(value, 1);
  });
}