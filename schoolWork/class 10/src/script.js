let person = {
  firstName: "Sasho",
  lastName: "Popovski",
  age: 19,
  isStudent: true,
  hobbies: ["Reading manga", "collecting iems", "music", "gaming"],
  address: {
    street: "Mehmet Gega",
    city: "Skopje",
    zipCode: 1000,
    country: "Macedonia",
  },
};
console.log(typeof person);

let stringedInfo = JSON.stringify(person);
console.log(typeof stringedInfo);

let parsedInfo = JSON.parse(stringedInfo);
console.log(parsedInfo);
