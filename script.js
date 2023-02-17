var passwordBtnEl = $('#password-btn');
var passwordEl = $('#password');

function getPassword() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPassword();
  }
  return password;
}

passwordBtnEl.on('click', function () {
  var newPassword = passwordGenerator(15);
  passwordEl.text(newPassword);
});














