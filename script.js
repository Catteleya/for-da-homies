let paragraphVisibility = [false, false, false];

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

function toggleParagraph(paraNumber) {
  const selectedParagraph = document.getElementById(`para${paraNumber}`);
  paragraphVisibility[paraNumber - 1] = !paragraphVisibility[paraNumber - 1];
  selectedParagraph.classList.toggle("hidden", !paragraphVisibility[paraNumber - 1]);
}

let cardVisibility = [false, false, false, false, false];

// Existing code...

function toggleCard(cardNumber) {
  const selectedCard = document.getElementById(`card${cardNumber}`);
  cardVisibility[cardNumber - 1] = !cardVisibility[cardNumber - 1];
  selectedCard.classList.toggle("hidden", !cardVisibility[paraNumber - 1]);
}


function showCard(cardNumber) {
  const cards = document.querySelectorAll("#card-container");
  cards.forEach(div => div.classList.add("hidden"));

  const selectedParagraph = document.getElementById(`card${cardNumber}`);
  selectedParagraph.classList.remove("hidden");
}


let darkMode = false;

function showParagraph(paraNumber) {
  const paragraphs = document.querySelectorAll("#paragraph-container p");
  paragraphs.forEach(para => para.classList.add("hidden"));

  const selectedParagraph = document.getElementById(`para${paraNumber}`);
  selectedParagraph.classList.remove("hidden");
}

function toggleTheme() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    localStorage.setItem('darkMode', (!darkModeEnabled).toString());
    applyTheme();
  }


function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  hideCookiePrompt();
}

function declineCookies() {
  localStorage.setItem('cookiesAccepted', 'false');
  hideCookiePrompt();
  showCookiesDeclinedPrompt();
}

function hideCookiePrompt() {
  const cookiePrompt = document.getElementById('cookie-prompt');
  cookiePrompt.classList.add('hidden');
}

function showCookiePrompt() {
  const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
  const cookiePrompt = document.getElementById('cookie-prompt');
  const cookiesDeclinedPrompt = document.getElementById('cookies-declined-prompt');
  if (!cookiesAccepted) {
    cookiePrompt.classList.remove('hidden');
  } else {
    cookiesDeclinedPrompt.classList.add('hidden');
  }
}

function showCookiesDeclinedPrompt() {
  const cookiesDeclinedPrompt = document.getElementById('cookies-declined-prompt');
  cookiesDeclinedPrompt.classList.remove('hidden');
}

setDarkModePreference();
showCookiePrompt();
