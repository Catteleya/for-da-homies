let paragraphVisibility = [false, false, false];

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
  darkMode = !darkMode;
  const body = document.body;
  body.classList.toggle("dark-mode", darkMode);
}
