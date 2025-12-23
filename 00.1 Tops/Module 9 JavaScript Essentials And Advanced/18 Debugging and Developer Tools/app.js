function addLink() {
  debugger; // manual breakpoint

  const titleInput = document.getElementById("title");
  const urlInput = document.getElementById("url");

  if (!titleInput || !urlInput) {
    console.error("Input elements not found");
    return;
  }

  const title = titleInput.value;
  const url = urlInput.value;

  console.table({ title, url });

  if (!url.startsWith("http")) {
    console.warn("URL should start with http/https");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${title} → ${url}`;

  document.getElementById("linkList").appendChild(li);

  console.log("Link added successfully");
}
