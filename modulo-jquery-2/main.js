$(document).ready(function() {
    $('#carrousel-imagens').slick({
        autoplay: true
    });
    $('.menu-hamburger').click(function() {
        $('nav').slideToggle();
    });
});