// Money suggestion

// let money = prompt("How much money do you have?(0-100+)");

// if (money >= 100) {
//     console.log('You\'re going all out tonight!');  
// }

// else if (money >= 75) {
//     console.log('You got some money but don\'t let it get ahead of you!');  
// }

// else if (money >= 50) {
//     console.log('Go out with some friends!');  
// }

// else if (money >= 30) {
//     console.log('Keep it in your wallet, it\'s for the best.');  
// }

// else if (money >= 10) {
//     console.log('Put it in your piggy bank : )');  
// }

// else {
//     console.log('I don\'t know what to tell you anymore...');  
// }



// Input day of the week

// let weekNumber = prompt("Enter a number between 1-7");
// weekNumber = parseInt(weekNumber);
// if (weekNumber === 1) {
//     console.log("You got Monday!");
// }
// else if (weekNumber === 2) {
//     console.log("You got Tuesday!");
// }
// else if (weekNumber === 3) {
//     console.log("You got Wednesday!");
// }
// else if (weekNumber === 4) {
//     console.log("You got Thursday!");
// }
// else if (weekNumber === 5) {
//     console.log("You got Friday!");
// }
// else if (weekNumber === 6) {
//     console.log("You got Saturday!");
// }
// else if (weekNumber === 7) {
//     console.log("You got Sunday!");
// }



// Grade Input

// let subj1 = prompt("Enter your Physics mark: (max = 100)");
// let subj2 = prompt("Enter your Chemistry mark: (max = 100)");
// let subj3 = prompt("Enter your Biology mark: (max = 100)");
// let subj4 = prompt("Enter your Mathematics mark: (max = 100)");
// let subj5 = prompt("Enter your Computer mark: (max = 100)");


// Tried to parse all 5 subjects using an array in a for loop

// let sumSubjects = [subj1, subj2, subj3, subj4, subj5];
// for (let i = 0; i <= sumSubjects.length; i++) {
//     parseFloat(sumSubjects[i]);
// }                                   
// for (let i = 0; i <= sumSubjects.length; i++) {
//     console.log(typeof(sumSubjects[i]));
// }


// subj1 = parseFloat(subj1);
// subj2 = parseFloat(subj2);
// subj3 = parseFloat(subj3);
// subj4 = parseFloat(subj4);
// subj5 = parseFloat(subj5);

// let grade = (subj1 + subj2 + subj3 + subj4 + subj5) / 500 ;
// grade *= 100;
// console.log(`Your final grade is ${grade}%!`);
// if (grade >= 90) {
//     console.log("You got an A!");
// }

// else if (grade >= 80) {
//     console.log("You got an B!");
// }

// else if (grade >= 70) {
    
//     console.log("You got an C!");
// }
// else if (grade >= 60) {
//     console.log("You got an D!");
// }

// else if (grade >= 40) {
//     console.log("You got an E!");
// }

// else {
//     console.log("You got an F!");
// }



// Find the maximum between 2 numbers

// let num1 = prompt("Enter your first number:");
// let num2 = prompt("Enter your second number:");
// console.log('The bigger number is: ', Math.max(num1, num2));



// Find the maximum between 3 numbers

// let num1 = prompt("Enter your first number:");
// let num2 = prompt("Enter your second number:");
// let num3 = prompt("Enter your third number:");
// console.log('The bigger number is: ', Math.max(num1, num2, num3));



// Check number type

// let number = prompt("Enter a number:");
// number = parseInt(number);
// if (number > 0){
//     console.log("You entered a positive number!");
// }
// else if (number < 0) {
//     console.log("You entered a negative number!");
// }
// else if (number == 0) {
//     console.log("You entered a zero!");
// }



// Check input type

// let input = prompt("Enter a number/word");
// input = parseInt(input);
// if (isNaN(input) == true) {
//     console.log("You didn't enter a number!");
// }
// else {
//     console.log("You entered a number!");
// }



// Chinese zodiac calculator

// let year = prompt("Enter the year you were born in:");
// year = parseInt(year);
// year = (year - 4) % 12;

// console.log(`Your zodiac number is ${year}.`);

// let zodiac;
// switch(year) {

// case 11:
//     zodiac = 'Pig';
//     break;

// case 10:
//     zodiac = 'Dog';
//     break;

// case 9:
//     zodiac = 'Rooster';
//     break;

// case 8:
//     zodiac = 'Monkey';
//     break;

// case 7:
//     zodiac = 'Goat';
//     break;

// case 6:
//     zodiac = 'Horse';
//     break;

// case 5:
//     zodiac = 'Snake';
//     break;

// case 4:
//     zodiac = 'Dragon';
//     break;

// case 3:
//     zodiac = 'Rabbit';
//     break;

// case 2:
//     zodiac = 'Tiger';
//     break;

// case 1:
//     zodiac = 'Ox';
//     break;

// case 0:
//     zodiac = 'Rat';
//     break;
    
//     default:
//         console.log("No year was entered.");
// }
// console.log(`Your Chinese Zodiac is ${zodiac}!`);