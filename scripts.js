// scripts.js

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'visible' class to elements in the viewport
function handleScroll() {
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case some sections are already in the viewport
handleScroll();
