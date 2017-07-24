/*$('.form').find('input, textarea').on('keyup blur focus', function (e) {

	var $this = $(this),
		label = $this.prev('label');

	if (e.type === 'keyup') {
		if ($this.val() === '') {
			label.removeClass('active highlight');
		} else {
			label.addClass('active highlight');
		}
	} else if (e.type === 'blur') {
		if ($this.val() === '') {
			label.removeClass('active highlight');
		} else {
			label.removeClass('highlight');
		}
	} else if (e.type === 'focus') {

		if ($this.val() === '') {
			label.removeClass('highlight');
		} else if ($this.val() !== '') {
			label.addClass('highlight');
		}
	}

});*/


// 
/*
$(function () {
	$("fieldset").each(function () {
		$(this).css('display', 'none');
		$("#first").css('display', 'block');
	});
});*/


// Form Next 
$(".next_btn").click(function () { // Function Runs On NEXT Button Click
	$(this).parent().next().fadeIn('slow');
	$(this).parent().css({
		'display': 'none'
	});
	// Adding Class Active To Show Steps Forward;
	$('.active').next().addClass('active');
});

$(".pre_btn").click(function () { // Function Runs On PREVIOUS Button Click
	$(this).parent().prev().fadeIn('slow');
	$(this).parent().css({
		'display': 'none'
	});
	// Removing Class Active To Show Steps Backward;
	$('.active:last').removeClass('active');
});
