// Dark Mode Toggle
const darkModeButton = document.getElementById('dark-mode-btn');
const body = document.body;

darkModeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    darkModeButton.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙'; 
});

