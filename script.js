const content = "Welcome to Mabo Giqwa's Personal Website!\nExplore my projects, articles, and more.";
const terminalContent = document.getElementById('terminalContent');
const cursor = document.getElementById('cursor');
let index = 0;

function typeText() {
    if (index < content.length) {
        terminalContent.innerHTML += content[index] === "\n" ? "<br>" : content[index];
        index++;
        setTimeout(typeText, 50);
    } else {
        cursor.style.display = 'none'; // Hide cursor after typing is complete
    }
}

// Trigger typing when page loads, only if the window is not small
window.onload = function() {
    if (window.innerWidth > 768) {  // Only type text if the window is large
        typeText(); // Start typing if the window is maximized
    } else {
        // If the terminal is hidden on smaller screens, keep the content empty
        terminalContent.innerHTML = ""; 
        cursor.style.display = 'none'; // Hide cursor if minimized
    }
};

// Re-type text if the window is resized back to large (above 768px)
window.onresize = function() {
    if (window.innerWidth > 768) {  // If window is resized to large
        if (terminalContent.innerHTML === "") { // If terminal content is empty, re-type text
            typeText();
        }
    } else {
        // When window is small, hide terminal content
        terminalContent.innerHTML = ""; 
        cursor.style.display = 'none';
    }
};
