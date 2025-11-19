// Math.random() - it generates 16 Decimal places numbers - 0.8601091144718166 from 0.1 to 0.9
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1; // output: between 1 to 6
console.log(n); // output: between 1 to 5



prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert('Your love score is ' + loveScore + '%');
