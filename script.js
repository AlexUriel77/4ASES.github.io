
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const itemWidth = items[0].offsetWidth + 10; // Ancho del item incluyendo el margen
let currentTranslate = 0;

// Movimiento automático hacia la derecha
function moveRight() {
  currentTranslate -= itemWidth;
  track.style.transform = `translateX(${currentTranslate}px)`;

  // Cuando el carrusel llega al final del primer conjunto de elementos, lo reseteamos
  if (Math.abs(currentTranslate) >= (itemWidth * items.length / 2)) {
    // Reseteamos la posición a 0 para que siga deslizándose indefinidamente
    currentTranslate = 0;
    track.style.transform = `translateX(${currentTranslate}px)`;
  }
}

// Desplazamiento automático cada 2 segundos
setInterval(moveRight, 2000);