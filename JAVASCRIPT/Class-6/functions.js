//     1. Normal function/Named function
//     These functions are natually hoisted
//     function demo(){
//         console.log("normal function")
//     }
//     demo();

//     2. Variable named function: The function is treated as a variable
// const demo = function sum(a, b) {
//   console.log(`sum of ${a} and ${b} is : ${a + b}`);
// };
// demo(10, 20);

//     3. Anonymous function: Similar to variable function but the function is not named
// const demo = function (a, b) {
//   console.log(`sum of ${a} and ${b} is : ${a + b}`);
// };
// demo(10, 20);

//     4. Self-invoking function: The function gets called automatically after its declaration
// (function (a, b) {
//   console.log(`sum of ${a} and ${b} is : ${a + b}`);
// })(20, 20);

//     5. Arrow function/Lambda function/Fat Arrow function:
//         It is feature of Modern JS(ES6)
//         It can be used to for writing very short functions/callback functions
//         Writing "{}" is not mandatory if we are not using return keyword
// const demo = (a, b) => {
//   console.log(`sum of ${a} and ${b} is : ${a + b}`);
// };
// demo(50, 50);
// const demo = (a, b) => console.log(`sum of ${a} and ${b} is : ${a + b}`);
// demo(50, 50);

//     6. Callback function: When a function is passed as an argument, it is called a callback function.
//     We can either pass a function in argument or we write a function using arrow function method
// setTimeout(() => {
//   console.log("Hello");
// }, 5000);
// function demo1() {
//     console.log("This is demo function");
//   }
//   function demo2(callback) {
//     callback();
//     console.log("This is demo 1 function");
//   }
//   demo2(demo);

//     7. Nested Functions:
//         When we write a function inside another and use it there itself, it is called Nested fucntion
//         Its scope is block scope
// outerFunc();
// function outerFunc() {
//   innerFunc();
//   function innerFunc() {
//     console.log("This is a naseted function");
//   }
//   console.log("This is printed from outer Function");
// }
