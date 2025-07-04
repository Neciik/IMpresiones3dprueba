// app/assets/javascripts/carousel.js

document.addEventListener('DOMContentLoaded', function() {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const galleryContainer = document.querySelector('.gallery-container');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    if (!galleryWrapper || !galleryContainer || !prevButton || !nextButton) {
        console.warn("No se encontraron todos los elementos del carrusel. Asegúrate de que las clases HTML sean correctas.");
        return; // Salir si no se encuentran los elementos
    }

    const imageWidth = galleryContainer.querySelector('img').offsetWidth; // Ancho de una imagen
    const gap = parseFloat(getComputedStyle(galleryContainer).gap); // Espacio entre imágenes
    const scrollAmount = imageWidth + gap; // Cantidad a desplazar por cada clic

    let currentScroll = 0;

    nextButton.addEventListener('click', () => {
        const maxScroll = galleryContainer.scrollWidth - galleryWrapper.clientWidth;
        if (currentScroll < maxScroll) {
            currentScroll += scrollAmount;
            if (currentScroll > maxScroll) {
                currentScroll = maxScroll; // Asegura que no se desplace más allá del final
            }
            galleryContainer.style.transform = `translateX(-${currentScroll}px)`;
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentScroll > 0) {
            currentScroll -= scrollAmount;
            if (currentScroll < 0) {
                currentScroll = 0; // Asegura que no se desplace más allá del inicio
            }
            galleryContainer.style.transform = `translateX(-${currentScroll}px)`;
        }
    });

    // Opcional: Ajustar el scroll si la ventana cambia de tamaño
    window.addEventListener('resize', () => {
        // Reiniciar el scroll al inicio para evitar problemas de posicionamiento
        currentScroll = 0;
        galleryContainer.style.transform = `translateX(0px)`;
        // Recalcular imageWidth y gap si es necesario para una mejor adaptabilidad
        // Esto puede ser más complejo si las imágenes cambian de tamaño dinámicamente
    });
});