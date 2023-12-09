console.log("============================== FUNCTIONS ==============================");

console.log("");
console.log("============================== Function Declaration ==============================");

// function DECLARATION base syntax
function functionName (parameter1, parameter2) {
    // FUNCTION BODY
}
// function => keyword for declaring a function
// function name => the name of the function(describes the function)
// parameters => values that are used in the function 

//function without parameters
function greet(){
    console.log(`Hello user!`);
}

// console.log("Hello Todor, Qinshift Academy wishes you happy holidays!");
// console.log("Hello Sirma, Qinshift Academy wishes you happy holidays!");
// HOW TO SOLVE THIS PROBLEM

// Function with one parameter
// studentName 
let studentName = "Sasho";
function greetStudent(studentName) {
    console.log(`Hello ${studentName}, Qinshift Academy wishes you happy holidays!`);
}

console.log("============================== Function Execution ==============================");
// calling (executing) previously declared function
// syntax for execution
// functionName() or if it has parameters functionName(parameter1, parameter2)

//calling the greet function
greet();

// calling the greetStudent function (function with one parameter)
greetStudent(studentName); // will get undefined for the studentName variable if we don't name as an argument(parameter)
greetStudent("Bob Bobsky");
greetStudent("Sirma");
greetStudent("Slavko");

console.log("============================== Function That returns a value ==============================");
// using the keyword 'return'
// NOTE: the execution of the ENDS with the RETURN (the code after that doesn't execute)

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
    console.log(`The result is ${result}.`); // UNREACHABLE CODE !!! 
}

let result = sum(5, 10);
console.log(`The result is ${result}.`);


// Function for getting a number statitic

// Switch example:

    // logic for getting the number stats
    // NOTE: SWITCH statements evaluates ONLY the VALUE of the passed variable
//     switch (number) {
//         case number > 0:
//             return "Positive";
//             // break; when we have return statement we don't need break

//         case number < 0 :
//             return "Negative";
        
//         case number === 0 :
//             return "Zero";
        
//         default: 
//             return "Invalid number!";
//     }
// }

function getNumberStats(number) {

if (number > 0) {
    return "Positive";
}
else if (number < 0) {
    return "Negative";
}
else if (number === 0) {
    return "Zero";
}
else {
    return "Invalid Number";
}

}
// let getNumberInput = parseInt(prompt("Enter a number"));
// 1) Get input
// getNumberStats(getNumberInput);
// console.log();


// 3) Check if the parsed value is a valid number !!! (optional step for now)
// 4) If the number is valid => Get number stats



// console.log(getNumberStats(inputNumber));

// console.log(getNumberStats(inputNumber));

// console.log(getNumberStats(inputNumber));

// let numberStats = getNumberStats(inputNumber);
// console.log(`The number ${inputNumber}`);

// 

// THE RETURN VALUE MUST BE USED IN SOME WAY, IT'S NOT ENOUGH TO JUST CALL THE FUNCTION

// Use a variable in the function next time to return the result
function sumNumbers(num1, num2) {
    return num1 + num2;
}
function subtractNumbers(num1, num2) {
    return num1 - num2;
}
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
function divideNumbers(num1, num2) {
    return num1 / num2;
}

let inputNumber1 = parseInt(prompt("Enter your number"));
let inputNumber2 = parseInt(prompt("Enter your number"));

let returnSumValue = sumNumbers(inputNumber1, inputNumber2);

let returnSubtractValue = subtractNumbers(inputNumber1, inputNumber2);

let returnMultiplyValue = multiplyNumbers(inputNumber1, inputNumber2);

let returnDivideValue = divideNumbers(inputNumber1, inputNumber2);

console.log(`The result is: ${returnSumValue}`);
console.log(`The result is: ${returnSubtractValue}`);
console.log(`The result is: ${returnMultiplyValue}`);
console.log(`The result is: ${returnDivideValue}`);



console.log("");
console.log("============================== Function Declaration ==============================");


console.log("Log numbers");
console.log("");
function logNumbers(num1, num2, num3) {
    console.log(`Number 1 : ${num1}`);
    console.log(`Number 2 : ${num2}`);
    console.log(`Number 3 : ${num3}`);
    console.log();
}
logNumbers(10,20,30);
logNumbers();
// logNumbers(10,,20);  ERROR
// logNumbers(10, 20, 30, 40); EXTRAS ARE IGNORED

//  Default (optional) parameters
console.log("Log data");
console.log("");
function logData(data1, data2, data3 = "default value") {
    console.log(`data 1 : ${data1}`);
    console.log(`data 2 : ${data2}`);
    console.log(`data 3 : ${data3}`);
    console.log();
}
logData(20, 30, 100);
logData(20, 30);

console.log("");
console.log("============================== JavaScript Built-in Functions ==============================");
console.log();
// # alert
// # prompt
// # console.log()
// # parseInt(Value)
// # parseFloat(Value)
// # Number(Value)
// # Boolean(value)
let parsedNumberValue = Number("234.2325");
console.log(parsedNumberValue);
// newer syntax => instead of Boolean we use!!
// regular syntax => console.log(Boolean("")) FALSE
// regular syntax => console.log(Boolean(" ")) TRUE
console.log(!!"");
console.log(!!"test");

console.log("");
console.log("============================== Ways of parsing strings into numbers ==============================");
console.log();

// 1) parseInt(Value)
// 2) parseFloat(value)
// 3) Number(value)
// 4) using the + operator
console.log(Number("235235.235235"));
console.log(+"235235.235235");