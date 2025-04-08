let buttonEl = document.getElementById("button-el");
let generatorOne = document.getElementById("generator-one");
let generatorTwo = document.getElementById("generator-two");

buttonEl.addEventListener("click", () => {
  generateCharacters();
});

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// function getRandomCharactersOne() {
//   let passwordLength = 15;
//   for (let i = 0; i < passwordLength; i++) {
//     const randomIndexOne = Math.floor(Math.random() * characters.length);
//     const randomIndexTwo = Math.floor(Math.random() * characters.length);
//     generatorOne.textContent += characters[randomIndexOne];
//     generatorTwo.textContent += characters[randomIndexTwo];
//   }
//     return generatorOne;
// }

function generateCharacters() {
  let length = 15;
  for (let i = 0; i < length; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    let randomIndexTwo = Math.floor(Math.random() * characters.length);
    generatorOne.value += characters[randomIndexOne];
    generatorTwo.value += characters[randomIndexTwo];
  }
}
