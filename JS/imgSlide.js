$(document).ready(function () {
    let currentIndex = 0;
    const slides = $('.slider-item');
    const totalSlides = slides.length;

    // Show the first slide
    $(slides[currentIndex]).addClass('active');

    // Function to go to the next slide
    function nextSlide() { 
        $(slides[currentIndex]).removeClass('active');
        currentIndex = (currentIndex + 1) % totalSlides; // Loop back to first slide
        $(slides[currentIndex]).addClass('active');
    }

    // Function to go to the previous slide
    function prevSlide() {
        $(slides[currentIndex]).removeClass('active');
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to last slide if at first
        $(slides[currentIndex]).addClass('active');
    }

    // Change slides every 3 seconds
    // setInterval(nextSlide, 3000);

    // When the Next button is clicked, go to the next slide
    $('#nextBtn').click(function () {
        nextSlide();
    });

    // When the Prev button is clicked, go to the previous slide
    $('#prevBtn').click(function () {
        prevSlide();
    });
});
