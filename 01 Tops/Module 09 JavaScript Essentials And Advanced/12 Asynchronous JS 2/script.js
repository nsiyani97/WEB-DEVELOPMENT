const button = document.getElementById("loadBtn");
const userList = document.getElementById("userList");

button.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      userList.innerHTML = "";

      users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(li);
      });
    })
    .catch((error) => {
      console.log("Error loading users", error);
    });
});
