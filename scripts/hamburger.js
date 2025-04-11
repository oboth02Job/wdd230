// Hamburger Menu Toggle
document.getElementById('hamburger-btn').addEventListener('click', function() {
    var menu = document.getElementById('nav-menu');
    var hamburgerButton = document.getElementById('hamburger-btn');

    // Toggle the active class on both the menu and the hamburger button
    menu.classList.toggle('active');
    hamburgerButton.classList.toggle('active');
});

const hamburgerButton = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const closeButton = document.querySelector('.close-btn');

hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerButton.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburgerButton.classList.remove('active');
});


