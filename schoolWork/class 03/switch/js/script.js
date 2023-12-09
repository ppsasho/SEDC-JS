console.log("======================= CONTROL STRUCTURES =======================");
// 1) Conditional Statements (if, else if, else)
// 2) Switch Statements
// 3) Looping structures
// Purpose: Control the flow

console.log("======================= CONTROL STRUCTURES =======================");
// Useful when you have multiple conditions to check against a SINGLE variable

// base syntax
let switchValue = "value1";
// if (switchValue == "value1") {
//     console.log("value1 message"); The same example using an if statement
// }
switch (switchValue) {
    case "value1" :
        console.log("value1 message");
        break;
    
    case "value2" :
        console.log("value2 message");
        break;

    case "value3" :
        console.log("value3 message");
        break;

    default :
    console.log("Incorrect value");
    break;
}

// Day of the week program using switch
let inputDay = parseInt(prompt("Enter day of the week (1-7):"));

switch (inputDay) {
    case 1:
        console.log("Monday.");
        break;

    case 2:
        console.log("Tuesday.");
        break;

    case 3:
        console.log("Wednesday.");
        break;

    case 4:
        console.log("Thursday.");
        break;

    case 5:
        console.log("Friday.");
        break;

    case 6:
        console.log("Saturday.");
        break;

    case 7:
        console.log("Sunday.");
        break;
            
    default:
        console.log("Invalid input (please enter a number between 1-7)");
        
}

// Check if it is a work day or weekend
// "fall through" scenario -> rarely used

switch (inputDay) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Work day.");
        break;

    case 6:
    case 7:
        console.log("Weekend.");
        break;

    default:
        console.log("Invalid input (please enter a number between 1-7)");
        
}