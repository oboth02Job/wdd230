
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        var password = document.getElementById('password').value;
        var passwordConfirmation = document.getElementById('password-confirmation').value;
        
        // Check if passwords match
        if (password !== passwordConfirmation) {
            // Prevent form submission
            event.preventDefault();
            
            // Display an error message
            alert('Passwords do not match!');
            
            // Highlight the fields
            document.getElementById('password').style.borderColor = 'red';
            document.getElementById('password-confirmation').style.borderColor = 'red';
        } else {
            // Reset the border colors if passwords match
            document.getElementById('password').style.borderColor = '';
            document.getElementById('password-confirmation').style.borderColor = '';
        }

    // Function to update the range value dynamically
    function updateRating(value) {
        document.getElementById('rating-value').textContent = value;
    }

    // Set initial value for range
    document.getElementById('page-rating').value = 5;
    updateRating(5); // Initial rating display

    });



