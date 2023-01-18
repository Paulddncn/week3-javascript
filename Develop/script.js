// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterTypes = ["upperCase", "lowerCase", "numbers", "symbols"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "?", "$", "@", "#", "$", "%", "&", "*", "+", "="];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // stores html element for referencing


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = ""

  //GIVEN I need a new, secure password
  //WHEN I click the button to generate a password
  //WHEN prompted for the length of the password (prompt)
  //THEN I choose a length of at least 8 characters and no more than 128 characters (if else function)
  let passwordLength = prompt("Please select password length")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter between 8 and 128 characters")
  }
  else if (passwordLength > 8 && passwordLength < 128) {
    let upperCaseConfirm = confirm("Would you like to use upper case letters?")
    console.log(upperCaseConfirm)
    let lowerCaseConfirm = confirm("Would you like to use lower case letters?")
    console.log(lowerCaseConfirm)
    let numbersConfirm = confirm("Would you like to use numbers?")
    console.log(numbersConfirm)
    let symbolsConfirm = confirm("Would you like to use symbols?")
    console.log(symbolsConfirm)
    if (upperCaseConfirm && lowerCaseConfirm && numbersConfirm && symbolsConfirm === false) {
      alert("Please select a character type for password.")
    }


    var characterChoices = []
    if (lowerCaseConfirm === true) {
      characterChoices = characterChoices.concat(lowerCase)
    }
    if (upperCaseConfirm === true) {
      characterChoices = characterChoices.concat(upperCase)
    }
    if (numbersConfirm === true) {
      characterChoices = characterChoices.concat(numbers)
    }
    if (symbolsConfirm === true) {
      characterChoices = characterChoices.concat(symbols)
    }
  }

  console.log(password);
  for (let length = 0; length < passwordLength; length++) {
    var randomIndex = Math.floor(Math.random() * characterChoices.length)
    password = password + characterChoices[randomIndex]
  }
  console.log(password);

  return password
}












