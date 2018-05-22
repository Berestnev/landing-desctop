$(document).ready(function () {
    
    // first screen slider
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