// Select the hamburger button and the nav menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

// Add click event to toggle the menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
