let box = document.getElementById("box");

setInterval(() => {
  let date = new Date();
  box.innerHTML = date.toLocaleTimeString();
}, 1000);
