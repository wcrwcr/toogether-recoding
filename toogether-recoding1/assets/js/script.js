
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsEach: true,
        nav: true,
        navText: [

            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"

        ]
    });
    $(".owl-carousel").css({"display": "flex", "align-items": "center"});

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
        $(".gallery").fancybox();
        $(".photo-group").fancybox({
            overlayShow : true
        });
        $(".video-group").fancybox({
           helpers: {
               media: {}
           }
        });

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

$(function footLink () {
    $('.links-content ul li a').hover(
        function(){ $(this).addClass('active') },
        function(){ $(this).removeClass('active') }
    );
});

/*$(function test () {
   var questions = [
       "Ile jest 20 + 4?", "Mam 34 __, a mój brat ma 14__.",
       "Wiemy, że dzisiaj jest test z polskiego, ale Marta i Konrad o tym nie __.",
       "Do szkoły jedziemy __, tam czytamy i __ teksty.",
       "Zwykle do pracy __ tramwajem, ale dzisiaj __ taksówką.",
       "Nie lubię __.",
       "Andrzej i Romek __ codziennie smaczne kolacje w drogich restauracjach.",
       "Andrzej: - Co __ robić __? Anna:- Nie wiem, jeszcze nie mam planów.",
       "Kiedy będę bogaty, __ robić to, co __.",
       "Co będziesz robić _ dwa lata?",
       "Jestem nauczycielką i pracuję __.",
       "Prognoza pogody: Dziś jest__, ale jutro będzie __.",
       "Cieszę się, że nareszcie do mnie ____ - tak dawno nie rozmawialiśmy!",
       "Marek: - Masz ____ ? Małgorzata: - Nie.",
       "Antonim słowa „tradycyjny” to: ____.",
       "Nauczyciele powinni być ____ .",
       "____ muszą mieć wyższe wykształcenie.",
       "Michał i Jagna są bardzo szczęśliwym małżeństwem.  Michał ____ z Jagną w 1982 roku.",
       "Babcia urodziła się ____ .",
       "Dzień Matki jest w Polsce ____ .",
       " ____ zacznę bez problemu swoją pierwszą w życiu pracę.",
       "Jutro mam wolny dzień, bo ____ .",
       "Mateuszek ma 193 cm wzrostu. Krzysztof ma 184 cm wzrostu.",
       "Żelisława mówi dobrze po polsku. Sędzisława mówi bardzo dobrze po polsku.",
       "5 mln. Polaków ____ .",
       "– Halo. Dzień dobry, ____ rozmawiać z Małgorzatą?",
       "Ufam całkowicie ____ . Mogę jej powiedzieć o wszystkich moich problemach.",
       "Przemysław: - Ten rogal jest nieświeży. Szczepan: - ____",
       "To jest ten rower, ____ rodzice nie mogą mi kupić.",
       "Protestuje przeciw ____,  żeby dzieci oglądały filmy pornograficzne.",
       "Uwaga piesi! Ten wpis oznacza, że:",
       "Po odejściu od kasy reklamacje nie będą uwzględniane! Ten napis można spokać:",
       "Kobiety w ciężarne poza kolejnością Ten napis ozncza, że:",
       "WC dla personelu! Ten napis oznacza:",
       "Zmiana organizacji ruchu! Ten napis oznacza, że:",
       "Obrazy 65-letniego malara z Radomska wiszą w galeriach Europy, USA i w wielu miastach Polski, ale nie w mieście, w którym żyje i tworzy. W zeszłym tygodniu władze miasta postanowiły kupić dla radomszczańskiego muzem 30 obrazów lokalnego artysty. Ten tekst informuje o:",
       "Telepraca to niższe koszty za wynajmowanie biura oraz mniej pieniędzy na jego wyposażenie. A na dodatek – bardziej zadowoleni, tańsi i bardziej wydajni pracownicy. Marzenia? Niekoniecznie; to coraz bardziej popularna forma pracy w Polsce i na całym świecie. Z tekstu wynika, że:",
       "Zwiększającą się liczbę turystów z Polski w Wielkiej Brytani zauważyło wiele instytucji. W słynnym muzeum Beatlesów w Liverpoolu nagrano polskojęzyczną wersję przewodnika, którą niedługo będzie można usłyszeć w słuchawkach. Z tekstu dowiadujemy się, że:",
       "Były prezydent Polski, 64-letni Lech Wałęsa, wciąż żonaty z Danutą, dzieli teraz swój czas miedzy rodzinę, fundację swego imienia i częste podróże do Stanów Zjednoczonych na wykłady, na których, jak można usłyszeć, nieźle zarabia. Z tego tesktu wynika, że:",
       "Bezrobocie w Polsce spada, ale to nie dlatego, że powstają nowe miejsca pracy, lecz głównie za sprawą zagraniznych wyjazdów o charakterze zarobkowym. Wyjeżdzają osoby z wyższym wykształceniem, robotnicy wykwalifikowani i niewykwalifikowani. Ten tekst informuje, że:"
    ];
    $.inArray("Nie lubię __.", questions);
});*/


