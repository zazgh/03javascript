var characters = "";

function passwordCreate(errorMessage) {
  characters = "";
  length = prompt(`${errorMessage}Enter password length. Password must be minimun 8 maximun 128 characters`);
if (length < 8) {
      return passwordCreate("password must be minimun 8 maximun 128 characters. ");
    } else if (length > 128) {
      return passwordCreate("password must be minimun 8 maximun 128 characters. ");
    }

  if (confirm("Do you want to add lowercase letters to your password? ")) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (confirm("Do you want to add upercase letters to your password? ")) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (confirm("Do you want to add special characters to your password? ")) {
    characters += "/+=!?></.,`~:;|}{[]_-()*&^%$#@|";
  }
  if (confirm("Do you want to add numbers to your password? ")) {
    characters += "0123456789";
  }
  if (characters.length ==0) {
    return passwordCreate("At least one criteria must be selected. ");
  }
  createPassword()
}

var generateBtn = document.querySelector("#generate");
function createPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

generateBtn.addEventListener("click", (i) => passwordCreate());
