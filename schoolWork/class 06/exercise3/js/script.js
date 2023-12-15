let button = document.getElementById("button");
let paragraph = document.getElementById("paragraph");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let loginInformation = "";

function getLoginInfo(loginInformation, firstName, lastName, email, password) {
    loginInformation += (`${firstName.value} ${lastName.value} ${email.value} ${password}`);
    return loginInformation;
}

button.addEventListener("click", getLoginInfo(loginInformation, firstName, lastName, email, password))
// button.addEventListener("click", function() {
//     alert("clicked");
// })
paragraph.innerText = loginInformation;