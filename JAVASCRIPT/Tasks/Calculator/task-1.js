const add = () => {
  let num1 = parseFloat(document.getElementById("n-1").value);
  let num2 = parseFloat(document.getElementById("n-2").value);

  document.getElementById("operation").value = "Addition";
  document.getElementById("ans").value = num1 + num2;
};

const sub = () => {
  let num1 = parseFloat(document.getElementById("n-1").value);
  let num2 = parseFloat(document.getElementById("n-2").value);

  document.getElementById("operation").value = "Substraction";
  document.getElementById("ans").value = num1 - num2;
};

const mul = () => {
  let num1 = parseFloat(document.getElementById("n-1").value);
  let num2 = parseFloat(document.getElementById("n-2").value);

  document.getElementById("operation").value = "Multiplication";
  document.getElementById("ans").value = num1 * num2;
};

const div = () => {
  let num1 = parseFloat(document.getElementById("n-1").value);
  let num2 = parseFloat(document.getElementById("n-2").value);
  document.getElementById("operation").value = "Division";
  document.getElementById("ans").value = num1 / num2;
};

const mod = () => {
  let num1 = parseFloat(document.getElementById("n-1").value);
  let num2 = parseFloat(document.getElementById("n-2").value);

  document.getElementById("operation").value = "Mod";
  document.getElementById("ans").value = num1 % num2;
};

const reset = () => {
  document.getElementById("n-1").value = "";
  document.getElementById("n-2").value = "";
  document.getElementById("operation").value = "";
  document.getElementById("ans").value = "";
};
