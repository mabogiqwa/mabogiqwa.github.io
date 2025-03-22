function generateSymbols() {
    const symbolsContainer = document.getElementById('psSymbols');
    
    // Clear existing symbols to prevent duplicate generation
    symbolsContainer.innerHTML = '';

    const symbolTypes = ['triangle', 'circle', 'cross', 'square'];
    
    // Adjust number of symbols based on screen size
    const numSymbols = window.innerWidth < 768 ? 50 : 75;
    
    for (let i = 0; i < numSymbols; i++) {
        const symbol = document.createElement('div');
        const randomType = symbolTypes[Math.floor(Math.random() * symbolTypes.length)];
        symbol.className = `symbol ${randomType}`;
        
        // Random position
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        symbol.style.left = `${randomX}%`;
        symbol.style.top = `${randomY}%`;
        
        // Random animation duration and delay
        const duration = 15 + Math.random() * 30;
        const delay = Math.random() * 15;
        symbol.style.animationDuration = `${duration}s`;
        symbol.style.animationDelay = `${delay}s`;
        
        symbolsContainer.appendChild(symbol);
    }
}

// Generate symbols on initial load
document.addEventListener('DOMContentLoaded', generateSymbols);

// Regenerate symbols on window resize
window.addEventListener('resize', generateSymbols);

function toggleMenu() {
    document.body.classList.toggle('menu-active');
}

function showEmail() {
    alert("Email: mabogiqwa1@gmail.com");
}