let content = document.getElementById("content");
let storyWho = document.getElementById("who");
let storyWhat = document.getElementById("what");
let storyWhen = document.getElementById("when");
let button = document.getElementById("button");
// let inputNumber = Number(prompt("Enter a number:"));
// let inputString = prompt("Enter a word:");
// let bool = true;
// let object = {};
// object.name = prompt("Enter a name for your object:");
// let array = [];
// let collection = [];
// let typeCollection = [inputNumber, inputString, bool, object, array];
// for(let type of typeCollection) {
//     console.log(`${type} has a type of :${typeof(type)}`);
// }



// 2

// let collection = []

// for (let i = 5; collection.length <= i; i++) {
//     let input = Number(prompt("Enter a value"));
//     collection.push(input);
// }
// for (let i = 0; i < collection.length; i++) {
//     console.log(typeof(collection[i]));
// }



//  3
// let input = Number(prompt("Enter a number"));
// function compareNumbers(enter) {
//     let num = 13;
//     if (enter > num) {
//         let result = (enter - num) * 2;
//         return `The number is greater than 13 and the difference is doubled: ${result}`;
//     }

//     else {
//         return `The number is not greater than 13`;
//     }
// }
// console.log(compareNumbers(input));



// 4

// let input1 = Number(prompt("Enter first number"));
// let input2 = Number(prompt("Enter second number"));

// function findCloserNumber(input1, input2) {
//     if (input1 < 0 || input2 < 0) {
//         alert("Please enter a positive number:");
//     }
//     if (input1 > 100 || input2 > 100) {

//         if ((input1 && input2) > 100) {

//             if (input1 < input2) {
//                 return `First ${input1}, Second ${input2}. ${input1} is closer to 100.`;
//             }
//             else {
//                 return `First ${input1}, Second ${input2}. ${input2} is closer to 100.`;
//             }
//         }

//         else if (input1 > 100) {

//         }
//     }

//     else {
//         if (input1 > input2) {
//             return `First ${input1}, Second ${input2}. ${input1} is closer to 100.`;
//         }
//         else {
//             return `First ${input1}, Second ${input2}. ${input2} is closer to 100.`;
//         }
//     }

// }
// console.log(findCloserNumber(input1, input2));



// 5

// let Bob = 1000;

// function expenses(person) {
//     let rent = 375;
//     let bills = 250;
//     let totalExpenses = rent + bills;
//     let leftOver = person - totalExpenses;
//     content.innerText = `Bob has ${leftOver}$ left for the month, his total amount for expenses was ${totalExpenses}$.`;
// }

// expenses(Bob);



//  6

// let studentName = 'Bob Bobsky';
// let studentSubjects = ['Math', 'English', 'Science', 'Sport', 'Chemistry'];
// let studentGrades = [10, 6, 8, 9, 6];

// function showStudent(student, subjects, grades) {
//     let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//         sum += (grades[i]);
//     }

//     sum /= grades.length;

//     content.innerHTML = `<p>Student: ${student}</p>`;

//     for (let i = 0; i < subjects.length; i++) {
//         content.innerHTML += `${subjects[i]}: ${grades[i]}<br>`;
//     }

//         if (sum > 8) {
//             alert(`The student passes with an avarage grade of ${sum}.`);
//         }
//             else {
//                 alert(`The student has an avarage of (${sum}), which is lower than the required to pass.`);
//             }
// }

// showStudent(studentName, studentSubjects, studentGrades);



// 7

// let input = Number(prompt("Enter a number"));
// switch (input) {
//     case input < 0:
//         console.log(`${input} is invalid! Enter a positive number.`);
//     break;

//     case (input % 3 === 0):
//         console.log(`${input} Fizz`);
//     break;

//     case (input % 7 === 0):
//         console.log(`${input} Buzz`);
//     break;

//     case (input % 3 === 0 && input % 7 === 0):
//         console.log(`${input} FizzBuzz`);
// }

// function fizzBuzz() {
//     let input = Number(prompt("Enter a number"));
//     if (input > 0) {
//         if (input % 3 === 0 || input % 7 === 0) {
//             if (input % 3 === 0 && input % 7 === 0) {
//                 console.log(`${input} FizzBuzz`);
//             }
//             else if (input % 3 === 0) {
//                 console.log(`${input} Fizz`);
//             }
//             else if (input % 7 === 0) {
//                 console.log(`${input} Buzz`);
//             }
//         }
//         else {
//             console.log(`${input} is not a multiple of 3 or 7.`);
//         }
//     }
//     else {
//         console.log(`${input} is invalid! Enter a positive number.`);
//     }
// }
// fizzBuzz();



//  8

// function joinElements(){
//     let elementCollection = [];

//     let string = '';
    
//     for (let i = 0; elementCollection.length < 5; i++) {
//         let input = prompt(`Enter element ${i + 1}`);
//         elementCollection.push(input);
//     }
//     for (let i = 0; i < elementCollection.length; i++) {
//         string += elementCollection[i];
//     }
//     content.innerText = `result: ${string}`;
// }
// joinElements();



//  9

// let undefinedValue;

// let newArray = [false, 0, undefinedValue, '', true, 3.14, '0', -42, {}, 12n];

// for (let item of newArray) {
//     if ()
// }



//  10

function storyTeller(who, what, when) {
    return `${who.value} was a ${what.value} ${when.value}.`
}
button.addEventListener("click", function() {
    if (storyWho.value === "" || storyWhat.value === "" || storyWhen.value === ""){
        alert("Please make sure you filled in all the requirements first.");
    }
    else {
        console.log(storyTeller(storyWho, storyWhat, storyWhen));
        who.value = '';
        what.value = '';
        when.value = '';
    }

})
