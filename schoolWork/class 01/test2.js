let name = 'Jovan';
let myName = 'Sasho';
let num1 = 5; let num2 = 456;
let result = num2 / num1 ;
console.log(name);
// console.log(myName);
console.log(result);

name = 'Bob';
console.log(name);

name = 345;
console.log(name);
const conversionRate = 1;  //Global
console.log('The conversion rate is:', conversionRate);
for (let i = 0; i <= conversionRate;i++) {
    //LOCAL 
 console.log('loop num', i); //can only be logged inside the for block.
}

console.log('----------------------------------');

let myNum;
console.log(myNum);
console.log(typeof myNum);
myNum = 1351;
console.log(myNum);

let numberWithNullValue = null;
console.log(numberWithNullValue);
console.log(typeof myNum);
console.log(5 == '5'); //checks if the content is the same
console.log(5 === 5); //also checks variable type
let textWithNewLine = 'This is the first line.\nVery cool';
console.log(textWithNewLine);