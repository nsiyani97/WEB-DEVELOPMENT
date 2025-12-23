let links = [];
let editIndex = null;

const form = document.getElementById("linkForm");
const list = document.getElementById("list");
const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const linkData = {
    title: titleInput.value,
    url: urlInput.value,
  };

  if (editIndex === null) {
    links.push(linkData); // CREATE
  } else {
    links[editIndex] = linkData; // UPDATE
    editIndex = null;
  }

  form.reset();
  render();
});

function render() {
  list.innerHTML = "";

  links.forEach((link, index) => {
    list.innerHTML += `
      <div>
        <a href="${link.url}" target="_blank">${link.title}</a>
        <button onclick="editLink(${index})">✏️</button>
        <button onclick="deleteLink(${index})">❌</button>
      </div>
    `;
  });
}

function editLink(index) {
  titleInput.value = links[index].title;
  urlInput.value = links[index].url;
  editIndex = index;
}

function deleteLink(index) {
  links.splice(index, 1);
  render();
}
