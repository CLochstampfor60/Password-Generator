// Assignment Code
function generatePassword() {
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	var symbolCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];
}

// Prompt and alert to determine the length of the entire password.
amountOfCharacters = prompt("How many characters do you want in your new password? You must choose between 8-128 characters.");
if (amountOfCharacters < 8 || amountOfCharacters > 128) {
	return ("Choose a valid number of characters.");
}

else if (isNaN(amountOfCharacters)) {
	amountOfCharacters = prompt("Incorrect: Please enter a valid amount of characters.");
} 
else {
	alert("Correct: Your password will be " + amountOfCharacters + " characters long.");
} 

// Prompts and alerts to determine which character types/categories to include within the password.
	// User has the choice to exclude one or more character types/categories.
includeLowercase = confirm("Do you want to include lowercase characters?");
if (includeLowercase) {
	let yesLowercase = alert("The password will include lowercase characters.");
}
	else {
		alert("The password will NOT include lowercase characters.");
	}

includeUppercase = confirm("Do you want to include uppercase characters?");
if (includeUppercase) {
	let yesUppercase = alert("The password will include uppercase characters.");
}
	else {
		alert("The password will NOT include uppercase characters.");
}

includeNumeric = confirm("Do you want to include numeric characters?");
if (includeNumeric) {
	let yesNumeric = alert("The password will include numeric characters.");
}
	else {
		alert("The password will NOT include numeric characters.");
}

includeSymbol = confirm("Do you want to include symbol or special characters?");
	if (includeSymbol) {
		let yesSymbol = alert("The password will include symbol or special characters.");
	}
		else {
			alert("The password will NOT include symbol or special characters.");
}

// Web application reviews and determines if the user chose at least one character type/category to generate a new password.
if (includeLowercase === false && includeUppercase === false && includeNumeric === false && includeSymbol === false) {
	return "Incorrect: Please select at least one character type/category (i.e., uppercase, lowercase, numeric, and symbol/special.";
};

 // group selected characters
if (includeLowercase) {
	possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
}
if (includeUppercase) {
	possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
}
if (includeNumbers) {
	possibleCharacters = possibleCharacters.concat(numericCharacters);
}
if (includeSymbol) {
	possibleCharacters = possibleCharacters.concat(symbolCharacters);
}

// pick random cards out of new pool for length of password
let chosenPassword = "" {
for (let i = 0; i < amountOfCharacters; i++) {
	let rng =[Math.floor(Math.random() * possibleCharacters.length)];
	// or finalPassword += possibleCharacters[rng];
	chosenPassword = chosenPassword + possibleCharacters[rng];
}
return chosenPassword;
};

// group selected character types
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
