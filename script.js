function generatePassword() {
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];

 // Prompts and alerts to determine which character types/categories to include within the password.
	// User has the choice to exclude one or more character types/categories.
  amountOfCharacters = prompt("How many characters do you want in your new password? You must choose between 8-128 characters.");
  if (amountOfCharacters < 8 || amountOfCharacters > 128) {
    return "Sorry. Please choose a valid amount of characters.";
  } else if (isNaN(amountOfCharacters)) {
    amountOfCharacters = prompt("Sorry. Please enter a valid amount of characters.");
  }
  else {
    alert("Great! Your password will be " + amountOfCharacters + " characters long.");
    
  }

  chooseLowercase = confirm("Do you want to include lowercase characters?");
  if (chooseLowercase) {
    var chooseLowercase = alert("Your password will include lowercase characters.");
  }
  else {
    alert("The password will NOT include lowercase characters.");
  }

  chooseUppercase = confirm("Do you want to include uppercase characters?");
  if (chooseUppercase) {
    alert("Your password will include uppercase characters.");
  }
  else {
    alert("Your password will NOT include uppercase characters.");
  }

  chooseNumeric = confirm("Do you want to include numeric characters?");
  if (chooseNumeric) {
    alert("Your password will include numbers.");
  }
  else {
    alert("Your password will NOT include numbers.");
  }

  chooseSpecial = confirm("Do you want to include symbols or special characters?");
  if (chooseSpecial) {
    alert("Your password will include symbols and special characters.");
  }
  else {
    alert("Your password will NOT include symbols and special characters.");
  }

	// / Web application reviews and determines if the user chose at least one character type/category to generate a new password.
  if (chooseLowercase === false && chooseUppercase === false && chooseNumeric === false && chooseSpecial === false) {
    return "Sorry. Please select at least one character type/category (i.e., uppercase, lowercase, numeric, or symbol/special.";
  };

  // Category group selected characters
  if (chooseLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (chooseUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (chooseNumeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (chooseSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // Picks random cards out of new pool for the length of password.
  let chosenPassword = ""
  for (let i = 0; i < amountOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    chosenPassword = chosenPassword + possibleCharacters[rng];
  }
  return chosenPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);