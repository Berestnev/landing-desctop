$(document).ready(function () {
    
    // home block slider
    $('#home .img-slider ul').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    // comments slider

    $('#testimonials .testimonials__slider--comments').slick({
        dots: false,
        speed: 1000,
        fade: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        pauseOnFocus: false,
        slidesToShow:1,
        slidesToScroll:1,
        prevArrow: $('.js-testimonials-left-button'),
        nextArrow: $('.js-testimonials-right-button')
    });
    
    // inputs 
    function filledInput() {
        var input = $('.contact-us__custom-input');
        input.on('change', function () {
            var inputVal = $(this).val();

             if( inputVal != '') {
                 $(this).siblings('label').css('display', 'none');
             } else {
                 $(this).siblings('label').css('display', 'block');
             }
        });

    }
    filledInput();


    // nav scroll

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var idTarget = this.hash;
        var target = $(idTarget);


        $('html, body').animate({
            'scrollTop': target.offset().top
        }, 2000, 'swing');




    });
});