let links = [
  { title: "Instagram", url: "https://instagram.com" },
  { title: "YouTube", url: "https://youtube.com" },
  { title: "GitHub", url: "https://github.com" },
];

let container = document.getElementById("linksContainer");

links.forEach(function (link) {
  let card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${link.title}</h3>
    <a href="${link.url}" target="_blank">Visit</a>
  `;

  container.appendChild(card);
});
