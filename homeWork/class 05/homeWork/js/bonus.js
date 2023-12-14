let content = document.getElementById("content");

content.innerHTML += "<h1>Bonus</h1>";

let recipeName = prompt("Enter recipe name");
let ingredientAmount = Number(prompt("Enter how many ingredients you want to have"));
let ingredients = [];

for (let i = 0; i < ingredientAmount; i++) {
    let ingredient = prompt("Enter your ingredient:");
    ingredients.push(ingredient);
}

let myTable = document.getElementById("table");
myTable.style.border = "2px solid";

content.innerHTML += `<h1>${recipeName}</h1>`;

for (let i = 0; i < ingredients.length; i++) {
    let tableRows = myTable.insertRow(i);
    let tableCells = tableRows.insertCell(0);
    tableCells.innerHTML = `Ingredient no.${i + 1} : ${ingredients[i]}`;
}