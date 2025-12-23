import React from "react";

var numbers = [3, 56, 2, 48, 5];

function ArrowFunctions() {
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
            <h1>Arrow Functions</h1>
            <p>Original Numbers: {numbers.join(", ")}</p>
            <p>Map (x * 2): {newNumbersMap.join(", ")}</p>
            <p>Filter (x &lt; 10): {newNumbersFilter.join(", ")}</p>
            <p>Reduce (sum): {newNumberReduce}</p>
            <p>Find (x &gt; 10): {newNumberFind}</p>
            <p>FindIndex (x &gt; 10): {newNumberFindIndex}</p>
        </div>
    );
}

export default ArrowFunctions;
