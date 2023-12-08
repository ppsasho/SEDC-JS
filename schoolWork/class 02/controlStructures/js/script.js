// let score1 = prompt('Enter score: ');
// if (score1 >= 100) {
//     alert('You win!');

//         score1 = score1 - 100;
//         alert(`You got ${score1} extra points!`);1
// }
// else {
//     alert('You lose!');
// }

// let points = prompt('Enter exam points:');
// if (points > 60) {
//     console.log('You passed the exam!');
// }
// else {
//     console.log('You failed the exam!');
// }

let scorePoints = prompt('Enter score points:');
if (scorePoints <= 50){
    console.log('You failed!');
}
else if (scorePoints <= 70) {
    console.log('Your grade is D');
}
else if (scorePoints <= 80) {
    console.log('Your grade is C');
}
else if (scorePoints <= 90) {
    console.log('Your gradei s B');
}
else {
    console.log('Your grade is A');
}

// const pasedUserInput = parseFloat();