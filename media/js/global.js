$(document).ready(function(){
	$('a.login').click(function(event){
		event.preventDefault();
		$('.modal.login').modal('show');
	});
	$('a.newsletter').click(function(event){
		event.preventDefault();
		$('.modal.newsletter').modal('show');
	});
	$('.modal.newsletter form').submit(function(event){
		event.preventDefault();
		$('.newsletterSignup').hide();
		$('.newsletterConfirm').fadeIn();
	})
})