
function mainAnswer(param) {
	
	if (typeof arrQuestions == 'undefined' || typeof arrAnswers == 'undefined') {
		return false;
	}
	
    $(".answer").prop('checked', function () {
       return this.getAttribute('checked') == ('checked');
    });
    $(".test_title").html(arrQuestions[param]);
    for (i=0;i<=3;i++) {
    	var rel_i = i + 1, $el = $("#answer"+rel_i);

    	if (typeof arrAnswers[param][i] == 'undefined') {
    		$el.hide();
    		$('.answer[data-rel='+rel_i+']').hide();
    	} else {
    		$el.show().html(arrAnswers[param][i]);
    		$('.answer[data-rel='+rel_i+']').show();
    	}
    }
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