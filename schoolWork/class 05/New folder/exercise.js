let firstDiv = document.getElementById("first");

console.log(`First div: ${firstDiv.innerText}`);

let allParagraphs = document.getElementsByTagName("p");

console.log(allParagraphs);

let allDivs = document.getElementsByTagName("div");
let lastDiv = allDivs[allDivs.length-1];

console.log(`The last div in the HTML is: ${lastDiv.innerHTML}`);

let lastDivH3 = lastDiv.children;
console.log(lastDivH3[1]);

let lastDivH1 = lastDiv.children;
console.log(lastDivH1[0]);

console.log("Next");

let secondDiv = document.getElementsByClassName(".anotherDiv");

console.log(secondDiv);

let firstParagraphSecondDiv = secondDiv.child;

console.log(firstParagraphSecondDiv.innerHTML);

// let secondDivText = 

