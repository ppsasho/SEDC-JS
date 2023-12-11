console.log("======================== ARRAYS ========================");
// Grupiranje na srodni vrednosti vo edna struktura
// one type of collection
// list of comma-seperated values
// We can store any type of data in an array

console.log("");
console.log("======================== Creating an ARRAY ========================");
console.log("");
// we use square brackets [] to create an array

let emptyArray = [];
console.log(emptyArray);
console.log(typeof emptyArray);
console.log(emptyArray.length);

// an array of strings
let fruits = ["Pear", "Strawberry", "Apple", "Banana"];
console.log(fruits);
console.log(fruits.length);

// An array aligned verticlly returns the same result
let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]
console.log(days);

// array of numbers
let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(digits);

// array of mixed values
// don't do this!!!
let mixedArray = [true, "Hello", 0, false, null];
console.log(mixedArray);



console.log("");
console.log("======================== Accessing an ARRAY ========================");
console.log("");

// by index
// Javascript arrays are zero-indexed => always start from 0

console.log(mixedArray[1]);
console.log(mixedArray[3]);

let someDay = days[5];
console.log(someDay); //    Saturday
console.log(days[10]); //   undefined
console.log(days[days.length-1]);



console.log("");
console.log("======================== Changing items values ========================");
console.log("");

console.log(fruits[2]);
fruits[2] = "watermelon"; //It's not a fruit but ya get the point
console.log(fruits[2]);

console.log("");
console.log("======================== Adding items ========================");
console.log("");

// console.log(fruits[10]);
// fruits[10] = "Fig";
// console.log(fruits[10]);
// console.log(fruits);
// DON'T DO THIS

// 1) push() => adds one or more items to the end of an array

// adding single item
console.log(fruits[fruits.length]);
console.log(fruits);
fruits.push("Fig");
console.log(fruits);

//  adding multiple items
fruits.push("Raspberry", "Dates", "Papaya", "Kiwi");
console.log(fruits);
console.log(fruits.length);


// 2) unshift()
console.log(fruits[0]);
fruits.unshift("Kiwi");
console.log(fruits[0]);

fruits.unshift("Olive", "Hazelnut");
console.log(fruits);



console.log("");
console.log("======================== Deleting items ========================");
console.log("");

// 1) pop() => removes the last item from an array AND returns

console.log(fruits);
console.log(fruits.length);
fruits.pop();
console.log(fruits);
console.log(fruits.length);

let lastItem = fruits.pop();
console.log(`The item ${lastItem} has been removed.`);
console.log(fruits);

// 2) shift()

fruits.shift(); // removes the first element
console.log(fruits);
let firstItem = fruits.shift();
console.log(fruits);
console.log(`the item ${firstItem} has been removed.`);

// 3) splice()

console.log("");
console.log(days);
let removedDays = days.splice(2, 2); // starts removing from the index 2 and removes a total of 2 items 
console.log(`The days (${removedDays}) have been removed`);
console.log(days);

days.splice(1) // If no second parameter is set it removes the rest of the items
console.log(days);
