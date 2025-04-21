// Get the last modified date of the page
const lastModifiedDate = document.lastModified;

// Display the last modified date in the footer
document.getElementById("last-modified-date").textContent = lastModifiedDate;


// Set the current timestamp in the hidden field
const timestampInput = document.getElementById("timestamp");
if (timestampInput) {
    const now = new Date();
    timestampInput.value = now.toISOString();
}


