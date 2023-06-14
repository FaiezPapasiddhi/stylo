

  const btn = document.querySelector("button.mobile-menu-button");
      const menu = document.querySelector(".mobile-menu");

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });




const slidesContainer = document.querySelector(".slides-container");
const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
	slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
	slidesContainer.scrollLeft -= slideWidth;
});





window.addEventListener("load", function(event) {
  document.querySelector('[data-dropdown-toggle="dropdown"]').click();
});



let defaultTransform = 0;
function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
prev.addEventListener("click", goPrev);


var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Counter JS


// Back to top

//Get the button

  // Get the 'to top' button element by ID
  var toTopButton = document.getElementById("to-top-button");

  // Check if the button exists
  if (toTopButton) {

      // On scroll event, toggle button visibility based on scroll position
      window.onscroll = function() {
          if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
              toTopButton.classList.remove("hidden");
          } else {
              toTopButton.classList.add("hidden");
          }
      };

      // Function to scroll to the top of the page smoothly
      window.goToTop = function() {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      };
  }


