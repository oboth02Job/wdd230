

// Get the hamburger button and the nav menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Add event listener to toggle the active class on click
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        // Toggle the 'X' symbol when the menu is open
        hamburger.classList.toggle("open");
    });
});





