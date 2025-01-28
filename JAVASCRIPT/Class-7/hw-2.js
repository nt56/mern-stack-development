let newPerson;

//create a constructor object
function person(id, name, age, email, pan) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.email = email;
  this.pan = pan;
  this.isEligible = function () {
    if (this.age > 18) {
      console.log(`${this.name} you are eligible for voting`);
    } else {
      console.log(`${this.name} you are not eligible for voting`);
    }
  };
}

//function for creating object using user data
function createObj() {
  let id = +prompt("Enter ID : ");
  let name = prompt("Enter Name : ");
  let age = +prompt("Enter Age : ");
  let email = prompt("Enter Email : ");
  let pan = prompt("Enter PAN : ");
  newPerson = new person(id, name, age, email, pan);
}

//displaying obj data
function showData() {
  for (let keys in newPerson) {
    console.log(`${keys} : ${newPerson[keys]}`);
  }
}

//function for checking the eligability
function isEligible() {
  newPerson.isEligible();
}
