let socialLinks = ["Instagram", "GitHub", "LinkedIn"];

let ul = document.getElementById("links");

socialLinks.forEach((platform) => {
  let li = document.createElement("li");
  li.innerText = platform;
  ul.appendChild(li);
});
