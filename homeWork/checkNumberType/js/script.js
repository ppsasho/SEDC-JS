let number = prompt("Enter a number:");
number = parseInt(number);
if (number > 0){
    console.log("You entered a positive number!");
}
else if (number < 0) {
    console.log("You entered a negative number!");
}
else if (number == 0) {
    console.log("You entered a zero!");
}