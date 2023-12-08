let pass = 50;
let score = 90;
let hasPassed = score >= pass;
let hasPassedNegated = !(score >= pass);


console.log(hasPassed);
console.log(hasPassedNegated);

console.log('Logical AND');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('Logical OR');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


console.log('Comparison');
console.log(!true);
console.log(!false);

let comparison1 = 5 < 10;
let comparison2 = 10 != '10';
let comparison3 = 10 !== '10';
console.log(comparison1); //true
console.log(comparison2); //false
console.log(comparison3); //true 

console.log(comparison1 && comparison2); // false
console.log(comparison2 || comparison3) //true

// Truthy/Falsy values
console.log('Truthy/Falsy Values');
console.log(false && (5==6));
console.log('cat' && 50);
console.log('cat' && 0);
console.log( 0 && 'cat');

console.log(false || (5==6));
console.log('cat' || 50);
console.log('cat' || 0);
console.log( 0 || 'cat');

// let score1 = prompt('Enter score: ');
// if (score1 >= 100) {
//     alert('You win!');
// }
// else {
//     alert('You lose!');
// }
