// =========================================
// BRITECH COLLEGE LIBRARY
// =========================================

// Update footer year automatically
document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});


// =========================================
// HOME SEARCH
// =========================================

const searchInput = document.getElementById("homeSearch");
const searchButton = document.getElementById("homeSearchButton");

if (searchButton && searchInput) {
    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.trim();

        if (searchTerm === "") {
            alert("Please enter a book title, author, or ISBN.");
            searchInput.focus();
            return;
        }

        window.location.href =
            "catalog.html?search=" + encodeURIComponent(searchTerm);
    });

    // Allow pressing Enter to search
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });
}


// =========================================
// SCROLL ANIMATION
// =========================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// =========================================
// ACTIVE NAVIGATION
// =========================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});