// Carousel
const carouselButtons = document.querySelectorAll('.carousel-btn');
const slides = document.querySelectorAll('.slide');

carouselButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const calcNextSlide = e.target.id === 'next' ? 1 : -1;
    const slideActive = document.querySelector('.active');

    newIndex = calcNextSlide + [...slides].indexOf(slideActive);
    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex > [...slides].length - 1) newIndex = 0;
    slides[newIndex].classList.add('active');
    slideActive.classList.remove('active');
  });
});

//Bonjour
setTimeout(function () {
  customElements.define(
    'count-up',
    class extends HTMLElement {
      constructor() {
        super();
        this.textContent = 'Bonjour';
      }
    }
  );
}, 5000);
