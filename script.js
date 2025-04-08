let buttonEl = document.getElementById("button-el");
let generatorOne = document.getElementById("generator-one");
let generatorTwo = document.getElementById("generator-two");
let lengthInput = document.getElementById("length");

buttonEl.addEventListener("click", () => {
  generateCharacters();
});

// First Input Field
generatorOne.addEventListener("click", () => {
  generatorOne.select();
  // Copy Command
  document.execCommand("copy");

  Swal.fire({
    icon: "success",
    title: "Copied!",
    text: "Password 1 has been copied to clipboard!",
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
  });
});

// Second Input Field
generatorTwo.addEventListener("click", () => {
  generatorTwo.select();
  // Copy Command
  document.execCommand("copy");

  Swal.fire({
    icon: "success",
    title: "Copied!",
    text: "Password 2 has been copied to clipboard!",
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
  });
});

function generateCharacters() {
  // For setting password length, parsing the input value from string to number
  let length = parseInt(lengthInput.value);
  // A dynamic reserve of characters.
  let characters = getCharacterReserve();

  // Setting an empty string before the loop to ensure only new generated characters show..
  generatorOne.value = "";
  generatorTwo.value = "";

  for (let i = 0; i < length; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    let randomIndexTwo = Math.floor(Math.random() * characters.length);
    generatorOne.value += characters[randomIndexOne];
    generatorTwo.value += characters[randomIndexTwo];
  }
}

// Character differentiation...
function getCharacterReserve() {
  let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "~`!@#$%^&*()_-+={[}]|:;<>.?/";

  let reserve = letters;

  if (document.getElementById("includeNumbers").checked) {
    reserve += numbers;
  }

  if (document.getElementById("includeSymbols").checked) {
    reserve += symbols;
  }
  //Turns the reserve to an array which is later used when looping characters
  return reserve.split("");
}
