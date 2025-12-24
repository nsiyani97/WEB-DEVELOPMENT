const addBtn = document.getElementById("addBtn");
const cardContainer = document.getElementById("cardContainer");

let count = 1;

// 🔹 Create Cards Dynamically
addBtn.addEventListener("click", () => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <span>Card ${count}</span>
    <span class="remove">X</span>
  `;

  cardContainer.appendChild(card);
  count++;
});

// 🔹 EVENT DELEGATION (CORE PART)
cardContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove")) {
    event.target.parentElement.remove();
  }
});
