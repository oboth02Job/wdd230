

    document.getElementById("lastModified").textContent = 
    "Last Modified: " + document.lastModified;

    // Display Current Date
    document.getElementById("current-date").textContent = new Date().toDateString();

    // Count Page Visits using LocalStorage
    let visitCount = localStorage.getItem("visitCount") || 0;
    visitCount++;
    localStorage.setItem("visitCount", visitCount);
    document.getElementById("visit-count").textContent = visitCount;

   // Get the hamburger button and the menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle the navigation menu on click
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Add/remove "active" class
});
    
// Footer Date and Last Modified Date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;


    