// Get the hamburger button and mobile menu elements
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

// Add a click event listener to the hamburger button
hamburger.addEventListener('click', toggleMobileMenu);

// Function to toggle the visibility of the mobile menu
function toggleMobileMenu() {
  mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'block ' : 'none';
}
