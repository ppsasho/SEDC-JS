let button = document.getElementById("button");
let myBody = document.getElementById("body");
myBody.style.backgroundColor = "#dea916" ;
button.style.color = "#0aacf7";
button.style.backgroundColor = "#272a2b";
button.style.fontWeight = "bolder";
button.style.fontFamily = "arial";
button.addEventListener("click", function() {
    let myName = prompt("Enter a name:");
    alert(`Hello ${myName}\n Welcome to my page!`);
})