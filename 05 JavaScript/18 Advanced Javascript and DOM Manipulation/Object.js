// ```Object Life of BellBoy at Hotel```

// 1. Object
var bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["French", "English"],
};
// get value object property value by dot `.` notation
console.log("Hello, my name is " + bellBoy1.name);
// --------------------------------------------------------------------------------

// 2. Constructor Function
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}

// Initialise Object
var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
var bellBoy2 = new BellBoy("Jimmy", 29, false, ["German", "English"]);

console.log(bellBoy2);
// ---------------------------------------------------------------------------------

// Methods and Dot Notation
function moveSuitcaseExample() {
  alert("May i take your suitcase?");
  pickUpSuitcase();
  move();
}

// 1. add move suitcase method to object.
var bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["French", "English"],
  moveSuitcase: function () {
    alert("May i take your suitcase?");
    pickUpSuitcase();
    move();
  },
};
// To Call Method
bellBoy1.moveSuitcase();

// 2. add move suitcase method to constractor function.
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function () {
    alert("May i take your suitcase?");
    pickUpSuitcase();
    move();
  }
}

var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
console.log(bellBoy1.moveSuitcase());