import React from "react";

function Methods() {
  var numbers = [3, 56, 2, 48, 5];
  console.log("base value - " + numbers);

  //Map -Create a new array by doing something with each item in an array.
  function add(num) {
    return num + 1;
  }
  let newAdd = numbers.map(add);
  console.log("map - " + newAdd);

  let mult = numbers.map((num) => num * 2);
  console.log("map - " + mult);

  //forEach - calls a function for each element in an array. and it is not executed for empty elements.
  var newMult = [];
  function double(x) {
    newMult.push(x * 2);
  }
  numbers.forEach(double);

  console.log("forEach - " + newMult);

  //Filter - Create a new array by keeping the items that return true.
  let bigger = numbers.filter((i) => i > 10);
  console.log("filter - " + bigger);

  let newBigger = [];

  numbers.forEach(function (num) {
    if (num < 10) {
      newBigger.push(num);
    }
  });
  console.log("forEach filter - " + newBigger);

  //Reduce - Accumulate a value by doing something to each item in an array.
  let reduce = numbers.reduce(function (accumulator, currentNumber) {
    console.log("accumulator = " + accumulator);
    console.log("currentNumber = " + currentNumber);
    return (accumulator += currentNumber);
  });
  console.log("reduce - " + reduce);

  let newNumber = 0;

  numbers.forEach(function (currentNumber) {
    return (newNumber += currentNumber);
  });
  console.log("forEach reduce - " + newNumber);

  //Find - find the first item that matches from an array.
  let find = numbers.find((i) => i > 10);
  console.log("find - " + find);

  //FindIndex - find the index of the first item that matches.
  let findIndex = numbers.findIndex((i) => i > 10);
  console.log("findIndex - " + findIndex);

  return <div></div>;
}

export default Methods;
