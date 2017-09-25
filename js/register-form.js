console.log("loaded");

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

function passwordCheck(el) {
  checkEmpty(el);
  
  passwordCheckMatch();

  if (el.value.length < 8) {
    el.classList.add("invalid");
    document.getElementById("passwordRules").classList.remove("hidden");
    return false;
  } else {
    document.getElementById("passwordRules").classList.add("hidden");
    return true;
  }

}

function passwordCheckMatch(_) {
  var passwordAgain = document.getElementById("passwordagain");
  var password = document.getElementById("password");

  if (passwordAgain.value != "" && password.value != passwordAgain.value) {
    passwordAgain.classList.add("invalid");
    document.getElementById("passwordMatch").classList.remove("hidden");
    return false;
  } else {
    document.getElementById("passwordMatch").classList.add("hidden");
    return true;
  }
}

function emailCheckMatch(_) {
  var emailAgain = document.getElementById("emailagain");
  var email = document.getElementById("email");

  if (emailAgain.value != "" && email.value != emailAgain.value) {
    emailAgain.classList.add("invalid");
    document.getElementById("emailMatch").classList.remove("hidden");
    return false;
  } else {
    document.getElementById("emailMatch").classList.add("hidden");
    return true;
  }
}

function emailCheck(el) {
  checkEmpty(el);
  var email = el.value;

  // Check if email is valid
  var valid = true;
  if (! email.includes("@")) {
    valid = false;
  }
  if (! email.includes(".")) {
    valid = false;
  }
  if (valid) {
    var splitByAt = email.split("@");
    if (splitByAt.length > 2) {
      valid = false;
    } else if (splitByAt[0].length == 0 || splitByAt[1].length == 0) {
      valid = false;
    } else {
      if (splitByAt[1].includes(".")) {
        var splitByDot = splitByAt[1].split(".");
        if (splitByDot.length > 2) {
          valid = false;
        } else if (splitByDot[0].length == 0 || splitByDot[1].length == 0) {
          valid = false;
        }
      } else {
        valid = false;
      }
    }
  }

  if (!valid) {
    el.classList.add("invalid");
    document.getElementById("emailRules").classList.remove("hidden");
  } else {
    document.getElementById("emailRules").classList.add("hidden");
  }

  return valid;
}

function checkSubmit(e) {

  var name = document.getElementById("name");
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var passwordAgain = document.getElementById("passwordagain");
  
  var email = document.getElementById("email");
  var emailAgain = document.getElementById("emailagain");

  var nameValid = checkEmpty(name);
  var usernameValid = checkEmpty(username);

  var passwordValid = passwordCheck(password);
  var passwordCheckValid = checkEmpty(passwordAgain) && passwordCheckMatch();

  var emailValid = emailCheck(email);
  var emailCheckValid = checkEmpty(emailAgain) && emailCheckMatch();

  if (nameValid && usernameValid && passwordValid && passwordCheckValid && emailValid && emailCheckValid) {
    return true;
  } else {
    alert("Please fill in all the required fields correctly.");
    return false;
  }

  console.log(e);
}