

// Get the hamburger button and the nav menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Add event listener to toggle the active class on click
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

