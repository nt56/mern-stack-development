const msg = document.getElementById("display");

function showGreeting() {
  const name = prompt("What is your name?");

  if (name === "") {
    msg.innerHTML = "Welcome and Good Morning Guest!";
  } else {
    msg.innerHTML = `Welcome and Good Morning ${name}!`;
  }
}
