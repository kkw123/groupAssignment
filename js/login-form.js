console.log("loaded");

var login = "henry";
var loginPassword = "password123"

function checkEmpty(el) {
  // console.log("Checking");
  if (el.value == "") {
    // console.log("invalid");
    // console.log(el);
    el.classList.add("invalid");
    return false;
  } else {
    // console.log("Valid");
    el.classList.remove("invalid");
    return true;
  }
}


function checkSubmit(e) {

  var valid = false;

  var username = document.getElementById("username");
  var password = document.getElementById("password");

  var usernameValid = checkEmpty(username);
  var passwordValid = checkEmpty(password);

  if (usernameValid && passwordValid) {
    valid = true;
  } else {
    alert("Please fill in your username and password.");
  }

  if (valid) {
    if (username.value == login && password.value == loginPassword) {
      valid = true;
    } else {
      alert("Username and password not found! Have you registered?");
      valid = false;
    }
  }

  return valid;
}