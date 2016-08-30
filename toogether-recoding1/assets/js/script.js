
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsEach: true,
        nav: true
    });
    $(".owl-carousel").css({"display": "flex", "align-items": "center"});
});

$(document).ready(function(){
    $(".owl-carousel-b").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsEach: true
    });
});

$(function (){
    $(".mobile-button").click(function() {

        var changeBut = $(".mobile-button").css("right");

        if(changeBut === "20px"){

            $(".mobile-button").css("right", "60%");
            $(".mobile-menu").css("margin-right", "60%");

        }else{

            $(".mobile-button").css("right", "20px");
            $(".mobile-menu").css("margin-right", "-50%");

        }
    });

    $(document).ready(function() {
        $(".gallery").fancybox({
                autoScale: true,
                cyclic: true,
                showCloseButton: true
        });
        $(".gallery").on("click", function(){
            $.fancybox({
                href: this.href,
                type: "iframe"
            }); // fancybox
            return false
        }); // on
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
        $("#dropDownLanguage").slideToggle();
    });
});

$(function () {

    $(".agree-butt").click(function (e) {
        e.preventDefault();
        $(".apply-step-3").hide();
        $(".ret-to-step-1").hide();
        $(".registration-menu").hide();
        $(".popup").show();
        return false;
    });


    $(".start-registr").click(function (e) {
        e.preventDefault();
        $(".apply-step-1").hide();
        $(".apply-step-2").show().css("display", "flex");

        $(".step-1").css("border-bottom", "3px solid #ffffff");
        $(".step-2").css("border-bottom", "3px solid #195491");

    });


    $(".finish-registr").click(function (e) {
        e.preventDefault();
        $(".apply-step-2").hide();
        $(".apply-step-3").show().css("display", "flex");
        $(".ret-to-step-1").toggle().css("display","block");

        $(".step-2").css("border-bottom", "3px solid #ffffff");
        $(".step-3").css("border-bottom", "3px solid #195491");
    });

    $(".form-contact-send").click(function (e) {
        e.preventDefault();
        $('.center-block-b').show();
        $('.center-block').hide();
    });
});

$(function () {
   $(".residence-but").click(function () {
       $(".hidden-form").slideToggle("slow");
       $(".residence-but").toggle().css("display", "none");
       $(".resid-arrow").toggle().css("display", "block");
   });
    $(".resid-arrow").click(function () {
        $(".hidden-form").slideToggle("slow");
        $(".resid-arrow").slideToggle("slow");
        $(".residence-but").toggle().css("display", "block");
        $(".resid-arrow").toggle().css("display", "none");
    });
});

$(function netherSwitch() {
    $(".nether_arrow").click(function () {
        $(".nether-drop").slideToggle();
    });
    $(".nether_arrow-b").click(function () {
        $(".nether-drop-b").slideToggle();
    });
    $(".nether_arrow-c").click(function () {
        $(".nether-drop-c").slideToggle();
    });
    $(".nether_arrow-d").click(function () {
        $(".nether-drop-d").slideToggle();
    });
    $(".language_arrow").click(function () {
       $("#dropDownLanguage-mobile").slideToggle();
    });
});

$(function htmlGallery () {
    $(".icon-to-group-video").click(function(){
        $(this).closest(".html5gallery").children(".html5gallery-toolbox-0").click();
    });
});
