// Auto scroll del carrusel
const carousel = document.querySelector('.carousel');

let scrollSpeed = 1;
let interval = null;

function startScrolling() {
  interval = setInterval(() => {
    carousel.scrollLeft += scrollSpeed;
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
      carousel.scrollLeft = 0;
    }
  }, 20);
}

function stopScrolling() {
  clearInterval(interval);
}

carousel.addEventListener('mouseenter', stopScrolling);
carousel.addEventListener('mouseleave', startScrolling);

startScrolling();
