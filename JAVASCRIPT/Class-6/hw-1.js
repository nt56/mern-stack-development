const num = +prompt("Enter a number");

if (num === 0 || num === 1) {
  document.write("The number is neither prime nor composite");
} else {
  let isPrime = true; //prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false; //not prime
      break;
    }
  }
  if (isPrime) {
    alert(`${num} is a prime number`);
  } else {
    alert(`${num} is a not prime number`);
  }
}
