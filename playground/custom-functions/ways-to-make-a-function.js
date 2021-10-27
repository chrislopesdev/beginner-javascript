// // Function Declaration
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// // Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// // Function Expression
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

// Arrow Function (anon function)
// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }
// This is the arrow form of the above function
// const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const total = (a, b = 3) => a + b;

// // returning an object
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });
//use brackets to contain object ({})

// // IIFE - Immediately Invoked Function Expression
// (function() {
//   console.log("Running the Anon Function");
//   return "you are cool";
// })();

// Methods
const wes = {
  name: "Wes Bos",
  // method
  sayHi: function() {
    console.log("Hey Wes");
    return "Hey Wes";
  },
  // short-hand method
  yellHi() {
    // remove colon and function
    console.log("HEY WESSSS");
  },
  // arrow function
  whisperHi: () => {
    console.log("hii wesss im a mouse");
  },
};

// Callback Functions
// Click Callback
const button = document.querySelector(".clickMe");

button.addEventListener("click", wes.yellHi);
