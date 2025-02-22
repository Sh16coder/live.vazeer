const correctPassword = "vazeer10";

document.getElementById('submitPassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('passwordInput').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (passwordInput === correctPassword) {
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('passwordPrompt').style.display = 'none';
        errorMessage.style.display = 'none';

        // Simulate live stream ending after a set time (e.g., 2 hours for demo)
        setTimeout(showPopup, 2 * 60 * 60 * 1000); // 2 hours in milliseconds
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
        errorMessage.style.display = 'block';
    }
});

document.getElementById('passwordInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('submitPassword').click();
    }
});

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

