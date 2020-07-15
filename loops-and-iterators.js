const teachers = ["rein", "david", "matias", "jeroen"];

// console.log(teachers[0]);
// console.log(teachers[1]);
// console.log(teachers[2]);
// console.log(teachers[3]);

// Pros: fine grained control
// Cons: Lot of code, not very intention revealing
// for (let index = 0; index < teachers.length; index = index + 1) {
//   console.log(teachers[index], index); // 0, 1, 2
// }

// predictions:
// 0-10
// 0-9

// Iterators

// teachers.forEach(function (teacher) {
//   // use to perform side effects
//   console.log("hello", teacher);
// });

// Find -> looks for one element
// const myColleagueFromUruguay = teachers.find(function (teacher) {
//   console.log("find??", teacher, teacher === "matias");
//   // if you return true from the function, we found what we are looking for
//   // if we return false, or nothing we keep looking

//   if (teacher === "matias") {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(myColleagueFromUruguay);

// Filter -> which elements do we want to keep [{}, {}, {}] => [{}, {}]

// const colleaguesWithA = teachers.filter(function (teacher) {
//   console.log(teacher, teacher.includes("a"));

//   //   return teacher.includes("a"); // true or false

//   if (teacher.includes("a")) {
//     return true;
//   } else {
//     return false;
//   }
//   // if we return true, we keep this element
//   // if we return false, don't keep it
// });

// console.log(colleaguesWithA);

// Map -> transform all elements in the array

console.log(teachers);

// map returns a new array
const upperCaseNames = teachers.map(function (teacher) {
  //   console.log(teacher.toUpperCase());

  return teacher.toUpperCase();
});

// predictions:
// - all names in uppercase
// - undefined
//

console.log(upperCaseNames); // -> what gets console logged here
console.log(teachers);
