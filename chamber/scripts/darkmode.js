

document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.querySelector('.dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Check the current theme and apply it
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Toggle dark mode on/off
    toggleSwitch.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        // Save the user's preference in localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
