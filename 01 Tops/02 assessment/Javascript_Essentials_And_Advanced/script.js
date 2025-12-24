import { CustomerFormHandler } from "./CustomerFormHandler.js";
import { SubmissionViewer } from "./SubmissionViewer.js";

document.addEventListener("DOMContentLoaded", () => {
  new CustomerFormHandler("bookingForm", "uiMessage");
  new SubmissionViewer("tableBody", "searchInput", "noDataMessage");
});
