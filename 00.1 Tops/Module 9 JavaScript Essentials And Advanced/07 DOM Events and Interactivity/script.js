const addBtn = document.getElementById("addBtn");
const input = document.getElementById("linkInput");
const container = document.getElementById("linkContainer");

addBtn.addEventListener("click", () => {
  const value = input.value;

  if (value === "") return;

  const card = document.createElement("div");
  card.className = "card";
  card.innerText = value;

  container.appendChild(card);
  input.value = "";
});
