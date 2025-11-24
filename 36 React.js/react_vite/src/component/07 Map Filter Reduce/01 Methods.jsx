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

  // Arrow Functions

  //Map -Create a new array by doing something with each item in an array.
  const newNumbersMap = numbers.map((x) => x * 2);

  //Filter - Create a new array by keeping the items that return true.
  const newNumbersFilter = numbers.filter((num) => num < 10);

  //Reduce - Accumulate a value by doing something to each item in an array.
  const newNumberReduce = numbers.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber
  );

  //Find - find the first item that matches from an array.
  const newNumberFind = numbers.find((num) => num > 10);

  //FindIndex - find the index of the first item that matches.
  const newNumberFindIndex = numbers.findIndex((num) => num > 10);

  return (
    <div>
      <h1>Map Filter Reduce</h1>
      <p>Original Numbers: {numbers.join(", ")}</p>
      <p>Map (x * 2): {newNumbersMap.join(", ")}</p>
      <p>Filter (x &lt; 10): {newNumbersFilter.join(", ")}</p>
      <p>Reduce (sum): {newNumberReduce}</p>
      <p>Find (x &gt; 10): {newNumberFind}</p>
      <p>FindIndex (x &gt; 10): {newNumberFindIndex}</p>
    </div>

  )
}

export default Methods;
