const correctPassword = "vazeer10";

// Function to handle password authentication
document.getElementById('submitPassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');

    if (passwordInput === correctPassword) {
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('passwordPrompt').style.display = 'none';

        // Simulate live stream ending after a set time
        setTimeout(showPopup, 7200000); // 2 hours in milliseconds
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
        errorMessage.style.display = 'block';
    }
});

// Function to show pop-up when the live stream ends
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function to enhance user experience
window.onload = function() {
    document.getElementById('passwordInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            document.getElementById('submitPassword').click();
        }
    });
};


I've updated your JavaScript to improve responsiveness, fix the live stream ending timing, and allow password submission with the Enter key. Let me know if you need further tweaks!

