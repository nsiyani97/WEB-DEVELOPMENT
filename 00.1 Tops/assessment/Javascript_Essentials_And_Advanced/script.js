const STORAGE_KEY = "swan_hotel_bookings";
const EDIT_ID_KEY = "edit_booking_id";

class StorageService {
  static getAll() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  }

  static getOne(id) {
    const data = this.getAll();
    return data.find((item) => item.id == id);
  }

  static create(record) {
    const data = this.getAll();
    const newRecord = { ...record, id: Date.now() };
    data.push(newRecord);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return newRecord;
  }

  static update(id, record) {
    let data = this.getAll();
    data = data.map((item) => (item.id == id ? { ...item, ...record, id: item.id } : item));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  static delete(id) {
    let data = this.getAll();
    data = data.filter((item) => item.id != id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
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

function initForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  checkEditMode();

  form.addEventListener("input", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      validateField(e.target);
    }
  });

  form.addEventListener("submit", handleFormSubmit);
  document.getElementById("btnReset").addEventListener("click", clearFormState);
}

function checkEditMode() {
  const editId = localStorage.getItem(EDIT_ID_KEY);
  if (!editId) return;

  const record = StorageService.getOne(editId);
  if (record) {
    populateForm(record);
    const btn = document.querySelector('button[type="submit"]');
    btn.textContent = "Update Guest";
    btn.className = "btn btn-dark w-100";
    document.querySelector(".card-header h4").textContent = "Edit Guest Registration";
  }
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

  field.classList.remove("is-invalid");

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

  if (!isValid) field.classList.add("is-invalid");
  return isValid;
}

function handleFormSubmit(e) {
  e.preventDefault();
  const inputs = document.querySelectorAll("input, textarea");
  let isFormValid = true;

  inputs.forEach((input) => {
    if (!validateField(input)) isFormValid = false;
  });

  if (!isFormValid) {
    showMessage("Please fill all required fields correctly.", "danger");
    return;
  }

  saveData();
}

function saveData() {
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
    StorageService.update(editId, data);
    showMessage("Guest Updated Successfully!", "success");
  } else {
    StorageService.create(data);
    showMessage("Registration Successful!", "success");
  }

  setTimeout(() => {
    clearFormState();
    window.location.href = "view.html";
  }, 1000);
}

function clearFormState() {
  const form = document.getElementById("bookingForm");
  if (!form) return;
  form.reset();
  form.querySelectorAll(".is-invalid").forEach((el) => el.classList.remove("is-invalid"));
  localStorage.removeItem(EDIT_ID_KEY);

  const btn = document.querySelector('button[type="submit"]');
  btn.textContent = "Register Guest";
  btn.className = "btn btn-primary w-100";

  document.querySelector(".card-header h4").textContent = "Guest Registration";
}

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

function renderTable(filter = "") {
  const bookings = StorageService.getAll();
  const tbody = document.getElementById("tableBody");
  const noData = document.getElementById("noDataMessage");

  tbody.innerHTML = "";
  const filtered = bookings.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));

  if (filtered.length === 0) {
    noData.classList.remove("d-none");
    return;
  } else {
    noData.classList.add("d-none");
  }

  filtered.forEach((item) => {
    const row = `
      <tr>
        <td><div class="fw-bold">${item.name}</div><div class="small text-muted">${item.phone}</div></td>
        <td>${item.email}</td>
        <td>${item.checkIn} to ${item.checkOut}</td>
        <td>${item.adults}</td>
        <td>
          <button class="btn btn-sm btn-outline-dark edit-btn me-1" data-id="${item.id}">Edit</button>
          <button class="btn btn-sm btn-outline-danger delete-btn" data-id="${item.id}">Delete</button>
        </td>
      </tr>
    `;
    tbody.insertAdjacentHTML("beforeend", row);
  });
}

function deleteRecord(id) {
  if (confirm("Delete this booking?")) {
    StorageService.delete(id);
    renderTable(document.getElementById("searchInput").value);
  }
}

function editRecord(id) {
  localStorage.setItem(EDIT_ID_KEY, id);
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  initForm();
  initViewer();
});
