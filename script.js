document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  
  alert(`Bericht verzonden door: ${name}\nE-mail: ${email}\nBericht: ${message}`);
});

// Toggle hamburger menu
const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('ul');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('open');
  navLinks.classList.toggle('show');
});
