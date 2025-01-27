let isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false; //num cannot be less than 2
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; //not prime
    }
  }
  return true; //prime
};

const range = +prompt("Enter Number : ");
if (range === 0 || range === 1) {
  document.write("Number must be greater than 2");
} else {
  for (let i = 1; i <= range; i++) {
    if (isPrime(i)) {
      document.write(i + " "); //printing the prime numbers
    }
  }
}
