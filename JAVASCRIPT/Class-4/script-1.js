// Write a code which will take two inputs from user, username and password.
// The code will check if the username matches 'admin', it is same, it will check password.
// The passowrd should be 1234

// If the password does not match, it will give error that 'Password is incorrect'
// If the password matches, it will display "Logged In Successfully!"

// If the username does not match 'admin' it will display 'User not found'

const username = prompt("Enter username : ");

if (username === "admin") {
  const password = prompt("Enter password : ");

  if (password === "1234") {
    alert("Logged In Successfully..!");
  } else {
    alert("Password is incorrect...!");
  }
} else {
  alert("User not found..!");
}
