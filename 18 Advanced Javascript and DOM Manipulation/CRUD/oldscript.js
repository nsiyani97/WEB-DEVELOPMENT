let guests = [];

let editId = null;

function addGuest() {
  let guestId = document.getElementById("guestId").value;
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let aadhar = document.getElementById("aadhar").value;
  let address = document.getElementById("address").value;
  let adults = document.getElementById("adults").value;
  let checkIn = document.getElementById("checkIn").value;
  let checkOut = document.getElementById("checkOut").value;
  let purpose = document.getElementById("purpose").value;

  if (editId !== null) {
    guests = guests.map(function (item) {
      if (item.id === editId) {
        return {
          ...item,
          name,
          phone,
          email,
          aadhar,
          address,
          adults,
          checkIn,
          checkOut,
          purpose,
        };
      }
      return item;
    });

    editId = null;
    document.getElementById("guestId").value = "";
  } else {
    let id = Date.now().toString(36);

    let newGuest = {
      id,
      name,
      phone,
      email,
      aadhar,
      address,
      adults,
      checkIn,
      checkOut,
      purpose,
    };

    guests.push(newGuest);
  }

  displayGuests();
  clearForm();
}

function displayGuests() {
  let table = document.getElementById("guestTable");
  table.innerHTML = "";

  guests.forEach(function (item) {
    table.innerHTML += `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.phone}</td>
        <td>${item.email}</td>
        <td>${item.aadhar}</td>
        <td>${item.address}</td>
        <td>${item.adults}</td>
        <td>${item.checkIn}</td>
        <td>${item.checkOut}</td>
        <td>${item.purpose}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editGuest('${item.id}')">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteGuest('${item.id}')">Delete</button>
        </td>
      </tr>
    `;
  });
}

function editGuest(id) {
  let guest = guests.find((item) => item.id === id);

  document.getElementById("guestId").value = guest.id;
  document.getElementById("name").value = guest.name;
  document.getElementById("phone").value = guest.phone;
  document.getElementById("email").value = guest.email;
  document.getElementById("aadhar").value = guest.aadhar;
  document.getElementById("address").value = guest.address;
  document.getElementById("adults").value = guest.adults;
  document.getElementById("checkIn").value = guest.checkIn;
  document.getElementById("checkOut").value = guest.checkOut;
  document.getElementById("purpose").value = guest.purpose;

  editId = id;
}

function deleteGuest(id) {
  guests = guests.filter((item) => item.id !== id);
  displayGuests();
}

function clearForm() {
  document.querySelector("form").reset();
}
