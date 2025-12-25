let tweet = prompt("tweet");
let tweetCount = tweet.length;
alert(
  "You have written " +
    tweetCount +
    " characters, you have " +
    (140 - tweetCount) +
    " characters remaining."
);
// ---------------------------------------

let tweet20char = prompt("tweet");
let tweetCount20char = tweet.slice(0, 20);
alert(tweetCount20char);
// -----------------------------------------

let myName = "Nikhil";
let first = myName.slice(0, 1);
let firstUpperCase = first.toUpperCase();
let rest = myName.slice(1, myName.length);
let newName = firstUpperCase + rest;
console.log(newName);
