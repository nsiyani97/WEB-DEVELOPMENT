function createButton(label, color) {
  const button = document.createElement("button");

  button.innerText = label;
  button.style.backgroundColor = color;
  button.style.color = "white";
  button.style.padding = "12px 20px";
  button.style.margin = "8px";
  button.style.border = "none";
  button.style.borderRadius = "6px";
  button.style.cursor = "pointer";

  return button;
}

const container = document.getElementById("buttonContainer");

container.appendChild(createButton("Instagram", "purple"));
container.appendChild(createButton("LinkedIn", "blue"));
container.appendChild(createButton("GitHub", "black"));
container.appendChild(createButton("Twitter", "skyblue"));
