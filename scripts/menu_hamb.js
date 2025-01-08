const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('header nav');

// Ajout d'un événement au clic sur le hamburger
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active'); // Basculer l'état actif du menu
  hamburger.classList.toggle('active'); // Basculer l'état actif du hamburger
});







