const button = document.getElementById("loadBtn");
const userList = document.getElementById("userList");

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    userList.innerHTML = "";

    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(li);
    });
  } catch (error) {
    console.log("Error loading users:", error);
  }
}

button.addEventListener("click", loadUsers);
