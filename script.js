// Assignment Code
var generateBtn = document.querySelector("#generate");
// var uppercase = [ "A", "B", "C"];
var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
// var passwordLength;
var numberCharacters = ["0,1,2,3,4,5,6,7,8,9"];
var symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var confirmLower;
var confirmUpper;
var confirmNumber;
var userChoice;
var confirmSymbol;
var emptyUpper = [];
var characterSet = [];
var password = "";
var passwordLength = getPasswordLength();

var toUpper = function (x) {
  return x.toUpperCase();
};
uppercase = lowercase.map(toUpper);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start the Function
function generatePassword() {
  passwordLength = prompt("Please Enter the amount of characters (8-128) you would like your password to be.");
  console.log("Password length " + passwordLength);

  if(!passwordLength) {
    alert("Required value");
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128 characters");
    console.log("Password length " + passwordLength);
  }
  else { 
    confirmLower = confirm("Would you like the password to include lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Would you like the password to include upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Would you like the password to include numbers?");
    console.log("Number " + confirmNumber);
    confirmSymbol = confirm("Would you like the password to include special characters?");
    console.log("Special Character " + confirmSpecial);

  };
 // No answer then
   if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSymbol) {
    userChoices = alert("You must choose a criteria");
// 4 option
} else if (confirmLower && confirmUpper && confirmNumber && confirmSymbol) {
  userChoices = lowerCase.concat(upperCase, numbers, symbol);
  console.log(userChoices);
}
// 3 options
else if (confirmLower && confirmUpper && confirmNumber) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
}
else if (confirmLower && confirmUpper && confirmSymbol) {
  userChoices = lowerCase.concat(upperCase, symbol);
  console.log(userChoices);
}
else if (confirmLower && confirmNumber && confirmSymbol) {
  userChoices = lowerCase.concat(numbers, symbol);
  console.log(userChoices);
}
else if (confirmUpper && confirmNumber && confirmSymbol) {
  userChoices = upperCase.concat(numbers, symbol);
  console.log(userChoices);
}
// 2 options
else if (confirmLower && confirmUpper) {
  userChoices = lowerCase.concat(upperCase);
  console.log(userChoices);
}
else if (confirmLower && confirmNumber) {
  userChoices = lowerCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmLower && confirmSymbol) {
  userChoices = lowerCase.concat(symbol);
  console.log(userChoices);
}
else if (confirmUpper && confirmNumber) {
  userChoices = upperCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmUpper && confirmSymbol) {
  userChoices = upperCase.concat(symbol);
  console.log(userChoices);
}
else if (confirmNumber && confirmSymbol) {
  userChoices = numbers.concat(symbol);
  console.log(userChoices);
}
// 1 option
else if (confirmLower) {
  userChoices = lowerCase;
  console.log(userChoices);
}
else if (confirmUpper) {
  userChoices = blankUpper.concat(upperCase);
  console.log(userChoices);
}
else if (confirmNumber) {
  userChoices = numbers;
  console.log(userChoices);
}
else if (confirmSymbol) {
  userChoices = symbol;
  console.log(userChoices);
};


  


  // while(characterSet.length === 0) {
 

  //   if(confirm("Include uppercase characters?")) {
  //     characterSet = characterSet.concat(uppercase);
  //   }
  //   // add any selections to the characterSet array
  //   if(characterSet.length === 0) {
  //     alert("You must select at least one set of characters for your password");
  //   }
  // }
//Random Selection Loop
   for(var i = 0; i < passwordLength; i++) {
   var allChoices = userChoice[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }
  // use a for loop to generate a password of the desired password length assigning characters from the characterSet
  // at random to the password string
  // then return the password string

  var password = passwordBlank.join("");
  console.log("Your password: " + password);
  return password;
}

// function getPasswordLength() {
//   var length = prompt("How many characters would you like your password to be? (8-128)");

//   if(length < 8 || length > 128 || isNaN(length)) {
//     alert("Password must be a number between 8 and 128");
//     getPasswordLength();
//   }else {
//     return length;
//   }
}


