// console.log("Hello, World!");    //helps us to display output in the console of the browser

// alert("Hello, World!");  //It displays the output in a pop up box

// document.write("Hello, World!"); //It renders the output on the page

// const p = document.querySelector("p");

// const clickHandler = () => {
//   p.innerHTML = "Button Clicked! welcome to first class of js....!";    // It changes the HTML content of the given element
// };

// btn.onclick = () => {
//   p.textContent = "Button Clicked! welcome to first class of js";
// };

// btn.onclick = () => {
//   alert("welcome to first class of js....!");
// };

// btn.onclick = () => {
//   console.log("welcome to first class of js....!");
// };

const btn = document.querySelector("button");
btn.onclick = () => {
  document.write("welcome to first class of js....!");
};
