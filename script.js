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

function hideCookiePrompt() {
  const cookiePrompt = document.getElementById('cookie-prompt');
  cookiePrompt.classList.add('hidden');
}

function showCookiePrompt() {
  const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
  const cookiePrompt = document.getElementById('cookie-prompt');
  if (!cookiesAccepted) {
    cookiePrompt.classList.remove('hidden');
  }
}



setDarkModePreference();
showCookiePrompt();
