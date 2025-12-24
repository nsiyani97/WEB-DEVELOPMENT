// === Is equal to
// !== Is not equal to 
// >   Is greater than
// <   Is less than
// >=  Is greater or equal to
// <=  Is lesser or equal to
// && And
// || Or
// ! Not

// combining comparators
prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert('Your love score is ' + loveScore + '%');

if (loveScore > 70) {
    alert("You're the best!")
}
if (loveScore > 30 && loveScore <= 70) {
    alert("You're alright!")
}
if (loveScore <= 30) {
    alert("You're bad!")
}