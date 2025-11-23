// ==========================================
// 1. CONFIG & API UTILITIES
// ==========================================

const API_URL = "http://localhost:3000/Swan_Hotel_System";
const EDIT_ID_KEY = "edit_booking_id";

// UI Message
function showMessage(msg, type) {
  const msgBox = document.getElementById("uiMessage");
  if (!msgBox) return;

  msgBox.className = `alert alert-${type}`;
  msgBox.textContent = msg;
  msgBox.classList.remove("d-none");

  setTimeout(() => msgBox.classList.add("d-none"), 3000);
}

// API Calls
async function apiGetAll() {
  const res = await fetch(API_URL);
  return await res.json();
}

async function apiGetOne(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
}

async function apiCreate(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
}

async function apiUpdate(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
}

async function apiDelete(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}

// ==========================================
// 2. FORM LOGIC (index.html)
// ==========================================

function initForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  checkEditMode();

  // Input validation
  form.addEventListener("input", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      validateField(e.target);
    }
  });

  // Submit form
  form.addEventListener("submit", handleFormSubmit);

  // Reset button
  document.getElementById("btnReset").addEventListener("click", clearFormState);
}

async function checkEditMode() {
  const editId = localStorage.getItem(EDIT_ID_KEY);
  if (!editId) return;

  const record = await apiGetOne(editId);
  populateForm(record);

  const btn = document.querySelector('button[type="submit"]');
  btn.textContent = "Update Guest";
  btn.className = "btn btn-warning";

  document.querySelector(".card-header h4").textContent = "Edit Guest Registration";
}

function populateForm(data) {
  document.getElementById("fullName").value = data.name;
  document.getElementById("phone").value = data.phone;
  document.getElementById("email").value = data.email;
  document.getElementById("aadhar").value = data.aadhar;
  document.getElementById("address").value = data.address;
  document.getElementById("checkIn").value = data.checkIn;
  document.getElementById("checkOut").value = data.checkOut;
  document.getElementById("adults").value = data.adults;
  document.getElementById("purpose").value = data.purpose;
}

function validateField(field) {
  let isValid = true;
  const val = field.value.trim();

  field.classList.remove("is-invalid", "is-valid");

  switch (field.id) {
    case "fullName":
      isValid = val.length >= 3;
      break;
    case "phone":
      isValid = /^\d{10}$/.test(val);
      break;
    case "email":
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      break;
    case "aadhar":
      isValid = /^\d{12}$/.test(val);
      break;
    case "adults":
      isValid = val > 0;
      break;
    default:
      isValid = val.length > 0;
  }

  if (isValid) field.classList.add("is-valid");
  else field.classList.add("is-invalid");

  return isValid;
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const inputs = document.querySelectorAll("input, textarea");
  let isFormValid = true;

  inputs.forEach((input) => {
    if (!validateField(input)) isFormValid = false;
  });

  if (!isFormValid) {
    showMessage("Fix errors before submitting.", "danger");
    return;
  }

  saveData();
}

async function saveData() {
  const editId = localStorage.getItem(EDIT_ID_KEY);

  const data = {
    name: document.getElementById("fullName").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    aadhar: document.getElementById("aadhar").value,
    address: document.getElementById("address").value,
    checkIn: document.getElementById("checkIn").value,
    checkOut: document.getElementById("checkOut").value,
    adults: document.getElementById("adults").value,
    purpose: document.getElementById("purpose").value,
    date: new Date().toLocaleDateString(),
  };

  if (editId) {
    await apiUpdate(editId, data);
    showMessage("Guest Updated Successfully!", "success");
  } else {
    await apiCreate(data);
    showMessage("Registration Successful!", "success");
  }

  setTimeout(() => {
    clearFormState();
    window.location.href = "view.html";
  }, 1200);
}

function clearFormState() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  form.reset();

  document.querySelectorAll(".is-valid, .is-invalid")
    .forEach((el) => el.classList.remove("is-valid", "is-invalid"));

  localStorage.removeItem(EDIT_ID_KEY);

  const btn = document.querySelector('button[type="submit"]');
  btn.textContent = "Register Guest";
  btn.className = "btn btn-success";

  document.querySelector(".card-header h4").textContent = "Guest Registration";
}

// ==========================================
// 3. VIEW PAGE LOGIC (view.html)
// ==========================================

function initViewer() {
  const tableBody = document.getElementById("tableBody");
  if (!tableBody) return;

  renderTable();

  document.getElementById("searchInput").addEventListener("input", (e) => {
    renderTable(e.target.value);
  });

  tableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      deleteRecord(e.target.dataset.id);
    }
    if (e.target.classList.contains("edit-btn")) {
      editRecord(e.target.dataset.id);
    }
  });
}

async function renderTable(filter = "") {
  const bookings = await apiGetAll();

  const tbody = document.getElementById("tableBody");
  const noData = document.getElementById("noDataMessage");

  tbody.innerHTML = "";

  const filtered = bookings.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    noData.classList.remove("d-none");
    return;
  } else {
    noData.classList.add("d-none");
  }

  filtered.forEach((item) => {
    const row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.phone}</td>
        <td>${item.email}</td>
        <td>${item.aadhar}</td>
        <td>${item.address}</td>
        <td>${item.checkIn}</td>
        <td>${item.checkOut}</td>
        <td>${item.adults}</td>
        <td>${item.purpose}</td>
        <td>
          <button class="btn btn-warning btn-sm edit-btn me-1" data-id="${item.id}">Edit</button>
          <button class="btn btn-danger btn-sm delete-btn" data-id="${item.id}">Delete</button>
        </td>
      </tr>
    `;
    tbody.insertAdjacentHTML("beforeend", row);
  });
}

async function deleteRecord(id) {
  if (confirm("Are you sure you want to delete this booking?")) {
    await apiDelete(id);
    renderTable(document.getElementById("searchInput").value);
  }
}

function editRecord(id) {
  localStorage.setItem(EDIT_ID_KEY, id);
  window.location.href = "index.html";
}

// ==========================================
// 4. INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initForm();
  initViewer();
});
