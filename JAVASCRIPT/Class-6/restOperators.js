// Rest parameters:
// These are the extra arguments supplied while calling the function.
// We use '...' operator for working with the rest parameters
// Rest parameters are used to store multiple arguments in a single variable

// Example 1:
function add(a, b, ...args) {
  console.log(`sum of a and b: ${a + b}`);

  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  console.log(`sum of rest parameters: ${sum}`);
}
add(1, 2, 3, 4, 5, 6, 7);
