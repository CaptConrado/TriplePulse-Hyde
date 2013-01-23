$(document).ready(function(){
	$('.game .type a').click(function(event){
		event.preventDefault();
		$('.game .type').hide();
		if ($(this).hasClass('race')){
			$('.game .level.race ').fadeIn();
			$('.game > h3').html('What\'s your experience level?');
		}else if ($(this).hasClass('cardio')){
			$('.game .level.cardio ').fadeIn();
			$('.game > h3').html('How often do you train?');	
		}
		$('.breadcrumbs .type').removeClass('active').addClass('completed');
		$('.breadcrumbs .level').addClass('active');
		$('.breadcrumbs .type .checkmark').fadeIn();
	})
	$('.game .level a').click(function(event){
		event.preventDefault();
		$('.game .level').hide();
		$('.game .plans').fadeIn();
		$('.breadcrumbs .level .checkmark').fadeIn();
		$('.breadcrumbs .level').removeClass('active').addClass('completed');
		$('.breadcrumbs .plans').addClass('active');
		$('.game > h3').html('Subscription structure');
		
	})
});