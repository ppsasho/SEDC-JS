let paragraph = document.getElementById("paragraph");
let table = document.getElementById("table");

let inputRows = Number(prompt("enter amount of rows:"));
let inputCollumns = Number(prompt("enter amount of collumns:"));

if (!isNaN(inputRows && inputCollumns) === true) {
    table.style.border = "8px outset";
    let tableCells;
    paragraph.innerText = `This table has ${inputRows} rows and ${inputCollumns} collumns.`;
    
    for (let i = 0; i < inputRows; i++) {
        let tableRow = table.insertRow(i);
        for (let b = 0; b < inputCollumns; b++) {
            tableCells = tableRow.insertCell(b);
            tableCells.innerText += `Row-${i+1} Collumn-${b + 1}`;
        }
    }
    
}
else {
    alert(
        "You need to enter digits only!"
    );
}