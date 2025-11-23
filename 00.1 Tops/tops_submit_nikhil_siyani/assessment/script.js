let guest = [];

function getData(event) {
  event.preventDefault();
  let newGuest = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
  };

  localStorage.setItem("guest", JSON.stringify(newGuest));

  const storedUser = localStorage.getItem("guest");

  guest.push(storedUser);
  console.log(guest);
}
