let inputName = document.getElementById("firstName");
let inputLastName = document.getElementById("lastName");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let submitButton = document.getElementById("button");
let showButton = document.getElementById("showButton");
let list = document.getElementById("orderedList");
let listTitle = document.getElementById("listTitle");

let users = [];
let displayName = [];

function UserCredentials(name, lastName, email, password) {
    this.userName = name.value;
    this.userLastName = lastName.value;
    this.userEmail = email.value;
    this.userPassword = password.value;

    this.userInfo = function() {
        inputName.value = '';
        inputLastName.value = '';
        inputEmail.value = '';
        inputPassword.value = '';
        alert("Successfully registered.");

        displayName.push(`${this.userName} ${this.userLastName}`);
    }
}

submitButton.addEventListener("click", function() {
    if (inputName.value === "" || inputLastName.value === "" || inputEmail.value === "" || inputPassword.value === "") {
        alert("Please check you entered all your credentials!");
    }

    else {
        let user = new UserCredentials(inputName, inputLastName, inputEmail, inputPassword);
        users.push(user);
        user.userInfo();
        console.log(users);

        listTitle.innerText = "";
        list.innerHTML = "";
    }
});

showButton.addEventListener("click", function(){
    listTitle.innerText = "User list";

    for(let i = 0; i < displayName.length; i++) {
        list.innerHTML += `<li>${displayName[i]}</li>`;
    }
});
