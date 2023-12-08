let result = 2 / 'hello';
console.log(result);

console.log(typeof(result));

console.log(result == NaN); // Don't use this way to check NaN
console.log(result === NaN);// Don't also use this way
console.log(isNaN(result)); // How to check if a variable is NaN

let randomText = 'Hello World';
console.log(isNaN(randomText));
console.log('Negated',!isNaN(randomText));


// NaN example
const myNum1 = 5;
const myNum2 = '5';
const myNum3 = 'foo';
const myResult1 = myNum1 * myNum2;
const myResult2 = myNum1 * myNum3;
console.log('myNum1:',myNum1,'type: ', typeof myNum1);
console.log('myNum1:',myNum2,'type: ', typeof myNum2);
console.log('myNum1:',myNum3,'type: ', typeof myNum3);
console.log('myResult1:',myResult1,'type: ', typeof myResult1);
console.log('myResult2:',myResult2,'type: ', typeof myResult2);



let infinityValue = Infinity;
console.log(infinityValue);
console.log(typeof(infinityValue));