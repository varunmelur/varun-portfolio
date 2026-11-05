
// Portfolio Website JavaScript

// Welcome message in console
console.log("Welcome to Varun's Portfolio!");

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Page loading message
window.addEventListener('load', () => {
    console.log("Portfolio loaded successfully!");
});
