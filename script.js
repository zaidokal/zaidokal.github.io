window.onload = function () {
  script();

  function script() {
    console.log(window.innerWidth);

    if (window.innerWidth > 600) {
      changeText();
    } else {
      var AboutDescription = document.getElementById("AboutDescription");
      AboutDescription.style.display = "none";

      var summary = document.getElementById("summary");

      summary.innerHTML += ` I am currently in my third year studying software engineering at Western University.
                            In my free time, I enjoy staying active by playing soccer and other sports. I also have a
                            passion for
                            gaming and can often be found trying out the latest releases or revisiting old favorites.
                            Outside of
                            academics and hobbies, I am always looking for opportunities to learn and grow both
                            personally and
                            professionally.
                            I am excited to see where my studies in software engineering will take me in the future and
                            am dedicated
                            to continually improving my skills and knowledge in the field.`;
    }

    // if (window.innerWidth <= 600) {

    // }
  }

  function changeText() {
    console.log("changeText function called");
    console.log("Window width is less than or equal to 600");

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
  }
};

script();
