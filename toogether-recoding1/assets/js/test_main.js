/**
 * Created by Black_Moon on 11/14/2016.
 */
 /*var arrQuestions = [
    "Ile jest 20 + 4?",
    "Mam 34 __, a mój brat ma 14__.",
    "Wiemy, że dzisiaj jest test z polskiego, ale Marta i Konrad o tym nie __.",
    "Do szkoły jedziemy __, tam czytamy i __ teksty.",
    "Zwykle do pracy __ tramwajem, ale dzisiaj __ taksówką.",
    "Nie lubię __.",
    "Andrzej i Romek __ codziennie smaczne kolacje w drogich restauracjach.",
    "Andrzej: - Co __ robić __? Anna:- Nie wiem, jeszcze nie mam planów.",
    " Kiedy będę bogaty, __ robić to, co __.",
    "Co będziesz robić _ dwa lata?",
    'Jestem nauczycielką i pracuję __.',
    'Prognoza pogody: Dziś jest__, ale jutro będzie __.',
    'Cieszę się, że nareszcie do mnie ____ - tak dawno nie rozmawialiśmy!',
    'Marek: - Masz ____ ? Małgorzata: - Nie.',
    'Antonim słowa „tradycyjny” to: ____',
    'Nauczyciele powinni być ____ .',
    ' ____ muszą mieć wyższe wykształcenie.',
    'Michał i Jagna są bardzo szczęśliwym małżeństwem.  Michał ____ z Jagną w 1982 roku.',
    'Babcia urodziła się ____ .',
    'Dzień Matki jest w Polsce ____ .',
    '____ zacznę bez problemu swoją pierwszą w życiu pracę.',
    'Jutro mam wolny dzień, bo ____ .',
    'Mateuszek ma 187 cm wzrostu. Krzysztof ma 163 cm wzrostu.',
    'Żelisława mówi dobrze po polsku. Sędzisława mówi bardzo dobrze po polsku.',
    '5 mln. Polaków ____ .',
    '– Halo. Dzień dobry, ____ rozmawiać z Małgorzatą?',
    'Ufam całkowicie ____ . Mogę jej powiedzieć o wszystkich moich problemach.',
    'Przemysław: - Ten rogal jest nieświeży. Szczepan: - ____',
    'To jest ten rower, ____ rodzice nie mogą mi kupić.',
    'Protestuje przeciw ____,  żeby dzieci oglądały filmy pornograficzne.',
    'Uwaga piesi',
    'Po odejściu od kasy reklamacje nie będą uwzględniane',
    'Kobiety w ciężarne poza kolejnością',
    'WC dla personelu',
    'Zmiana organizacji ruchu',

    'Obrazy 65-letniego malara z Radomska wiszą w galeriach Europy, USA i w wielu miastach Polski, ale nie w mieście, w którym żyje i tworzy. W zeszłym tygodniu władze miasta postanowiły kupić dla radomszczańskiego muzem 30 obrazów lokalnego artysty. Ten tekst informuje o:',

    'Telepraca to niższe koszty za wynajmowanie biura oraz mniej pieniędzy na jego wyposażenie. A na dodatek – bardziej zadowoleni, tańsi i bardziej wydajni pracownicy. Marzenia? Niekoniecznie; to coraz bardziej popularna forma pracy w Polsce i na całym świecie. Z tekstu wynika, że:',

    'Zwiększającą się liczbę turystów z Polski w Wielkiej Brytani zauważyło wiele instytucji. W słynnym muzeum Beatlesów w Liverpoolu nagrano polskojęzyczną wersję przewodnika, którą niedługo będzie można usłyszeć w słuchawkach. Z tekstu dowiadujemy się, że:',

    'Były prezydent Polski, 64-letni Lech Wałęsa, wciąż żonaty z Danutą, dzieli teraz swój czas miedzy rodzinę, fundację swego imienia i częste podróże do Stanów Zjednoczonych na wykłady, na których, jak można usłyszeć, nieźle zarabia. Z tego tesktu wynika, że:',
    'Bezrobocie w Polsce spada, ale to nie dlatego, że powstają nowe miejsca pracy, lecz głównie za sprawą zagraniznych wyjazdów o charakterze zarobkowym. Wyjeżdzają osoby z wyższym wykształceniem, robotnicy wykwalifikowani i niewykwalifikowani. Ten tekst informuje, że:'
    ];*/

var arrQuestions = [];

var arrAnswers = [];



function mainAnswer(param) {
    $(".answer").prop('checked', function () {
       return this.getAttribute('checked') == ('checked');
    });
    $(".test_title").html(arrQuestions[param]);
    $("#answer1").html(arrAnswers[param][0]);
    $("#answer2").html(arrAnswers[param][1]);
    $("#answer3").html(arrAnswers[param][2]);
    $("#answer4").html(arrAnswers[param][3]);

}
var answer = 0;

var answerSave = [];

var rightAnswers = [];

function outRight() {
    count = 0;

    for (var i = 0; i < arrAnswers.length; i ++){
        if (arrAnswers [i] == rightAnswers [i]){
            count ++;

        }
    }

}

$(function () {
   mainAnswer(0);

    $(".answer").change(function () {
        mainAnswer(answer);
        answerSave[answer] = $(this).data('rel');
        answer ++;
        if(arrQuestions.length < answer){
            outRight();

        }
        //alert('Number of right answer, count', count );

    });

});