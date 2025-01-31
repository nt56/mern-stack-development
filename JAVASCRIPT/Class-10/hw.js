const msg = document.getElementById("msg");
const input = document.getElementById("name");

function changeName() {
  msg.innerText = `${input.value} !`;
}

function resetName() {
  input.value = " ";
  msg.innerText = "Guest !";
}
