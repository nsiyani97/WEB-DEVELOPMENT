const STORAGE_KEY = "swan_hotel_bookings";

function validateField(field) {
  let isValid = true;
  const val = field.value.trim();
  field.classList.remove("is-invalid");

  if (!val) {
    isValid = false;
  } else {
    switch (field.id) {
      case "phone":
        isValid = /^\d{10}$/.test(val);
        break;
      case "email":
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        break;
      case "aadhar":
        isValid = /^\d{12}$/.test(val);
        break;
      case "fullName":
        isValid = val.length >= 3;
        break;
    }
  }

  if (!isValid) field.classList.add("is-invalid");
  return isValid;
}

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const inputs = form.querySelectorAll("input, textarea");
  let isFormValid = true;

  inputs.forEach((input) => {
    if (!validateField(input)) isFormValid = false;
  });

  if (isFormValid) {
    const guestData = {
      fullName: document.getElementById("fullName").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      aadhar: document.getElementById("aadhar").value,
      checkIn: document.getElementById("checkIn").value,
      checkOut: document.getElementById("checkOut").value,
      purpose: document.getElementById("purpose").value,
    };

    const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    existingData.push(guestData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingData));

    showMessage("Data saved successfully!", "success");
    form.reset();
  } else {
    showMessage("Validation failed. Please check the fields.", "danger");
  }
}

function showMessage(msg, type) {
  const msgBox = document.getElementById("uiMessage");
  if (!msgBox) return;
  msgBox.className = `alert alert-${type}`;
  msgBox.textContent = msg;
  msgBox.classList.remove("d-none");
  setTimeout(() => msgBox.classList.add("d-none"), 3000);
}

function renderTable() {
  const tableBody = document.getElementById("tableBody");
  const noData = document.getElementById("noDataMessage");
  if (!tableBody) return;

  const bookings = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

  if (bookings.length === 0) {
    noData.classList.remove("d-none");
    tableBody.innerHTML = "";
    return;
  }

  noData.classList.add("d-none");
  tableBody.innerHTML = bookings
    .map(
      (item) => `
        <tr>
            <td>${item.fullName}</td>
            <td>${item.phone}</td>
            <td>${item.email}</td>
            <td>${item.aadhar}</td>
            <td>${item.checkIn}</td>
            <td>${item.checkOut}</td>
        </tr>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
    document.getElementById("btnReset").addEventListener("click", () => form.reset());
  }
  renderTable();
});
