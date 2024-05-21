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
    const container = document.querySelector('.fade-in-section');
    if (isElementInViewport(container)) {
        container.classList.add('visible');
    }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case the container is already in the viewport
handleScroll();
