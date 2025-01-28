const person = {
  id: 1234,
  name: "hardik pandya",
  age: 15,
  email: "hardik@gmail.com",
  pan: "ABCD123",
  isEligible: function () {
    if (this.age > 18) {
      console.log(`${this.name} you are eligible for voting`);
    } else {
      console.log(`${this.name} you are not eligible for voting`);
    }
  },
};

person.isEligible();
