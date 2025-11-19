// if else --- control flow
if (track === "clear") {
  goStraight();
} else {
  turnRight();
}

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert('Your love score is ' + loveScore + '%');

if (loveScore > 70) {
    alert("You're the best!")
} else {
    alert("You're not the best!")
}