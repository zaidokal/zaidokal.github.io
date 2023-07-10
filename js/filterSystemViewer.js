// Wrap your code inside a function
function initializeFilter() {
  // Get the checkboxes and swiper slides
  const educationCheckbox = document.getElementById("educationCheckbox");
  const experienceCheckbox = document.getElementById("experienceCheckbox");
  const projectCheckbox = document.getElementById("projectCheckbox");
  const swiperSlides = document.querySelectorAll(".swiper-slide");

  // Function to filter the swiper slides based on the checkbox selection
  function filterSlides() {
    const showEducation = educationCheckbox.checked;
    const showExperience = experienceCheckbox.checked;
    const showProject = projectCheckbox.checked;

    // Iterate over each swiper slide and pagination bullet
    swiperSlides.forEach((slide, index) => {
      const slideId = slide.getAttribute("id");

      // Check if the slide matches the selected checkboxes
      const showSlide =
        (slideId === "education" && showEducation) ||
        (slideId === "experience" && showExperience) ||
        (slideId === "project" && showProject) ||
        (!showEducation && !showExperience && !showProject);

      // Hide or show the corresponding swiper slide based on the filter
      slide.style.display = showSlide ? "block" : "none";
    });
  }

  // Add event listeners to the checkboxes
  educationCheckbox.addEventListener("change", filterSlides);
  experienceCheckbox.addEventListener("change", filterSlides);
  projectCheckbox.addEventListener("change", filterSlides);

  // Call the filterSlides function initially to apply any default filtering
  filterSlides();
}

// Call the initializeFilter function to set up the filter on page load
initializeFilter();
