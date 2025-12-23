// Load saved data or empty array
let links = JSON.parse(localStorage.getItem("links")) || [];

// Render on page load
renderLinks();

function addLink() {
  let title = document.getElementById("title").value;
  let url = document.getElementById("url").value;

  links.push({ title, url });

  // Save to localStorage
  localStorage.setItem("links", JSON.stringify(links));

  renderLinks();
}

function renderLinks() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  links.forEach((link) => {
    let li = document.createElement("li");
    li.innerHTML = `<a href="${link.url}" target="_blank">${link.title}</a>`;
    list.appendChild(li);
  });
}
