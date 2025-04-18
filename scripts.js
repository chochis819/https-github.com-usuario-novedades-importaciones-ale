let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentIndex].style.display = 'none';  // Oculta la imagen actual
  currentIndex = (currentIndex + 1) % totalSlides;  // Cambia al siguiente índice
  slides[currentIndex].style.display = 'block';  // Muestra la nueva imagen
}

// Mostrar la primera imagen inicialmente
slides[currentIndex].style.display = 'block';

// Cambiar de imagen cada 3 segundos
setInterval(showNextSlide, 3000);
