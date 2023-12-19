// PART 1

console.log("========================= Part 1 ===========================");

let animal = {
    name: "Milo",
    kind: "labrador",

    speak: function() {
        let phrase = prompt("What would this dog say? :");
        console.log(`The dog's name is ${this.name}, and it's breed is ${this.kind}`);
        return `${this.name} says:  ❛${phrase}❜`;
    }
}
console.log(animal.speak());

console.log("========================= Part 2 ===========================");

// PART 2

let books = {
    title: 'The Robots of dawn',
    author: 'Isaac Asimov',
    title2: 'Mockingjay: The Final Book of The Hunger Games',
    author2: 'Suzanne Colins',

    readingStatusCheck: function() {
        if (this.readingStatus === 'true') {
            return `You have already read '${this.title}' by ${this.author}.`;
        }

        else {
            return `You still need to read '${this.title2}' by ${this.author2}.`;
        }
    }
}

books.readingStatus = prompt("Enter a reading status (true/false)");
console.log(books.readingStatusCheck());
