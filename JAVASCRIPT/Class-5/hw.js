const msg = document.getElementById("display");

function showGreeting() {
  const name = prompt("What is your name?");

  if (name === "") {
    msg.innerHTML = "Welcome and Good Morning Guest!";
  } else {
    msg.innerHTML = `Welcome and Good Morning ${name}!`;
  }
}

// function showGreeting() {
//   const name = prompt("What is your name?");
//   document.write(`<h1>Good morning ${name ?? "Guest"}</h1>`);
// }
