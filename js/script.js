window.onload = function () {
  let typingSpeed = 50; // Typing speed (milliseconds per character)

  script(); // Calls script function

  function script() {
    if (window.innerWidth > 600) {
      changeText();
    } else {
      var AboutDescription = document.getElementById("AboutDescription"); // AboutDescription ID
      AboutDescription.style.display = "none"; // Remove AboutDescription

      var summary = document.getElementById("summary"); // Summary ID

      // Text added to summary
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

      // Create an array of items for the list
      const items = [
        "Zaid Okal",
        "a Software Engineer",
        "a Software Developer",
        "a Software Tester",
      ];

      // Get the parent element to which the list will be appended
      var AboutPararaph = document.getElementById("AboutParagraph");

      // Create the UL element
      const ul = document.createElement("ul");

      ul.id = "PhoneText";

      // Loop through the items array and create an LI element for each item
      items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });

      // Append the UL element to the parent element
      AboutPararaph.appendChild(ul);
    }
  }

  // ChangeText function
  function changeText() {
    console.log("changeText function called");
    console.log("Window width is less than or equal to 600");

    const textElement = document.getElementById("text");

    function updateText(text, deleteText = false) {
      if (deleteText) {
        let currentText = textElement.textContent;
        let interval = setInterval(function () {
          if (currentText.length === 0) {
            clearInterval(interval);
            changeText(); // Proceed to the next text
          } else {
            currentText = currentText.slice(0, -1);
            textElement.textContent = currentText;
          }
        }, typingSpeed);
      } else {
        let currentIndex = 0;

        function updateCharacter() {
          textElement.textContent = text.substring(0, currentIndex + 1);
          currentIndex++;

          if (currentIndex < text.length) {
            setTimeout(updateCharacter, typingSpeed); // Delay each character by the typing speed
          } else {
            setTimeout(function () {
              updateText(text, true); // Start deleting the current text after typing it
            }, 1500); // Delay before deleting the current text
          }
        }

        updateCharacter();
      }
    }

    let texts = [
      "Zaid Okal",
      "a Software Engineer",
      "a Software Developer",
      "a Software Tester",
    ];
    let currentTextIndex = 0;

    function changeText(deleteText = false) {
      let text = texts[currentTextIndex];
      updateText(text, deleteText);

      if (!deleteText) {
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Increment the currentTextIndex to proceed to the next text
      } else {
        setTimeout(changeText, 3000); // Delay before starting the next text
      }
    }

    changeText(); // Start the text changing
  }

  script();
};

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("nav a");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function (event) {
      event.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      var targetTop = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    });
  }
});
