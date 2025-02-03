function handleNameFocus() {
  document.getElementById("labelName").style.display = "block";
}
function handleNameBlur() {
  document.getElementById("labelName").style.display = "none";
}

function handleEmailFocus() {
  document.getElementById("labelEmail").style.display = "block";
}
function handleEmailBlur() {
  document.getElementById("labelEmail").style.display = "none";
}

function handlePhoneFocus() {
  document.getElementById("labelMobile").style.display = "block";
}
function handlePhoneBlur() {
  document.getElementById("labelMobile").style.display = "none";
}

function handleAddressFocus() {
  document.getElementById("labelAddress").style.display = "block";
}
function handleAddressBlur() {
  document.getElementById("labelAddress").style.display = "none";
}

function handleSubmit(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("mobile").value;
  let address = document.getElementById("address").value;

  let tableBody = document.getElementById("tableBody");
  let tableRow = document.createElement("tr");

  tableRow.innerHTML = `
        <td style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd; font-size: 16px;">${name}</td>
        <td style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd; font-size: 16px;">${email}</td>
        <td style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd; font-size: 16px;">${phone}</td>
        <td style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd; font-size: 16px;">${address}</td>
  `;

  tableBody.appendChild(tableRow);

  name.value = " ";
  email.value = " ";
  phone.value = " ";
  address.value = " ";

  //   let data_1 = document.getElementById("data-1");
  //   let data_2 = document.getElementById("data-2");
  //   let data_3 = document.getElementById("data-3");
  //   let data_4 = document.getElementById("data-4");

  //   data_1.innerHTML = name;
  //   data_2.innerHTML = email;
  //   data_3.innerHTML = phone;
  //   data_4.innerHTML = address;
}
