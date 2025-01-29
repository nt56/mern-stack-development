let arr = new Array();
let person;

function personData(UserName, password) {
  this.UserName = UserName;
  this.password = password;
}

function createObj() {
  const UserName = prompt("Enter UserName : ");
  const password = prompt("Enter Password : ");

  person = new personData(UserName, password);
  arr.push(person);
}

function showData() {
  arr.map((p) => {
    console.log(`Username : ${p.UserName}\n Password : ${p.password}`);
  });
}

function findUser() {
  const name = prompt("Enter UserName to find : ");

  const isUserAvailable = arr.filter((p) => p.UserName === name);

  if (isUserAvailable.length > 0) {
    isUserAvailable.map((user) => {
      console.log(
        `Username : ${user.UserName}\n Password : ${user.password}\n`
      );
    });
  } else {
    console.log(`User Not Found...!`);
  }
}
