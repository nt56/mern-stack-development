const box = document.getElementById("box");
const msg = document.getElementById("text");

function clickHandler() {
  box.style.transform = "scaleY(2)";
  box.style.transition = "all 2s";
  box.style.backgroundColor = "green";
  msg.innerHTML = "After single click on div";
}

function doubleClickHandler() {
  box.style.transform = "scaleX(2)";
  box.style.transition = "all 2s";
  box.style.backgroundColor = "red";
  msg.innerHTML = "After double click on div";
}

function mouseEnterHandler() {
  box.style.transition = "all 2s";
  box.style.transform = "rotate(0.5turn)";
  box.style.backgroundColor = "blue";
  msg.innerHTML = "After mouse over on div";
}

function mouseLeaveHandler() {
  box.style.transition = "all 2s";
  box.style.transform = "scaleX(0.5)";
  box.style.backgroundColor = "yellow";
  msg.innerHTML = "After mouse leave on div";
}

function contextMenuHandler() {
  box.style.transition = "all 2s";
  box.style.transform = "skew(30deg, 20deg)";
  box.style.backgroundColor = "purple";
  msg.innerHTML = "After right click on div";
}
