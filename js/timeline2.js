var timelineSwiper = new Swiper(".timeline .swiper-container", {
  direction: "vertical",
  loop: false,
  speed: 1600,
  pagination: ".swiper-pagination",
  paginationBulletRender: function (swiper, index, className) {
    var year = document
      .querySelectorAll(".swiper-slide")
      [index].getAttribute("data-year");
    return '<span class="' + className + '">' + year + "</span>";
  },
  paginationClickable: true,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  breakpoints: {
    768: {
      direction: "horizontal",
    },
  },
});

function navigateTimeline(year) {
  // Find the index of the slide with the specified year
  const slides = Array.from(
    document.querySelectorAll(".timeline .swiper-slide")
  );
  const slideIndex = slides.findIndex(
    (slide) => slide.getAttribute("data-year") === year.toString()
  );

  // Slide to the specified index
  if (slideIndex !== -1) {
    timelineSwiper.slideTo(slideIndex);
  }
}

function clickTextInTimeline() {
  var urlParams = new URLSearchParams(window.location.search);
  var year = urlParams.get("year");
  console.log(year);

  var bullets = document.querySelectorAll(".swiper-pagination-bullet");
  for (var i = 0; i < bullets.length; i++) {
    if (bullets[i].textContent === year) {
      bullets[i].click();
      break;
    }
  }

  // Remove the 'year' parameter from the URL
  var newURL = window.location.pathname;
  window.history.replaceState({}, document.title, newURL);
}

function goToTimeline() {
  // Find all the <a> tags with the class "link-wrapper"
  var linkWrappers = document.querySelectorAll(".link-wrapper");

  // Set the href attribute of each <a> tag dynamically
  linkWrappers.forEach(function (linkWrapper) {
    var year = linkWrapper.parentElement.dataset.year;
    linkWrapper.href = "timeline2.html?year=" + year;
    linkWrapper.addEventListener("click", goToTimeline);
  });
}
