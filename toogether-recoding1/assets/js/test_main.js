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
    });
});