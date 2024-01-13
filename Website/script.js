document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM content to be fully loaded before executing the script

  const menuBtn = document.getElementById('menu-btn');
  const navbar = document.querySelector('.header .navbar');
 

  // Toggle the visibility of the navigation menu
  menuBtn.addEventListener('click', function () {
    navbar.classList.toggle('show');
    // Hide the search form when showing the menu
    searchForm.style.transform = 'scaleY(0)';
  });

  // Close the menu when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!navbar.contains(event.target) && event.target !== menuBtn) {
      navbar.classList.remove('show');
    }
  });

  // Prevent closing the menu when clicking inside it
  navbar.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});
