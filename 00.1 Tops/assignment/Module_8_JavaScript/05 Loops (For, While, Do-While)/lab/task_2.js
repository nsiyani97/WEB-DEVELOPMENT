// Create a JavaScript program that uses a while loop to sum all even numbers between 1 and 20.

let num = 1;
let sum = 0;

while (num <= 20) {
  if (num % 2 === 0) {
    sum += num;
  }
  num++;
}

console.log("Sum of even numbers between 1 and 20:", sum);

// output: Sum of even numbers between 1 and 20: 110
