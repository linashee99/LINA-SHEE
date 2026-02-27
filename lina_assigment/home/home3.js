// This function waits for the page to finish loading
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all product cards
    const cards = document.querySelectorAll('.product-card');

    // Add a click event to every card
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            console.log(`Product ${index + 1} was clicked!`);
            // You can add logic here to open a product page
        });
    });

    // Make the search bar react when you press Enter
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert('Searching for: ' + searchInput.value);
        }
    });
});