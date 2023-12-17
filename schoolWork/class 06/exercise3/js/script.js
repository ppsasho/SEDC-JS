let button = document.getElementById("button");
let paragraph = document.getElementById("paragraph");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let loginInformation = "";

function getLoginInfo() {
    loginInformation = `${firstName.value} ${lastName.value} ${email.value} ${password.value}`;
    paragraph.innerText = loginInformation;
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
}

button.addEventListener("click", getLoginInfo);
