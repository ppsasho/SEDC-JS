let paragraph = document.getElementById("paragraph");
let table = document.getElementById("table");
table.style.border = "8px outset";

let inputRows = Number(prompt("enter amount of rows:"));
let inputCollumns = Number(prompt("enter amount of collumns:"));
let tableCells;
paragraph.innerText = `This table has ${inputRows} rows and ${inputCollumns} collumns.`;

for (let i = 0; i < inputRows; i++) {
    let tableRow = table.insertRow(i);
    for (let b = 0; b < inputCollumns; b++) {
        tableCells = tableRow.insertCell(b);
        tableCells.innerText += `Row-${i+1} Collumn-${b + 1}`;
    }
}
