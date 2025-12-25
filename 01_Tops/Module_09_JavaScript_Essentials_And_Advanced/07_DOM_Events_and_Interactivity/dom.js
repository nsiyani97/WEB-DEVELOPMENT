// Select the <h1> by navigating the document tree (html -> body -> h1)
let heading = document.firstElementChild.lastElementChild.firstElementChild;
// console.log(heading)

// Change the text content of the heading
let newHeading = "bye";
heading.innerText = newHeading;
// console.log(newHeading)

// Change the heading color
let newColorHeading = "blue";
heading.style.color = newColorHeading;
// console.log(newColorHeading)

// Simulate a click on the first input element (click() returns undefined)
let check = document.querySelector("input").click();
console.log(check);

// properties : innerHTML, style, firstChild, etc.
// methods : click(), appendChild(), setAttribute(), etc.

// Select the second <li> and replace its content
let secondLi = document.querySelector("li:nth-child(2)");
let newSecondLi = "dev";
secondLi.innerHTML = newSecondLi;
console.log(newSecondLi);

// Replace the last <li> inside the first <ul> found in the body with "backend"
let secLi = (document.firstElementChild.lastElementChild.querySelector(
  "ul"
).lastElementChild.innerHTML = "backend");
console.log(secondLi);

document.querySelector("#list a");
// -> <a href="https://www.google.com">Google</a>

document.querySelector("#list .item");
// -> <li class="item">…</li>

document.querySelectorAll("#list .item");
// NodeList(3) [li.item, li.item, li.item]

document.querySelectorAll("#list .item")[2].style.color = "yellow";

document.querySelector("#list a").style.color = "black";
