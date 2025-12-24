import { StorageUtils } from "./storage.js";

export class SubmissionViewer {
  constructor(tableBodyId, searchInputId, noDataId) {
    this.tableBody = document.getElementById(tableBodyId);
    this.searchInput = document.getElementById(searchInputId);
    this.noDataMsg = document.getElementById(noDataId);
    this.storageKey = "swan_hotel_bookings";
    this.init();
  }

  init() {
    if (!this.tableBody) return;
    this.render();

    this.searchInput.addEventListener("input", () => this.render());

    this.tableBody.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        this.deleteRecord(e.target.dataset.id);
      }
    });
  }

  render() {
    const query = this.searchInput.value.toLowerCase();
    const records = StorageUtils.getItem(this.storageKey);

    const filtered = records.filter((item) => item.fullName.toLowerCase().includes(query) || item.checkIn.includes(query));

    this.tableBody.innerHTML = "";

    if (filtered.length === 0) {
      this.noDataMsg.classList.remove("d-none");
      return;
    }

    this.noDataMsg.classList.add("d-none");
    filtered.forEach((item) => {
      const row = `
        <tr>
          <td>${item.fullName}</td>
          <td>${item.phone}</td>
          <td>${item.checkIn} to ${item.checkOut}</td>
          <td>${item.adults}</td>
          <td>
            <button class="btn btn-sm btn-outline-danger delete-btn" data-id="${item.id}">Delete</button>
          </td>
        </tr>
      `;
      this.tableBody.insertAdjacentHTML("beforeend", row);
    });
  }

  deleteRecord(id) {
    if (confirm("Delete this record?")) {
      const records = StorageUtils.getItem(this.storageKey);
      const updated = records.filter((item) => item.id != id);
      StorageUtils.setItem(this.storageKey, updated);
      this.render();
    }
  }
}
