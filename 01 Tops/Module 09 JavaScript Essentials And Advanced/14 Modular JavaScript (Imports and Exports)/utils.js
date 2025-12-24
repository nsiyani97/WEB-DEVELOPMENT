export function createLinkCard(title, url) {
  const div = document.createElement("div");

  div.innerHTML = `
    <a href="${url}" target="_blank">${title}</a>
  `;

  return div;
}
