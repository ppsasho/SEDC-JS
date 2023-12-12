// Excercise 1

// function findNumber(numberIn, array) {
//     let numberCounter=0;
//     for(let i = 0; i < array.length; i++) {
//         if (array[i] === numberIn ) {
//             numberCounter++;
//         }
//     }
//    return numberCounter;
// }

// let numbers = [1, 2, 4, 5, 6, 7, 7, 8, 9];
// let numberInput = Number(prompt("Enter a number"));

// if (!isNaN(numberInput)) {
//     returnNumber = findNumber(numberInput, numbers);
//     console.log(`There is ${returnNumber} occurrences of number ${numberInput} in the array!`);
// }
// else {
//     console.log("No number was entered!");
// }



//  Excercise 2
         
// function findNumber(array, type) {
//     numbersResult = "";
//     if (type === "even") {
//         for(let i = 0; i < array.length; i++) {
//             if (array[i] % 2 === 0) {
//                 numbersResult += (array[i] + " "); 
//             }
//         }
//         return numbersResult;
//     }
//     else if(type === "odd") {
//         for(let i = 0; i < array.length; i++) {
//             if (array[i] % 2 !== 0) {
//                 numbersResult += (array[i] + " "); 
//             }
//         }
//         return numbersResult;
//     }

// }

// let numbers = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10];

// let typeInput = prompt("Do you want to find all the odd or even numbers in the array?");
// if(typeInput === "even" || typeInput === "odd") {
//     let returnNumber = findNumber(numbers, typeInput);
//     console.log(`The numbers found in the array are: ${returnNumber}.`);
// }
// else {
//     console.log("No type was specified.");
// }



// HOMEWORK #1

// function tellStory(name, mood, activity) {
//     let story = `This is ${name}.${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
//     return story;
// }
// let storyName = prompt("Enter a name for your story:");
// let storyMood = prompt("Enter a mood for your story:");
// let storyActivity = prompt("Enter a activity for your story:");

// let returnStory = tellStory(storyName, storyMood, storyActivity);

// console.log(returnStory);




// HOMEWORK #2

// function sumNumbers(numbers) {

//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;

// }

    // let numbers = [1, 2, 3, 4, 5];
//     let returnNumbers = sumNumbers(numbers);
    
//     console.log(returnNumbers);

//     let numbers = [1, 2, 3, "Bottle", 5];
// function validateNumbers(numbers) {
//     for (let i = 0; i <= numbers.length; i++) {
//         if (!isNaN(numbers[i]) === true) {
//             console.log(`${numbers[i]} is a valid number!`);
//         }
//         else if (isNaN(numbers[i]) === true) {
//             console.log(`${numbers[i]} is not a number!`);
//             break;
//         }
//     }
// }

// let returnValidatedNumbers = validateNumbers(numbers);
// console.log(returnValidatedNumbers);



// HOMEWORK #3

// let words = [
// "Today",
//  "is",
//   "going",
//    "to",
//     "be",
//      "a",
//       "wonderful",
//        "day",
//         "isn't",
//          "it",
//           "?"];

// function combineStrings(array) {
//     let sentence = "";
//     for(let i = 0; i < array.length;i++) {
//         if (i === 7) {
//             sentence += (array[i] + ", ");
//             continue;
//         }
//         sentence += (array[i] + " ");
//     }
//     return sentence;
// }

// let returnSentence = combineStrings(words);

// console.log(returnSentence);



// HOMEWORK #4

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i}\n.`);
//     }
//     else {
//         console.log(`${i}   .`);
//     }
// }

// HOMEWORK #5

// function sumMaxMin(array, max = -Infinity, min = +Infinity, word = "") {

// for (let i = 0; i < array.length;i++) {
//     if(max < array[i]) {
//         max = array[i];
//     }
//     if(min > array[i]) {
//         min = array[i];
//     }
//     if(typeof(array[i]) === "string") {
//         word += (" " + array[i]);
//     }
// }
//     result = (max + min) + word;
//     return result;

// }

// numbers = [10, 2, 30, 60, "apple", 8, "banana", 14];

// let returnSum = sumMaxMin(numbers);

// console.log(returnSum);



// HOMEWORK #6

// function nameCombiner(firstNames, lastNames,         fullNames = []) {
//     for (i = 0; i < firstNames.length; i++) {
//         fullNames.push(`\n${i + 1}. ` + (`${firstNames[i]} ${lastNames[i]}`));
//     }
//     return fullNames;
// }

// let firstNames = 
// [
// "Halle",
//  "Jamari",
//   "Natalie",
//    "Kenneth",
//     "Isla"
// ];

// let lastNames = 
// [
// "Nunez",
//  "Tang",
//   "Wilkinson",
//    "Ho",
//     "Callahan"
// ];

// let returnFullNames = nameCombiner(firstNames, lastNames);

// console.log(`The magic of nameCombiner gives us the next names: ${returnFullNames}`);
