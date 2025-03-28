// Hamburger Menu Toggle
document.getElementById('hamburger-btn').addEventListener('click', function() {
    var menu = document.getElementById('nav-menu');
    var hamburgerButton = document.getElementById('hamburger-btn');

    // Toggle the active class on both the menu and the hamburger button
    menu.classList.toggle('active');
    hamburgerButton.classList.toggle('active');
});


