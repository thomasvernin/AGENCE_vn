// themes.js
const iconMoon = document.getElementById('icon-moon');
const iconSun = document.getElementById('icon-sun');
const iconMoonFooter = document.getElementById('icon-moon-footer');
const iconSunFooter = document.getElementById('icon-sun-footer');
const logo = document.getElementById('logo'); // Sélection du logo principal

// Initialisation du thème en fonction de localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  iconMoon.classList.add('selected-icon');
  iconSun.classList.remove('selected-icon');
  iconMoonFooter.classList.add('selected-icon');
  iconSunFooter.classList.remove('selected-icon');
  logo.src = 'Images/logosite2.jpeg'; // Logo sombre
} else {
  document.body.classList.remove('dark-mode');
  iconSun.classList.add('selected-icon');
  iconMoon.classList.remove('selected-icon');
  iconSunFooter.classList.add('selected-icon');
  iconMoonFooter.classList.remove('selected-icon');
  logo.src = 'Images/logosite1.jpeg'; // Logo clair
}

// Gestion des clics pour le mode sombre (icône en haut)
iconMoon.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  iconMoon.classList.add('selected-icon');
  iconSun.classList.remove('selected-icon');
  iconMoonFooter.classList.add('selected-icon');
  iconSunFooter.classList.remove('selected-icon');
  localStorage.setItem('theme', 'dark');
  logo.src = 'Images/logosite2.jpeg'; // Changer le logo pour le mode sombre
});

// Gestion des clics pour le mode clair (icône en haut)
iconSun.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  iconSun.classList.add('selected-icon');
  iconMoon.classList.remove('selected-icon');
  iconSunFooter.classList.add('selected-icon');
  iconMoonFooter.classList.remove('selected-icon');
  localStorage.setItem('theme', 'light');
  logo.src = 'Images/logosite1.jpeg'; // Changer le logo pour le mode clair
});

// Gestion des clics pour le mode sombre (icône en bas)
iconMoonFooter.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  iconMoonFooter.classList.add('selected-icon');
  iconSunFooter.classList.remove('selected-icon');
  iconMoon.classList.add('selected-icon');
  iconSun.classList.remove('selected-icon');
  localStorage.setItem('theme', 'dark');
  logo.src = 'Images/logosite2.jpeg'; // Changer le logo pour le mode sombre
});

// Gestion des clics pour le mode clair (icône en bas)
iconSunFooter.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  iconSunFooter.classList.add('selected-icon');
  iconMoonFooter.classList.remove('selected-icon');
  iconSun.classList.add('selected-icon');
  iconMoon.classList.remove('selected-icon');
  localStorage.setItem('theme', 'light');
  logo.src = 'Images/logosite1.jpeg'; // Changer le logo pour le mode clair
});

















