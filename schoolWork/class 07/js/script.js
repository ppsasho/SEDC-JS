function animalSpeech(animalType, animalBreed) {
    if (animalType === 'cat') {
        console.log(`The ${animalType} of breed ${animalBreed} meows.`);
    }

    if (animalType === 'dog') {
        console.log(`The ${animalType} of breed ${animalBreed} barks.`);
    }

    if (animalType === 'tiger') {
        console.log(`The ${animalType} of breed ${animalBreed} roars.`);
    }
}

let cat = {
    type: 'cat', 
    breed: 'Ragdoll',

    speak: function() {
        // console.log("The cat meows.");
        console.log(`The animal of type ${this.type} and breed ${this.breed} meows.`);
    }
}

cat.speak();
console.log(cat.speak); // shows us the code block inside the function within the cat object
console.log(cat.breed);

let person = new Object();
person.name = 'Sasho';
person.age = 19;
console.log(person);

let personTwo = {};
personTwo['height'] = 185;
personTwo['gender'] = 'male';
personTwo['hobbies'] = ['hiking', 'swimming', 'gaming'];
console.log(personTwo);

// let input = (prompt("Enter a value for personTwo:"));

// personTwo['value'] = input;
// console.log(personTwo);
// console.log(personTwo.value);

console.log(`personTwo: gender - ${personTwo.hasOwnProperty('gender')}`);
console.log(`personTwo: member - ${personTwo.hasOwnProperty('member')}`);



console.log("========================= Student ===========================");
let user = {
    name: 'Sasho',
    age: 19,
    employed: false,
    favoriteColor: 'blue',
    hobbies: ['reading', 'iem noob', 'music', 'walking'],
    byeBye: "see you",

    checkEmployment: function() {

        if (this.employed === true) {
            return "HE GOT A JOB";
        }

        else {
            return "Nahhh, not yet.";
        }
    }
}
console.log(user);

user.student = true;
user.isAStudent = function() {
    if (this.student === true) {
        return "HE is a student!";
    }
    else {
        return "Damnn he ain't even a student";
    }
}

console.log(user.isAStudent());

// user.name = 'Chad';
// user.age = 30;
// user.employed = true;
// user.favoriteColor = 'brown';
// user.hobbies = ['He\'s different', 'drives a 1969 dodge charger', 'better'];

// console.log(user);

console.log(`Does ${user.name} have a job?\n\t- ${user.checkEmployment()}`);



console.log("========================= Car ===========================");

let car = {
    make: "Honda",
    model: "Civic",
    fuel: "Gasoline",
    productionYear: "2020",
    useless: "it's useless",

    move: function() {
        console.log("The car is moving.");
    },
    
    start: function() {
        console.log("The car is MOOOOOOOving!");
    },

    stop: function() {
        console.log("The car ain't moving");
    }
}

console.log(car);
delete car.useless;
console.log(car);
car['fuel'] = 'diesel';
car.model = 'WOOO'; // Change a property's value
console.log(car);



console.log("========================= Generating objects using a function ===========================");

function phoneFactory (phoneType, phoneMake, phoneModel, yearOfProduction) {
    this.type = phoneType;
    this.make = phoneMake;
    this.model = phoneModel;
    this.year = yearOfProduction;

    this.getInfo = function() {
        return `The phone of type ${this.type}, made by ${this.make}, and model ${this.model}, was manufactured in ${this.year}.`;
    }
}

let poco = new phoneFactory('Android', 'P0C0', 'X3 Pro', '2022');
let redmi = new phoneFactory('Android', 'Huawei', 'Note 10 Pro', '2021');
console.log(`${poco.getInfo()}\n${redmi.getInfo()}`);

let firstname = 'Garry';
let person2 = {firstname: 'Jay'};

function printName() {
    return this.firstname;
}

printName();
person2.printName = printName;
printName();
person2.printName();

