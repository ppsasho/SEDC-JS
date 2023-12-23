let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let phoneNumber = document.getElementById("phoneNumber");
let button = document.getElementById("button");
let container = document.getElementById("container");
let table = document.getElementById("table");
table.style.border = "2px solid black";
// table.style.visibility = "hidden";

let numberCollection = [];

function PhoneBook(userName, userLastName, userPhoneNumber) {
  (this.name = userName.value),
    (this.lastName = userLastName.value),
    (this.phoneNumber = userPhoneNumber.value);

  this.info = function () {
    firstName.value = "";
    lastName.value = "";
    phoneNumber.value = "";
    return `${this.name} ${this.lastName} added to the list`;
  };
}

function studentTable(inputObjectArray) {
  table.innerHMTL = "";

  for (let i = 0; i < inputObjectArray.length; i++) {
    let tableRow = table.insertRow(i);
    // for (let b = 0; b < Object.keys(inputObjectArray[i]).length; i++) {
    for (let [key, value] of Object.entries(inputObjectArray[i])) {
      let tableCells = tableRow.insertCell(value[i]);
      tableCells.innerText = `${value}`;
      console.log(key);
    }
    // for (let [value] of Object.values(inputObjectArray[i])) {
    // let tableCells = tableRow.insertCell(b);
    // tableCells.innerText = `${value}`;
    // }

    // }
  }
}

button.addEventListener("click", function () {
  Number(phoneNumber);
  table.style.visibiliy = "visible";
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    isNaN(phoneNumber.value)
  ) {
    alert("Check all input fields are filled in correctly");
  } else {
    let person = new PhoneBook(firstName, lastName, phoneNumber);
    numberCollection.push(person);
    console.log(person.info());
    studentTable(numberCollection);
    console.log(person.name, person.lastName, person.phoneNumber);
  }
});
