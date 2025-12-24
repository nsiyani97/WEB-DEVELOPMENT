import { createLinkCard } from "./utils.js";

const links = [
  { title: "Instagram", url: "https://instagram.com" },
  { title: "GitHub", url: "https://github.com" },
];

const container = document.getElementById("links");

links.forEach((link) => {
  const card = createLinkCard(link.title, link.url);
  container.appendChild(card);
});
