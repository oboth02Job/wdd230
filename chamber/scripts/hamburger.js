// Hamburger Menu Toggle for Mobile
document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
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





