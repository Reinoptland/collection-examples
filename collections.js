const teachers = ["rein", "david", "matias"];
const codaisseurBuilding = {
  doors: 8,
  isOpen: true,
  peopleInside: 4,
  address: "Naritaweg 110",
  "my favorite place": "The pingpong table",
  mainSpace: {
    tables: 50,
    lightsOn: true,
  },
  people: ["rein", "david", "matias"],
}; // {} object -> datatype

const myColleague = teachers[2];
// predictions
// - undefined <--
// - null
// - Error?

// console.log(myColleague);

const location = codaisseurBuilding["address"];
const location2 = codaisseurBuilding.address;

console.log(location);
console.log(location2);

console.log(codaisseurBuilding.mainSpace.tables);
console.log(codaisseurBuilding.people[2]);

// destructuring
const { peopleInside, isOpen, unicorn } = codaisseurBuilding;

console.log("How many people:", peopleInside);
console.log("isOpen:", isOpen);
console.log("What is unicorn?", unicorn);
// predictions:
// - undefined
// - Error -> syntax error
//

// Why: Group data, pass it into functions easily
// function openBuilding(building) { // building parameter
//     // for beginners: never name your parameter the same
//     // as the argument, because you won't learn the difference
//   console.log(building);
// }

// function openBuilding(doors, isOpen, peopleInside, address){

// }

// openBuilding(codaisseurBuilding); // pass in actual value (the codaisseurBuilding object)

// function name(params) {
//   // {} -> block of code
// }

// if (condition) {
//   // {} -> block of code
// }
