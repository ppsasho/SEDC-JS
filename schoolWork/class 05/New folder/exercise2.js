function weightCalculatorChicken(weight, chicken = 0.5) {
    result = (weight / chicken);
    return result;
}

weightInput = Number(prompt("Enter weight:"));

returnWeightResult = weightCalculatorChicken(weightInput);

console.log(`The result is: ${returnWeightResult}kg`);

let weightResultParagraph = document.getElementById("test");

console.log(weightResultParagraph);

weightResultParagraph.innerText += ` The result is ${returnWeightResult} chickens`;
