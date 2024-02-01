
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const autoSlideInterval = 5000; // 5 seconds

function nextSlide() {
    slides[currentSlide].style.animation = 'fade-out 1s forwards';
    setTimeout(() => {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
        slides[currentSlide].style.animation = 'fade-in 1s forwards';
        document.querySelector('.banner-text').style.animation = 'fade-in 1s forwards'; // Add animation to banner text
        document.querySelectorAll('.contact form label, .contact form input, .contact form textarea, .contact form select, .contact form button').forEach(element => {
            element.style.animation = 'slide-up 0.5s forwards'; // Add animation to form elements
        });
    }, 1000);
}

setInterval(nextSlide, autoSlideInterval);

// JavaScript for welcome text animation
window.addEventListener('load', function() {
    const welcomeText = document.getElementById('welcomeText');
    welcomeText.style.opacity = 0;
    welcomeText.style.transform = 'translateX(-100px)';
    welcomeText.style.transition = 'opacity 1s ease, transform 1s ease';

    setTimeout(() => {
        welcomeText.style.opacity = 1;
        welcomeText.style.transform = 'translateX(0)';
    }, 500);
});
