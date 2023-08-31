const cardVisibility = [false, false, false, false, false];

function toggleCard(cardNumber) {
  const selectedCard = document.querySelectorAll('.card')[cardNumber - 1];
  cardVisibility[cardNumber - 1] = !cardVisibility[cardNumber - 1];
  selectedCard.style.opacity = cardVisibility[cardNumber - 1] ? '1' : '0';
  selectedCard.style.transform = cardVisibility[cardNumber - 1] ? 'translateY(0)' : 'translateY(100%)';
}

// Add more functions or code as needed

const themeToggleBtn = document.querySelector('.theme-toggle');
const icon = document.querySelector('.icon');
const body = document.body;

function setDarkModePreference() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', prefersDarkMode.toString());
  }
  applyTheme();
}

function applyTheme() {
  const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
  body.classList.toggle('dark-mode', darkModeEnabled);
  icon.setAttribute('title', darkModeEnabled ? 'Switch to Light Mode' : 'Switch to Dark Mode');
}

let darkMode = false;
