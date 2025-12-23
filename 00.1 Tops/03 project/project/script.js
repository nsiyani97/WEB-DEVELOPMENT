document.getElementById("year").textContent = new Date().getFullYear();

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((drop) => {
  const btn = drop.querySelector(".drop-btn");
  const content = drop.querySelector(".drop-content");
  btn.addEventListener("click", () => {
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

const contentDiv = document.getElementById("content");
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    loadPage(page);
  });
});

function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then((response) => response.text())
    .then((data) => {
      contentDiv.innerHTML = data;
      highlightActive(page);
    })
    .catch(() => {
      contentDiv.innerHTML = "<h2>Page not found</h2>";
    });
}

function highlightActive(activePage) {
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-page") === activePage) {
      link.classList.add("active");
    }
  });
}

loadPage("home");
