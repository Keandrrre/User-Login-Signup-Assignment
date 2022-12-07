// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");

// ARRAY OF USERS
let users = loadUsers();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  let username = document.getElementById("usernameIn").value;
  let confirmUser = confirmUsername(username);
  let password = document.getElementById("passwordIn").value;
  let confirmPass = document.getElementById("confirmPassIn").value;
  if (
    username.length === 0 ||
    password.length === 0 ||
    confirmPass.length === 0
  ) {
    alert("Missing Fields");
  } else if (password === confirmPass && confirmUser === -1) {
    users.push(newUser(username, password));
    alert("sign up complete");
  } else if (password != confirmPass) {
    alert("Passwords do not match");
  } else {
    alert("Username already in use");
  }
  saveUsers();
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  let username = document.getElementById("usernameInLogin").value;
  let password = document.getElementById("passwordInLogin").value;
  for (i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      alert("Login Complete");
    } else {
      alert("Login Failed");
    }
  }
}

// HELPER FUNCTIONS

function newUser(username, password) {
  return {
    username: username,
    password: password,
  };
}

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

function loadUsers() {
  let usersStr = localStorage.getItem("users");
  return JSON.parse(usersStr) ?? [];
}

function confirmUsername(username) {
  let index = -1;
  for (i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      index = users[i];
      break;
    }
  }
  return index;
}
