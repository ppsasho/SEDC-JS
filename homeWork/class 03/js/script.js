//  Celsius to Fahrenheit

// function celsiusToFahrenheit(celsius, num1 = 1.8, num2 = 32) {
//     result = (celsius * num1) + num2;
//     return result;
// }

// let inputCelsiusValue = prompt("Enter temperature in celsius:");
// parseFloat(inputCelsiusValue);

// let returnFahrenheitValue = celsiusToFahrenheit(inputCelsiusValue);

// console.log(`Your temperature input converted is ${returnFahrenheitValue} fahrenheit.`);



//  Fahrenheit to Celsius

// function fahrenheitToCelcius(fahrenheit, num1 = 5, num2 = 9, num3 = 32) {
//     result = (num1 / num2) * (fahrenheit - num3);
//     return result;
// }

// let inputFahrenheitValue = prompt("Enter your temperature in fahrenheit");
// parseFloat(inputFahrenheitValue);

// let returnCelsiusValue = fahrenheitToCelcius(inputFahrenheitValue);
// console.log(`Your temperature input converted is ${Math.round(returnCelsiusValue)} celsius.`);



// Age calculator

// let currentYear = new Date();
// let year = currentYear.getFullYear();
// function calculateAge(birthYear, year) {
//     result = year - birthYear;
//     return result;
// }

// let inputBirthYear = prompt("Enter your year of birth:");
// parseInt(inputBirthYear);
// if(!isNaN(inputBirthYear) == true) {
// let returnAge = calculateAge(inputBirthYear, year);

// console.log(`Your age is ${returnAge}.`);
// }
// else {
//     console.log("You didn't enter a number!");
// }



// Find value type

// function getValueType(value) {
//     result = typeof(value);
//     return result;
// }

 /* 
   let inputValue = prompt("Enter value:"); - cancel returns object type
  let inputValue; - returns undefined
  "example"; - returns string
  true; - returns boolean
  10; - returns number 
 */


// let returnValueType = getValueType(inputValue);

// console.log(`Your value type is ${returnValueType}.`);



// Dog age to human / Human to dog age Converter

// function dogYearsConverter(input, year) {
//     if (input === "1") {
//         result = year * 7;
//         return result;
//     }
//     else if(input === "2") {
//         result = year / 7;
//         return result;
//     }
// }

// let userInput = prompt("Do you want to convert from dog years or human years?\n 1 - dog \n 2 - human:");

// if ((userInput === "1" || userInput === "2") === true){
//     let userinputYears = prompt("Enter your year:");
//     parseInt(userinputYears);
    
//     let returnYears = dogYearsConverter(userInput, userinputYears);

//     if (userInput === "1"){
//         console.log(`Your dog years converted to ${Math.round(returnYears)} human years.`);
//     }
//     else if (userInput === "2") {
//         console.log(`Your human years converted to ${Math.round(returnYears)} dog years.`);
//     }
// }
// else {
//     console.log("Incorrect input, try again.");
// }



// ATM
// money = 500;
// function ATM(money, requestAmount) {
//         result = money - requestAmount;
//         return result;   
// }

// let requestAmount = prompt(`Welcome to myBank! You have ${money}\$ available.\n How much would you like to withdraw?`);
// parseInt(requestAmount);

// let returnAmount = ATM(money, requestAmount);

// if (requestAmount <= money){
//     money -= requestAmount;
//     console.log(`You successfully withdrew ${requestAmount} and now have ${money}\$ left.`);
// }
// else {
//     console.log("Not enough money.");
// }
