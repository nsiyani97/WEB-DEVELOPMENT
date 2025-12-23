// Selecting elements
const addBtn = document.getElementById("addBtn");
const linkNameInput = document.getElementById("linkName");
const linkURLInput = document.getElementById("linkURL");
const linksContainer = document.getElementById("linksContainer");
const message = document.getElementById("msg");

// Button click event
addBtn.addEventListener("click", function () {
  const name = linkNameInput.value;
  const url = linkURLInput.value;

  // Validation
  if (name === "" || url === "") {
    message.innerHTML = "Please enter both fields!";
    message.style.color = "red";
    return;
  }

  // Create link element
  const link = document.createElement("a");
  link.innerHTML = name;
  link.href = url;
  link.target = "_blank";

  // Styling link
  link.style.display = "block";
  link.style.margin = "8px 0";
  link.style.color = "blue";

  // Add link to container
  linksContainer.appendChild(link);

  // Success message
  message.innerHTML = "Link added successfully!";
  message.style.color = "green";

  // Clear inputs
  linkNameInput.value = "";
  linkURLInput.value = "";
});
