// script.js

let slideIndex = 1;
showSlides(slideIndex);

// Cambia a la diapositiva actual
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Muestra la diapositiva correspondiente
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Oculta todas las diapositivas
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Quita la clase 'active' de todos los puntos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Muestra la diapositiva activa y agrega la clase 'active' al punto correspondiente
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("fade");
  dots[slideIndex - 1].className += " active";
}

// Función para cambiar a la siguiente diapositiva automáticamente
function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

// Configura el intervalo para cambiar de diapositiva cada 5 segundos (5000 ms)
setInterval(autoSlide, 5000);
