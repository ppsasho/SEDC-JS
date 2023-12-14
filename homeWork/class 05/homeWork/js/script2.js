let myContent = document.getElementById("content");

myContent.innerHTML += "<h1>Part 2</h1>";

let myNumbers = [2, 4, 5];
sum = 0;
for (let i = 0; i < myNumbers.length; i++) {
    sum += myNumbers[i];
    myContent.innerHTML += `<li>number ${[i + 1]} = ${myNumbers[i]}</li>`;
}
myContent.innerHTML += `<br>The result of (${myNumbers[0]} + ${myNumbers[1]} + ${myNumbers[2]}) is ${sum}!`;
