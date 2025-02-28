$(document).ready(function () {
    let currentIndex = 0;
    const slides = $('.slider-item');
    const totalSlides = slides.length;

    function updateSlide() {
        slides.removeClass('active').eq(currentIndex).addClass('active');
    }

    $('#nextBtn').click(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
    });

    $('#prevBtn').click(function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
    });

    updateSlide(); // Initial setup
});

