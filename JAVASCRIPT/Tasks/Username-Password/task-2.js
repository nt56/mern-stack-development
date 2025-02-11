function handleEmailChange() {
  let email = document.getElementById("email").value;
  document.getElementById("em").value = email;
}

function handlePasswordChange() {
  let password = document.getElementById("password").value;
  document.getElementById("pass").value = password;
}

function showPassword() {
  const p = document.getElementById("pass");
  if (p.type === "password") {
    p.type = "text";
  } else {
    p.type = "password";
  }
}

function reset() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("em").value = "";
  document.getElementById("pass").value = "";
}
