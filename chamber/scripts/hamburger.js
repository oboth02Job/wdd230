// Get the hamburger button and the menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle the navigation menu on click
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Add/remove "active" class
});
