// Get the hamburger menu icon and navigation menu container
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

// Add event listener to toggle the menu
hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});