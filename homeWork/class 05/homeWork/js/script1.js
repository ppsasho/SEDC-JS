let allDivs = document.getElementsByTagName("div");
let lastDiv = allDivs[allDivs.length-1];
let header3 = lastDiv.children[1];
let header1 = lastDiv.children[0];
let firstParagraph = document.querySelector("p");
let secondDiv1 = allDivs[allDivs.length-2];
let secondParagraph = secondDiv1.children[0];

myTitle.innerText = "New title from JS";
firstParagraph.innerText = "New text for the first paragraph";
secondParagraph.innerText = "New text for the second paragraph";
header1.innerText = " Added some cool text from JS";
header3.innerText = " Added some more cool text from JS";

