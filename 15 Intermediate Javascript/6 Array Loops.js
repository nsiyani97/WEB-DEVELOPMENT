// Who's Buying Lunch

function whosPaying(names) {
  /******Don't change the code above*******/

  //Write your code here.
  var person = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

  var x = person[Math.floor(Math.random() * person.length)];

  return x + " is going to buy lunch today!";

  /******Don't change the code below*******/
}
// ----------------------------------------------------------------------------
// Fizz Buzz
var output = [];
let num = 0;
function fizzBuzz() {
  let num = num + 1;
  num++;

  if (num % 3 == 0 && num % 5 == 0) {
    output.push("FizzBuzz");
  } else if (num % 3 == 0) {
    output.push("Fizz");
  } else if (num % 5 == 0) {
    output.push("Buzz");
  } else {
    output.push(num);
  }

  console.log(output);
}
// -----------------------------------------------------------------------
// while loop - run block statement over and over untill it hits condition 100.
// it check the state until someting is true. e.g(num <= 100).
var output = [];

function fizzBuzz() {
  while (num <= 100) {
    if (num % 3 == 0 && num % 5 == 0) {
      output.push("FizzBuzz");
    } else if (num % 3 == 0) {
      output.push("Fizz");
    } else if (num % 5 == 0) {
      output.push("Buzz");
    } else {
      output.push(num);
    }
    num++;
  }
  console.log(output);
}
// -------------------------------------------------------------

// for loop - is more convenient. it iterates and runs statement many times until hits i <= 100.
var output = [];

function fizzBuzz() {
  for (var i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      output.push("FizzBuzz");
    } else if (i % 3 == 0) {
      output.push("Fizz");
    } else if (i % 5 == 0) {
      output.push("Buzz");
    } else {
      output.push(i);
    }
  }

  console.log(output);
}
// -------------------------------------------------------------

var numberOfBottles = 99;
while (numberOfBottles >= 0) {
  var bottleWord = "bottle";
  if (numberOfBottles === 1) {
    bottleWord = "bottles";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
  console.log(numberOfBottles + " " + bottleWord + " of beer,");
  console.log("Take one down, pass it around,");
  numberOfBottles--;
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
