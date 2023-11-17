//THE INTERACTIVE "BUTTON"
// Assignment Code
var generateBtn = document.querySelector("#generate");

//(REQUIRED) - THE FUNCTION FOR "WRITEPASSWORD"
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//PASSWORD VALUES - DISPLAYS ALL VARIABLES IN "GENERATED PASSWORD"
  passwordText.value = password;
}
//WHEN "BUTTON" IS CLICKED - WILL DISPLAY PASSWORD
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//(REQUIRED) - WRITE FUNCTION FOR "GENERATEPASSWORD"
//Write generatedpassword to the #password input
function generatePassword() {

//"GENERATEPASSWORD" VARIABLES & STRINGS: PROMPTS, CONFIRMS, ALERTS
const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*',
};

  var passwordCharset = "";

  var length = window.prompt("Please enter a NUMBER for required password length.");

  var lowercase = window.confirm("Please click OK to use LOWERCASE letters!");
  if (lowercase) {
    passwordCharset += key_strings.lowercase;
  };

  var uppercase = window.confirm("Please click OK to use UPPERCASE letters!");
  if (uppercase) {
    passwordCharset += key_strings.uppercase;
  };

  var numbers = window.confirm("Please click OK to use NUMBERS!");
  if (numbers) {
    passwordCharset += key_strings.numbers;
  };

  var symbols = window.confirm("Please click OK to use SYMBOLS!");
  if (symbols) {
    passwordCharset += key_strings.symbols;
  };

    var password = "";
    for (let i = 0; i < length; i++) {
      password += passwordCharset[Math.floor(Math.random() * passwordCharset.length)]
    }

    generateBtn = window.alert("Please click the RED BUTTON to generate password");
   
    return password;
    
}

console.log(generatePassword());