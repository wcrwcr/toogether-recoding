

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsEach: true
    });
});

$(document).ready(function(){
    $(".owl-carousel-b").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsEach: true
    });
});




$(function(){
    $(".mobile-button").click(function() {
        var currentCss = $(".mobile-button").css("margin-right");
            console.log(currentCss);
        if(currentCss === "0px"){

            $(".mobile-menu").css("right", "0");
            $(".mobile-button").css("margin-right", "70vw");

        }else{

            $(".mobile-menu").css("right", "-70vw");
            $(".mobile-button").css("margin-right", "0");
        }

    });

    $(document).ready(function() {
        $(".gallery").fancybox();
    });


    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top < 490) $(".menu-b").css({
            top: '0',
            position: 'relative'
        });
        else $(".menu-b").css({
            top: '60px',
            position: 'fixed'
        });
    });


    $(".language_arrow").click(function () {
        $("#dropDownLanguage").toggle()
    });
});
$(function () {
    $('.form-contact-send').click(function() {
        $('.center-block-b').show();
        $('.center-block').toggle();
    });
});


