let input = prompt("Enter a number/word");
input = parseInt(input);
if (isNaN(input) == true) {
    console.log("You didn't enter a number!");
}
else {
    console.log("You entered a number!");
}