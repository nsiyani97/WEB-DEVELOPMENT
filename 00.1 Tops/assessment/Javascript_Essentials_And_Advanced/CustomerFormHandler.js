import { StorageUtils } from "./storage.js";

export class CustomerFormHandler {
  constructor(formId, messageId) {
    this.form = document.getElementById(formId);
    this.messageBox = document.getElementById(messageId);
    this.storageKey = "swan_hotel_bookings";
    this.init();
  }

  init() {
    if (!this.form) return;

    this.form.addEventListener("input", (e) => {
      if (e.target.matches("input, textarea")) {
        this.validateField(e.target);
      }
    });

    this.form.addEventListener("submit", (e) => this.handleFormSubmit(e));
    document.getElementById("btnReset")?.addEventListener("click", () => this.clearForm());
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;

    if (!value && field.required) {
      isValid = false;
    } else {
      switch (field.id) {
        case "fullName":
          isValid = value.length >= 3;
          break;
        case "phone":
          isValid = /^\d{10}$/.test(value);
          break;
        case "email":
          isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          break;
        case "aadhar":
          isValid = /^\d{12}$/.test(value);
          break;
        case "checkIn":
        case "checkOut":
          const selectedDate = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          isValid = selectedDate >= today;
          break;
        case "purpose":
          isValid = value.length >= 10;
          break;
      }
    }

    field.classList.toggle("is-invalid", !isValid);
    field.classList.toggle("is-valid", isValid);
    return isValid;
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const inputs = this.form.querySelectorAll("input, textarea");
    let isAllValid = true;

    inputs.forEach((input) => {
      if (!this.validateField(input)) isAllValid = false;
    });

    if (isAllValid) {
      this.saveToLocalStorage();
    } else {
      this.showMessage("Please fix validation errors.", "danger");
    }
  }

  saveToLocalStorage() {
    const records = StorageUtils.getItem(this.storageKey);
    const formData = {
      id: Date.now(),
      fullName: document.getElementById("fullName").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      aadhar: document.getElementById("aadhar").value,
      address: document.getElementById("address").value,
      checkIn: document.getElementById("checkIn").value,
      checkOut: document.getElementById("checkOut").value,
      adults: document.getElementById("adults").value,
      purpose: document.getElementById("purpose").value,
    };

    records.push(formData);
    StorageUtils.setItem(this.storageKey, records);
    this.showMessage("Registration successful!", "success");
    this.clearForm();
  }

  showMessage(msg, type) {
    this.messageBox.className = `alert alert-${type}`;
    this.messageBox.textContent = msg;
    this.messageBox.classList.remove("d-none");
    setTimeout(() => this.messageBox.classList.add("d-none"), 3000);
  }

  clearForm() {
    this.form.reset();
    this.form.querySelectorAll(".is-invalid, .is-valid").forEach((el) => el.classList.remove("is-invalid", "is-valid"));
  }
}
