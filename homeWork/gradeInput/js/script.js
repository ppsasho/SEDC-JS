let subj1 = prompt("Enter your Physics mark: (max = 100)");
let subj2 = prompt("Enter your Chemistry mark: (max = 100)");
let subj3 = prompt("Enter your Biology mark: (max = 100)");
let subj4 = prompt("Enter your Mathematics mark: (max = 100)");
let subj5 = prompt("Enter your Computer mark: (max = 100)");

// Tried to parse all 5 subjects using an array in a for loop

// let sumSubjects = [subj1, subj2, subj3, subj4, subj5];
// for (let i = 0; i <= sumSubjects.length; i++) {
//     parseFloat(sumSubjects[i]);
// }                                   
// for (let i = 0; i <= sumSubjects.length; i++) {
//     console.log(typeof(sumSubjects[i]));
// }


subj1 = parseFloat(subj1);
subj2 = parseFloat(subj2);
subj3 = parseFloat(subj3);
subj4 = parseFloat(subj4);
subj5 = parseFloat(subj5);

let grade = (subj1 + subj2 + subj3 + subj4 + subj5) / 500 ;
grade *= 100;
console.log(`Your final grade is ${grade}%!`);
if (grade >= 90) {
    console.log("You got an A!");
}

else if (grade >= 80) {
    console.log("You got an B!");
}

else if (grade >= 70) {
    
    console.log("You got an C!");
}
else if (grade >= 60) {
    console.log("You got an D!");
}

else if (grade >= 40) {
    console.log("You got an E!");
}

else {
    console.log("You got an F!");
}