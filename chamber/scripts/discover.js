

// Handle visit message and store last visit date in localStorage
const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
    visitMessage.innerHTML = "Welcome! Let us know if you have any questions.";
    localStorage.setItem('lastVisit', Date.now());
} else {
    const lastVisitDate = new Date(parseInt(lastVisit));
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - lastVisitDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 1) {
        visitMessage.innerHTML = "Back so soon! Awesome!";
    } else {
        visitMessage.innerHTML = `You last visited ${diffDays} day${diffDays > 1 ? 's' : ''} ago.`;
    }

    localStorage.setItem('lastVisit', Date.now());
}

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
