let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let phoneNumber = document.getElementById("phoneNumber");
let button = document.getElementById("button");
let container = document.getElementById("container");
let table = document.getElementById("table");
let editButton = document.getElementById("editButton");
let deleteButton = document.getElementById("deleteButton");
let editName = document.getElementById("editName");
let editLastName = document.getElementById("editLastName");
let editPhoneNumber = document.getElementById("editNumber");
let contactListNumber = document.getElementById("contactListNumber");
let saveChanges = document.getElementById("saveChanges");

editButton.style.visibility = "hidden";
deleteButton.style.visibility = "hidden";
table.style.border = "4px inset black";
table.style.visibility = "hidden";

editName.style.visibility = "hidden";
editLastName.style.visibility = "hidden";
editPhoneNumber.style.visibility = "hidden";
contactListNumber.style.visibility = "hidden";
saveChanges.style.visibility = "hidden";

let numberCollection = [];

function PhoneBook(userName, userLastName, userPhoneNumber) {
  this.name = userName.value,
  this.lastName = userLastName.value,
  this.phoneNumber = userPhoneNumber.value;

  this.info = function () {
    firstName.value = "";
    lastName.value = "";
    phoneNumber.value = "";
    return `${this.name} ${this.lastName} added to the list`;
  };
}

function listTable(inputObjectArray) {
  table.innerHTML = "";

  for (let i = 0; i < inputObjectArray.length; i++) {
    let tableRow = table.insertRow(i);
    let object = inputObjectArray[i];
    let keys = Object.keys(object);

    for (let b = 0; b < keys.length; b++) {
      if (b > 2) {
        break;
      }

      else {
        let key = keys[b];
        let value = object[key];
    
        let tableCells = tableRow.insertCell(b);
          if (b === 0) {
            tableCells.innerText = `${i + 1}: ${value}`;
          }
          else {
            tableCells.innerText = `${value}`;
          }
      }
    }
  }
}

function deleteContact(objectArray) {
  let listNumber = Number(prompt("Enter the contact list number:"));
  if (listNumber > objectArray.length || listNumber < 0 || isNaN(listNumber) || listNumber === 0) {
    alert("Contact with current list number doesn't exist");
  }
  else {
    if (objectArray.length === 1) {
      let i = listNumber - 1;
      objectArray.splice(i, 1);
      table.style.visibility = "hidden";
      editButton.style.visibility = "hidden";
      deleteButton.style.visibility = "hidden";
      alert("Contact deleted successfully.");
    }
    else {
      let i = listNumber - 1;
      objectArray.splice(i, 1);
      listTable(objectArray);
      alert("Contact deleted successfully.");
    }
  }
}

function editContact(listNumber, newName, newLastName, newPhoneNumber, objectArray) {
  Number(listNumber.value);
  if (isNaN(listNumber.value) === true || newName.value === "" || newLastName.value === "" || isNaN(newPhoneNumber.value)) {
    alert("Please check all your input fields are filled in correctly.");
  }
  else {
    let i = listNumber.value;
    if (i > objectArray.length) {
      alert("Contact with current list number doesn't exist");
    }
    else {
      --i;
      let object = objectArray[i];
      object.name = newName.value;
      object.lastName = newLastName.value;
      object.phoneNumber = newPhoneNumber.value;
      listTable(objectArray);
      alert("Your contact edit was successful");
    }
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
    alert("Please check all input fields are filled in correctly.");
  } else {
    let person = new PhoneBook(firstName, lastName, phoneNumber);
    numberCollection.push(person);
    console.log(person.info());

    table.style.visibility = "visible";
    listTable(numberCollection);

    console.log(person.name, person.lastName, person.phoneNumber);
    if(numberCollection.length === 1) {
      editButton.style.visibility = "visible";
      deleteButton.style.visibility = "visible";
    }
  }
});

editButton.addEventListener("click", function() {
if (numberCollection.length < 1) {
  alert("No contacts to edit");
}
else {
  editName.style.visibility = "visible";
  editLastName.style.visibility = "visible";
  editPhoneNumber.style.visibility = "visible";
  contactListNumber.style.visibility = "visible";
  saveChanges.style.visibility = "visible";
}
})

deleteButton.addEventListener("click", function() {
  deleteContact(numberCollection);
})

saveChanges.addEventListener("click", function() {
  editContact(contactListNumber, editName, editLastName, editPhoneNumber, numberCollection);
  editName.value = "";
  editLastName.value = "";
  editPhoneNumber.value = "";
  contactListNumber.value = "";
  editName.style.visibility = "hidden";
  editLastName.style.visibility = "hidden";
  editPhoneNumber.style.visibility = "hidden";
  contactListNumber.style.visibility = "hidden";
  saveChanges.style.visibility = "hidden";
})
//https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
//https://stackoverflow.com/questions/64291475/why-keys-of-object-is-just-first-character
