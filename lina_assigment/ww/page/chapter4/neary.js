// script.js
const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const mainBtn = document.getElementById('mainBtn');
const toggleLink = document.getElementById('toggleLink');

let isSignUp = true;

toggleLink.addEventListener('click', (e) => {
    e.preventDefault(); // Stop the page from refreshing
    
    if (isSignUp) {
        // Switch to Login Mode
        title.innerText = "Login to NEARY";
        nameField.style.display = "none"; // Hide the Name input
        mainBtn.innerText = "Login";
        toggleLink.innerText = "Create an account";
        isSignUp = false;
    } else {
        // Switch to Sign Up Mode
        title.innerText = "Create Account";
        nameField.style.display = "block"; // Show the Name input
        mainBtn.innerText = "Sign Up";
        toggleLink.innerText = "Login";
        isSignUp = true;
    }
});