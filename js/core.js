$(document).ready(function () {
    $(document).ready(function () {
        $('.content').masonry({
            itemSelector: '.item'
        });
    });
    $('.sidebar-slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
});

//main slider
var slideIndex = 0;
var slides = document.getElementsByClassName('slide');
var dots = document.getElementsByClassName('dot');

function turnSlide(n) {
    showSlide(slideIndex = slideIndex + n);
}

showSlide(slideIndex);
function showSlide(n) {
    var x;
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' current', '');
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' current';
}

//autorun for slider
autoPlaySlide();
function autoPlaySlide() {
    var slides = document.getElementsByClassName('slide');
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' current', '');
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' current';
    setTimeout(autoPlaySlide, 3000);
}

//hide/show menu
$(document).ready(function(){
    $('#menu-btn').click(function(){
        $('.menu').slideToggle(700);
    });
});

// carousel effect
var slideNumber = 1;
showSlide(slideNumber);

function turnSlide(n) {
    showSlide(slideNumber = slideNumber + n);
}
function showSlide(n) {
    var x;
    var slides = document.getElementsByClassName('slide');
    if (n > slides.length) {slideNumber = 1}
    if (n < 1) {slideNumber = slides.length}
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = 'none';
    }
    slides[slideNumber-1].style.display = 'block';
}

//autorun for carousel
var slideIndex = 0;
autoPlaySlide(); 

function autoPlaySlide() {
    var slides = document.getElementsByClassName('slide');
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = 'none'; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = 'block'; 
    setTimeout(autoPlaySlide, 2500); 
}
