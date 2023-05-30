// Get the hamburger button and mobile menu elements
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close');

// Add a click event listener to the hamburger button
hamburger.addEventListener('click', toggleMobileMenu);

// Add a click event listener to the close button
closeButton.addEventListener('click', hideMobileMenu);

// Function to toggle the visibility of the mobile menu
function toggleMobileMenu() {
  mobileMenu.style.display = 'block';
}

// Function to hide the mobile menu
function hideMobileMenu() {
  mobileMenu.style.display = 'none';
}
