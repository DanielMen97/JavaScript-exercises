const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);
const addClassList = (el,cl) => el.classList.add(cl) 

const item = $$(".fa-solid");
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
const theme = $$('.theme')
const players = $$('.players')
const size = $$('.size')

// let theme1 = ''

// theme.forEach((element) => {
//   if (element.checked) {
//     theme1 = element.value
//   }
// })

function getSettings(array) {
  array.forEach((element) => {
    if (element.checked) {
      return element.value
    }
    element.addEventListener('click', function (e) {
      return e.target.value
    })
  })
}

// getSettings(theme);
// getSettings(players);
// getSettings(size);

const themeSelect = getSettings(theme)
const playersSelect = getSettings(players)
const sizeSelect = getSettings(size)
const itemsList = getItems(16)
const itemsListCopy = [...itemsList]

function getItems(length) {
  const newArray = []
  let item = ''
  for (let index = 0; index < length; index++) {
    if (themeSelect === 'numbers') {
      item = length / 2 <= index ? length - index : index + 1
    } else {
      item = length / 2 <= index ? iconList[length - index] : iconList[index + 1]
    }
    newArray.push(item)
  }
  return newArray
}

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

item.forEach((element, index) => {
  const maxIndex = itemsList.length - index - 1;
  const value = getRandomIndex(0, maxIndex);
  addClassList(element, itemsListCopy[value]) ;
  // element.innerText = itemsListCopy[value]
  cells.push({
    cell: index,
    value: itemsListCopy[value],
  });
  itemsListCopy.splice(value, 1);
});
