function myFunction() {
  let pf = Math.floor(Math.random() * 6) + 1;
  let ps = Math.floor(Math.random() * 6) + 1;

  let img1 = document.querySelector(".img1");
  img1.setAttribute("src", `/JavaScript DOM/images/dice${pf}.png`);

  let img2 = document.querySelector(".img2");
  img2.setAttribute("src", `/JavaScript DOM/images/dice${ps}.png`);

  let h1 = document.querySelector("h1");
  h1.textContent = `${pf > ps ? "🏆Player 1 Win" : ""} ${ps > pf ? "Player 2 Win🏆" : ""} ${ps == pf ? "Draw" : ""}`;
}
