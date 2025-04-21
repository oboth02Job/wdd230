
// Lazy loading images
const lazyImages = document.querySelectorAll('.lazyload');

function lazyLoadImages() {
    lazyImages.forEach(image => {
        if (image.getBoundingClientRect().top < window.innerHeight && !image.src) {
            image.src = image.getAttribute('data-src');
            image.onload = () => image.classList.add('lazyloaded');
        }
    });
}

window.addEventListener('scroll', lazyLoadImages);
window.addEventListener('resize', lazyLoadImages);
lazyLoadImages();


// Handle visit message and store last visit date in localStorage
const messageContainer = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = Date.now();

if (lastVisit) {
    const daysBetween = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
    messageContainer.textContent = `Welcome back! It's been ${daysBetween} day(s) since your last visit.`;
} else {
    messageContainer.textContent = 'Welcome! This is your first visit.';
}

localStorage.setItem('lastVisit', currentVisit);


