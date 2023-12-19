let button = document.getElementById("button");
let list = document.getElementById("list");
let userName = document.getElementById("name");
let userLastName = document.getElementById("lastName");
let userAge = document.getElementById("age");

let students = [];

function studentCreation(studentName, studentLastName, studentAge) {

    this.name = studentName.value;
    this.lastName = studentLastName.value;
    this.age = studentAge.value;

    this.studentInfo = function(){
        userName.value = "";
        userLastName.value = "";
        userAge.value = "";
        return `The student ${this.name} ${this.lastName}, age ${this.age} has been created. `;
}
}

button.addEventListener("click", function() {
    Number(userAge.value);
    if (userName.value === "" || lastName.value === "" || isNaN(userAge.value) === true){
        alert("Please check that all your credentials are entered correctly.");
    }
    else {
        let student = new studentCreation(userName, userLastName, userAge);
        let students = [];
        students.push(student);
        console.log(student.studentInfo());
        console.log(students);
        list.innerHTML += `<li>${student.name} ${student.lastName} (Age: ${student.age})</li>`;
    }
});

