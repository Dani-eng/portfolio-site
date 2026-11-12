// Find the element that displays the year
const yearElement = document.getElementById("year");

// Update it to the current year if it exists
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Carousel controls
  document.querySelectorAll(".media-carousel").forEach((carousel) => {
    const track = carousel.querySelector(".media-track");
    const slides = Array.from(track.querySelectorAll(".media-slide"));
    const buttons = carousel.querySelectorAll(".carousel-button");
    let currentSlide = 0;
    let autoplay;

    function showSlide(index) {
      currentSlide = (index + slides.length) % slides.length;
      track.scrollTo({
        left: slides[currentSlide].offsetLeft - track.offsetLeft,
        behavior: "smooth"
      });
    }

    function startAutoplay() {
      autoplay = setInterval(() => showSlide(currentSlide + 1), 5000); //5000 milliseconds = 5 seconds
    }

    buttons[0].addEventListener("click", () => showSlide(currentSlide - 1));
    buttons[1].addEventListener("click", () => showSlide(currentSlide + 1));

    carousel.addEventListener("mouseenter", () => clearInterval(autoplay));
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", () => clearInterval(autoplay));
    carousel.addEventListener("focusout", startAutoplay);

    startAutoplay();
  });
