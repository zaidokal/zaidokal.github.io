document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    autoHeight: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 500,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function () {
        var paginationSwitches = document.querySelectorAll(
          ".swiper-pagination-custom .swiper-pagination-switch"
        );
        paginationSwitches.forEach(function (switchElement, index) {
          switchElement.classList.remove("active");
          if (index === 0) {
            switchElement.classList.add("active");
          }
        });
      },
      slideChangeTransitionStart: function () {
        var paginationSwitches = document.querySelectorAll(
          ".swiper-pagination-custom .swiper-pagination-switch"
        );
        paginationSwitches.forEach(function (switchElement, index) {
          switchElement.classList.remove("active");
          if (index === mySwiper.realIndex) {
            switchElement.classList.add("active");
          }
        });
      },
    },
  });

  var switchElements = document.querySelectorAll(
    ".swiper-pagination-custom .swiper-pagination-switch"
  );
  switchElements.forEach(function (switchElement) {
    switchElement.addEventListener("click", function () {
      var index = Array.from(switchElements).indexOf(this);
      mySwiper.slideTo(index);
      switchElements.forEach(function (switchElement) {
        switchElement.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
