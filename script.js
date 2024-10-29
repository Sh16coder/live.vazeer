const correctPassword = "vazeer10"; // Set your password here

document.getElementById('submitPassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');

    if (passwordInput === correctPassword) {
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('passwordPrompt').style.display = 'none';

        // Simulate live stream ending after a set time (e.g., 2 hours for demo)
        setTimeout(showPopup, 2000); // Change 2000 to your desired time in milliseconds
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
        errorMessage.style.display = 'block';
    }
});

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
