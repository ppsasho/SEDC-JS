console.log("test");
let button1 = document.getElementById("myButton");
let button2 = document.getElementById("mySecondButton");
let myDiv = document.getElementById("myDiv");

function buttonClick() {
    alert("Why did you click me?");
}

function greeting() {
    alert("Happy new year wooooooooooooooooo");
}

function goodBye() {
    alert("Goodbye :(");
}

function hiGreeting() {
    alert("hi");
}


button1.onclick = buttonClick;
button2.onclick = buttonClick;



myDiv.onmouseover = greeting();