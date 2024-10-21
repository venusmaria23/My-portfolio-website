function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

 // Get the current year
 const currentYear = new Date().getFullYear();
 // Update the copyright year in the HTML
 document.getElementById('copyright-year').textContent = currentYear;

   // Get the image element
   const image = document.getElementById('profileImage');
   // Apply styles using JavaScript to make it rounded
   image.style.borderRadius = '50%';
   image.style.width = '100%'; // Adjust as necessary
   image.style.height = '100%'; // Adjust to match width for a perfect circle
   image.style.objectFit = 'cover'; // Ensure the image fits well within the circle

