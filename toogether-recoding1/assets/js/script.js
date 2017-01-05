var formTution  = {
	resultHolder: {},
	buttons: {
		step1 : ".start-registr",
		step2 : ".finish-registr",
		final : ".agree-butt"  
	},
	step1FormSelector: "#apply-step-1",
	step2FormSelector: "#apply-step-2",
	step3FormSelector: "#apply-step-3",
	_ajaxOut : function() {
		$.ajax({
		    type: "POST",
		    url: $__GLOBALS.applyUrl,
		    data: JSON.stringify({ data: this.resultHolder }),
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
		    success: function(data) {
		        $(".apply-step-3").hide();
		        $(".ret-to-step-1").hide();
		        $(".registration-menu").hide();
		        $(".popup").show();
		    },
		    failure: function(errMsg) {
		        alert(errMsg);
		    }
		});
	},
	_serializeResult: function($form, $step) {
		var za = {}
		za[$step] = $form.serializeArray();
		this.resultHolder = $.extend( this.resultHolder, za);
		console.log(this.resultHolder);
		return this;
	},
	form1Submit: function(e) {
        e.preventDefault();
        var $form = $(this.step1FormSelector),
				fee1 =parseFloat($('#r_fee').data('value')),
				fee2 =parseFloat($('#p_fee').data('value')),
				$tution =$('#t_fee b'),
				$total =$('#total_fee b');

        if (!($form.validate())) {
        	return false;
        }
        
        this._serializeResult($form, 'step1');
        var price = parseFloat($('#choose-type option:selected').prop('value')),
        		totalPrice = price + fee1 + fee2;
        if (totalPrice == NaN) {
        	totalPrice = 0;
        }
        $tution.text(price);
        $total.text(totalPrice);
        $(this.buttons.step1).data('on', 1)
        return false;
	},
	form2Submit: function(e) {
		e.preventDefault();
        var $form = $(this.step2FormSelector);

        if (!($form.validate())) {
        	return false;
        }
        
        this._serializeResult($form, 'step2');
        return true;
	},
	formFinalSubmit: function(e) {
		e.preventDefault();
        var $form = $(this.step3FormSelector);

        
        if (!$('#terms-of').prop('checked')) {
        	return false;
        }
        
        this._serializeResult($form, 'final');
        return true;
	},
	formAgreeSwitch: function(e) {
		//final agree button pressed
		e.preventDefault();
		if (this.formFinalSubmit(e)){
			this._ajaxOut();
		}
        return false;
	},
	form1Switch: function(e){
		e.preventDefault();
		this.form1Submit(e);
		if ($(this.buttons.step1).data('on') == '1') {
	        $(".apply-step-1").hide();
	        $(".apply-step-2").show().css("display", "flex");

	        $(".step-1").css("border-bottom", "3px solid #ffffff");
	        $(".step-2").css("border-bottom", "3px solid #195491");
		}
        return false;
	},
	form2Switch: function(e) {
        e.preventDefault();
        if (this.form2Submit(e)){
	        $(".apply-step-2").hide();
	        $(".apply-step-3").show().css("display", "flex");
	        $(".ret-to-step-1").toggle().css("display","block");
	
	        $(".step-2").css("border-bottom", "3px solid #ffffff");
	        $(".step-3").css("border-bottom", "3px solid #195491");
        }
        return false;
	} 
	
	
};
$(function (){
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

    $(".gallery").fancybox();
    $(".photo-group").fancybox({
        overlayShow : true
    });
    $(".video-group").fancybox({
       helpers: {
           media: {}
       }
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


    $(".language_arrow").hover(function () {
        $("#dropDownLanguage").slideToggle();
    });
    
    /*============ tution =================*/
    $(formTution.step1FormSelector).submit(function(e){
    	e.preventDefault();
    	formTution.form1Submit(e);
    	return false;
	});
    $(formTution.buttons.step1).click(function(e){
    	return formTution.form1Switch(e);
	});
    $(formTution.buttons.step2).click(function (e) {
    	return formTution.form2Switch(e);
	});
    $(formTution.buttons.final).click(function(e){
    	return formTution.formAgreeSwitch(e);
	});




    $(".form-contact-send").click(function (e) {
        e.preventDefault();
        $('.center-block-b').show();
        $('.center-block').hide();
    });

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
