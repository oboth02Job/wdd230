// Dark Mode Toggle
const darkModeButton = document.getElementById('dark-mode-btn');
const body = document.body;

darkModeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    darkModeButton.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙'; 
});


darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Check if dark mode is already enabled in the system
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
}


