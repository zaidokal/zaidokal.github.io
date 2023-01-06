const textElement = document.getElementById("text");

function updateText(newText) {
  textElement.innerHTML = newText;
}

let texts = [
  "Zaid Okal",
  "a Software Engineer",
  "a Software Developer",
  "a Software Tester",
];
let currentTextIndex = 0;

function changeText() {
  let text = texts[currentTextIndex];
  let currentIndex = 0;

  function updateCharacter() {
    updateText(text.substring(0, currentIndex + 1));
    currentIndex++;

    if (currentIndex < text.length) {
      setTimeout(updateCharacter, 50); // Delay each character by 100 milliseconds
    } else {
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      setTimeout(changeText, 800); // Change the text after the entire string has been outputted
    }
  }

  updateCharacter();
}

changeText(); // Start the text changing
