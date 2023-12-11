// let globalNumber = 2000;

// function getGlobalNumber(num) {
//     globalNumber = 1000;
//     console.log(globalNumber);
// }

// getGlobalNumber();

// console.log(globalNumber);



// function localScope(number) {
//     let localNumber = 100;
//     let result = localNumber + number;
//     console.log(result);
// }

// console.log(localNumber); // ERROR

// localScope(50);



// let greeting = "Hello from Home";
// function printGreeting() {
//     let greeting = "Happy holidays!";
//     console.log(greeting);
// }
// console.log(greeting);
// printGreeting();



// function outerFunction() {
//     let outerVariable = "I'm from the outer function";

//     // Never do this!!!
//     function innerFunction(){
//         let innerVariable = "I'm from the inner function";
//         console.log(outerVariable);
//         console.log(innerVariable);
//     }
//     // console.log(innerVariable); ERROR

//     innerFunction();
// }

// outerFunction();
// innerFunction(); // ERROR



if (50 < 100){
    let blockNumber = 50 + 100;
    // var blockNumber = 50 + 100;  DON'T USE var
    console.log(`The result is: ${blockNumber}!`);
}
// console.log(blockNumber);  ERROR