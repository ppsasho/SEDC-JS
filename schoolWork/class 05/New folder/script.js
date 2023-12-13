console.log("test!");

let ourHeader = document.getElementById("myTitle");
console.log(`My header's text: ${ourHeader.innerHTML}`);
console.log(`${ourHeader}`);
console.log(ourHeader);
ourHeader.style.border = "4px ridge black";
ourHeader.style.backgroundColor = "aquamarine";
ourHeader.style.width = "fit-content";
ourHeader.style.padding = "5px";
ourHeader.innerText += " (This is text from JS)";



console.log("1");
console.log("============================== Access by Class ==============================");
console.log("");

let ourParagraphs = document.getElementsByClassName("myParagraph");
console.log(ourParagraphs);
console.log(`ourParagraphs length: ${ourParagraphs.length}`);
console.log(`ourParagraphs first element: ${ourParagraphs[0].innerHTML}`);



console.log("2");
console.log("============================== Access by Tag ==============================");
console.log("");

let paragraphs = document.getElementsByTagName("p");
console.log(`All the paragraphs in our HTML: ${paragraphs[0].innerHTML}`);



console.log("3");
console.log("============================== Access by css selectors ==============================");
console.log("");

let firstDivWithClass = document.querySelector(".myDiv");

console.log(firstDivWithClass);

let allDivsWithClass = document.querySelectorAll(".myDiv");

console.log(`All the divs in the HTML: ${allDivsWithClass.length}`);
console.log(allDivsWithClass);
console.log(`${allDivsWithClass[0].innerText}`);



console.log("4");
console.log("============================== Siblings ==============================");
console.log("");

let header = document.getElementsByTagName("h1")[0];
console.log(header);

let nextSibling = header.nextElementSibling;
console.log(nextSibling);



console.log("5");
console.log("============================== Children ==============================");
console.log("");

let children = document.getElementById("main").children;

console.log(children);

