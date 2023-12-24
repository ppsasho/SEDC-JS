let content = document.getElementById("content");
let taskInput = document.getElementById("taskInput");
let button = document.getElementById("button");
let listContainer = document.getElementById("unOrderedList");

let tasks = [];

function isChecked(checkbox, listItem) {
    if (checkbox.checked) {
        listItem.style.textDecoration = 'line-through';
    } 
    else {
        listItem.style.textDecoration = 'none';
    }
}

function displayTasks(array) {
listContainer.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let id = i + 1;
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${id}`;
        checkbox.name = `myCheckBox${id}`;
        checkbox.value = 'value';

        let listItem = document.createElement('li');
        listItem.textContent = array[i];
        checkbox.addEventListener("click", function() {
            isChecked(checkbox, listItem);
        });

        listItem.appendChild(checkbox);
        listContainer.appendChild(listItem);
        
        console.clear();
        console.log(array);
    }
}

button.addEventListener("click", function() {
    if (taskInput.value === "") {
        alert("No task was entered!");
    }
    else {
        tasks.push(taskInput.value);
        taskInput.value = '';
        displayTasks(tasks);
    }
})
