let number = 8;
let powerNumber = Math.pow(number, 3);
console.log(powerNumber);

let randomNumber = Math.random() * 100;
console.log(Math.round(randomNumber));

// ceil(rounds to higher number) floor(rounds to lower number)

//trim (removes white space around a string)
let stringWithWhiteSpaces = "     HEllo   world       ";
let trimmedString = stringWithWhiteSpaces.trim();
console.log(trimmedString);

let longString = "We are learning basic JavaScript";
let splitArray = longString.split(" "); //in parantheses enter seperator
console.log(splitArray);

let arrayOfWords = ["HEllo", "students", "from", "Qinshift", "Academy"];

let joinedString = arrayOfWords.join(" ");
console.log(joinedString);
