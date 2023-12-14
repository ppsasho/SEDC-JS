// let myDiv = document.getElementById("main");

// console.log("My first div:");
// console.log(myDiv);

// let domHeaders = document.getElementsByTagName("h1");



// console.log("============================");
// console.log("All headers in the HTML File:");
// console.log(domHeaders);



// console.log("============================");
// let domHeaderSibling = domHeaders[0].nextElementSibling;

// console.log("The sibling element to the first h1 element in the HTML:");
// console.log(domHeaderSibling);



// console.log("============================");

// let findParagraphs = document.getElementsByClassName("myParagraph");

// console.log("All the paragraphs with the same class name:");
// console.log(findParagraphs);



// console.log("============================");
// console.log("Changing text from JS");
// let secondParagraph = findParagraphs[1];

// secondParagraph.innerHTML += "(new text from js)";

// let firstParagraph = findParagraphs[0];

// firstParagraph.innerHTML = "Wait why isn't this text in HTML?";



// console.log("============================");
// console.log("Get an element from HTML using their tag name");

// let textTag = document.getElementsByTagName("text");

// console.log(textTag);

// textTag[0].innerHTML += " and some more random text"



// console.log("============================");
// console.log("Using query selectors to find the first element it finds");

// let firstParagraphTitle = document.querySelector(".myParagraph");

// console.log(firstParagraphTitle);



// console.log("============================");
// console.log("Find sibling elements");

// let sibling = myDiv.nextElementSibling;

// console.log(sibling);



// console.log("============================");
// console.log("Find parent elements");

// let paragraphParent = firstParagraphTitle.parentElement;

// console.log(paragraphParent);



// console.log("============================");
// console.log("Find child elements");

// firstChild = myDiv.firstElementChild;

// console.log("The first child inside myDiv");
// console.log(firstChild);

// lastChild = myDiv.lastElementChild;

// console.log("The last child inside myDiv");
// console.log(lastChild);



// console.log("============================");
// console.log("Pull text from an element with/without spaces");

// let myDivNoSpace = myDiv.textContent;

// let myDivWithSpace = myDiv.innerHTML;

// console.log("My div with no white spaces");
// console.log(myDivNoSpace);

// console.log("My div with white spaces");
// console.log(myDivWithSpace);

// console.log("============================");
// console.log("Edit text");

// let header = document.getElementById("myTitle");

// console.log(`Unchanged text: ${header.innerText}`);

// header.innerText += " some more cool text from JS"



// console.log("============================");
// console.log("Add code from JS");

// myDiv.innerHTML += `<p class="new"> Paragraph Generated from JS </p>`;
// myDiv.style.color = "purple";
// console.log(myDiv);

// let myBody = document.getElementById("body");

// myBody.style.backgroundColor = "grey";

let firstDiv = document.querySelector("div");
console.log(firstDiv);


let allParagraphs = document.getElementsByClassName("paragraph");
console.log(allParagraphs);

let allDivs = document.getElementsByTagName("div");

let lastDiv = allDivs[allDivs.length-1];
console.log(lastDiv);

let header3 = lastDiv.children[1];
let header1 = lastDiv.children[0];
console.log(header3.innerHTML);
console.log(header1.innerHTML);

let secondDiv = document.getElementsByClassName("anotherDiv");

console.log(secondDiv);

let secondParagraph = document.getElementsByClassName("second");
console.log(secondParagraph);

let secondDiv1 = allDivs[allDivs.length-2];
console.log(secondDiv1);
let textTag = secondDiv1.children[1];

textTag.innerHTML += "text";

header3.innerText = " Added some cool text from JS";
header1.innerText = " Added some more cool text from JS";