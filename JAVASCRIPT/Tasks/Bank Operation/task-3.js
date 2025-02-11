var totalAmount = parseInt(document.getElementById("balance").innerText);
function add() {
  let creditAmount = parseInt(document.getElementById("credit-amount").value);
  totalAmount += creditAmount;

  document.getElementById("credit").innerText = creditAmount.toString();
  document.getElementById("wallet").value = totalAmount;
  document.getElementById("balance").innerText = totalAmount.toString();

  document.getElementById("credit-amount").value = "";
}

function withdraw() {
  let withdrawAmount = parseInt(document.getElementById("debit-amount").value);
  totalAmount -= withdrawAmount;

  document.getElementById("debit").innerText = withdrawAmount.toString();
  document.getElementById("wallet").value = totalAmount;
  document.getElementById("balance").innerText = totalAmount.toString();

  document.getElementById("debit-amount").value = "";
}

// var totalAmount = parseInt(document.getElementById("balance").innerText);
// var sr = 0;
// function add() {
//   let creditAmount = parseInt(document.getElementById("credit-amount").value);

//   totalAmount += creditAmount;
//   document.getElementById("wallet").value = totalAmount;

//   let table = document.getElementById("op-table");
//   let tableRow = document.createElement("tr");

//   sr++;
//   tableRow.innerHTML = `
//     <td>${sr}</td>
//     <td>${creditAmount}</td>
//     <td>00</td>
//     <td>${totalAmount}</td>
//   `;
//   table.appendChild(tableRow);

//   document.getElementById("credit-amount").value = "";
// }

// function withdraw() {
//   let withdrawAmount = parseInt(document.getElementById("debit-amount").value);

//   totalAmount -= withdrawAmount;
//   document.getElementById("wallet").value = totalAmount;

//   let table = document.getElementById("op-table");
//   let tableRow = document.createElement("tr");

//   sr++;
//   tableRow.innerHTML = `
//     <td>${sr}</td>
//     <td>00</td>
//     <td>${withdrawAmount}</td>
//     <td>${totalAmount}</td>
//   `;
//   table.appendChild(tableRow);

//   document.getElementById("debit-amount").value = "";
// }
