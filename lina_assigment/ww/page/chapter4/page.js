document.addEventListener('DOMContentLoaded', () => {
    const welcomeHeader = document.getElementById('welcome-text');
    
    // Add a simple fade-in effect when the page loads
    welcomeHeader.style.opacity = '0';
    welcomeHeader.style.transition = 'opacity 2s ease-in-out';
    
    setTimeout(() => {
        welcomeHeader.style.opacity = '1';
    }, 500);

    // Interactive button
    const btn = document.querySelector('.shop-now');
    btn.addEventListener('click', () => {
        alert('Welcome to Neary Shop! Our collection is coming soon.');
    });
});