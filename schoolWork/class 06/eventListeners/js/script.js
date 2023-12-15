let button1 = document.getElementById("myButton");
let text = document.getElementById("input");

function focusGreeting() {
    alert("focus on input");
}

function blurGreeting() {
    alert("input lost focus");
}

function buttonClick() {
    alert("Button do be clicked.");
}

function secondbuttonClick() {
    alert("Button clicked, but its somehow different!");
}

// button1.addEventListener("click", secondbuttonClick);
// text.addEventListener("blur", blurGreeting);
// button1.addEventListener("click", function() {
//     alert("It's anonymous, I'm scared!");
// })

// button1.addEventListener("click", function(){
//     buttonClick();
//     secondbuttonClick();
//     alert("Hello after the 2 funny functions!");
// })

// Get the value using a function
button1.addEventListener("click", function(event){
    console.log(event);
    console.log(event.target.value);
})