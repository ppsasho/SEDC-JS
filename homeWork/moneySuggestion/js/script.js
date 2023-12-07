let money = prompt("How much money do you have?(0-100+)");


if (money >= 100) {
    console.log('You\'re going all out tonight!');  
}

else if (money >= 75) {
    console.log('You got some money but don\'t let it get ahead of you!');  
}

else if (money >= 50) {
    console.log('Go out with some friends!');  
}

else if (money >= 30) {
    console.log('Keep it in your wallet, it\'s for the best.');  
}

else if (money >= 10) {
    console.log('Put it in your piggy bank : )');  
}

else {
    console.log('I don\'t know what to tell you anymore...');  
}
