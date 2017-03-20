
function mainAnswer(param) {
	
	if (typeof arrQuestions == 'undefined' || typeof arrAnswers == 'undefined' || typeof arrAnswers[param] == 'undefined') {
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

var testVar = null;

function calculatePercents() {
	var rightAnswCount = 0, answCount = 0;
    for (var i = 0; i < arrAnswers.length; i ++){
    	answCount++;
        if (answerSave [i] == keys [i]){
        	rightAnswCount++;
        }
    }
	
    $res =  rightAnswCount / answCount *100;
    return $res;
}

function checkPl() {
	var $res = calculatePercents();
    if ($res <= 30) {
    	return 'A1';
    }
    
    if ($res <= 65) {
    	return 'A2';
    }

    if ($res <= 100) {
    	return 'B1';
    }
}

function checkEn(){
	var $res = calculatePercents();
    if ($res < 75) {
    	return 'A1';
    }
    
    if ($res < 100) {
    	return 'A2';
    }

    if ($res >= 100) {
    	return 'B1';
    }
    
}

function outResults() {
    count = 0;
	$('#test-body-holder').hide();
	$('#test-result-holder').show();
	var results;  
	if (testVar == 'english_arr.js') {
		results = checkEn();
		$('#test-type').val('English');
	} else {
		results = checkPl();
		$('#test-type').val('Polski');
	}
	$('#overall-test-result').val(results);
}

$(function () {
	$('.test-runner').click(function(e) {
		testVar = $(this).data('file');
		$('.test-top-holder').hide(function(e){
			$('#test-top-holder').hide();
			$('#test-body-holder').show();
			mainAnswer(0);
			
		});
	});
	
	
    $(".answer").change(function () {
        mainAnswer(answer);
        answerSave[answer] = $(this).data('rel');
        answer ++;
        if (arrQuestions.length < answer) {
        	outResults();
        }
    });
});