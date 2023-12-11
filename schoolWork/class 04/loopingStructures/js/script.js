console.log("============================== LOOPING STRUCTURES ==============================");
console.log("");

console.log("============================== WHILE LOOP ==============================");
console.log("");
// executes a block of code as long as a specified condition is true

// syntax
// while (condition) {
//     // code to be executed
// }

// let counter = 1;
// while (counter <= 5) {
//     console.log(counter);
//     counter ++;
// }

// students = ["Bob Bobsky", "Alex Jones", "Patritia", "Petko Petkovski"];

// let studentCounter = 0;
// while (studentCounter < students.length) {
//     console.log(`Student #${studentCounter + 1}: ${students[studentCounter]}`);
//     studentCounter ++;
// }



// students.forEach((student) => console.log(student)); Another way of doing it



// let index = 0;
// let max = -Infinity;
// let numbers = [1, 2, 3, 4 , 5 , 6, 7, 8, 9, 10];
// while(index <= numbers.length) {
//     if (numbers[index] > max) {
//         max = numbers[index];
//     }
//     console.log(numbers[index]);
    
    
//     // if (index === numbers.length) {
//     //     //  Math.max(numbers); Math.max() DOEN'T WORK ON ARRAYS

//     // }
//     index ++;
// }

console.log("");
console.log("============================== DO-WHILE LOOP ==============================");
console.log("");

// let doWhileCounter = 0;
// do {
//     console.log(students[doWhileCounter]);
//     doWhileCounter++;
// } while (doWhileCounter < 4)




console.log("");
console.log("============================== FOR LOOP ==============================");
console.log("");

// syntax
// for (counter initialization; condition; increment/decrement counter){

// }

// Example

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// Example with decrement

// for (let i = 5; i => 0; i--) {
//     console.log(i);              Nahhh don't uncomment this one 
// }

let cities = ["Skopje", "New York", "Tokyo", "Prilep"];

// for (let i = 0; i < cities.length; i++) {
//     let cityInfo = `City #${i + 1}: ${cities}`;
//     if (cities[i] ===)                           UNFINISHED

// }



console.log("");
console.log("============================== FOR-OF LOOP ==============================");
console.log("");

for(let city of cities) {
    console.log(city);
}



console.log("");
console.log("============================== BREAK & CONTINUE ==============================");
console.log("");

let numbers = [1, 1235, 4345, 40, 644, 346, 75, 7345];

// Example
for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[j]);
    if(numbers[j] === 40) {
        console.log(`Found ${numbers[j]} Existing in the loop!`);
        break;
    }
}

// CONTINUE
// Example => log if a number is divisible by 4 or not

for (let number of numbers) {
    if (number % 4 === 0) {
        console.log(`The number ${number} is divisible by 4!`);
        continue;
    }
    console.log(`The number ${number} is divisible by 4!`);
    
    // else {
    //     console.log(`The number ${number} is divisible by 4!`);
    // }
}
