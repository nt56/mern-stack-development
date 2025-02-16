AOS.init();

let user = "luffy";
let password = "12345";

const UserAuth = () => {
  let username = document.getElementById("username").value;
  let pass = document.getElementById("userpass").value;

  if (username === user && pass === password) {
    alert("Autheticated User");
  } else {
    alert("Sorry Invalid Login Credentials");
  }
};
