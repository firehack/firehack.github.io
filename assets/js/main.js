$( document ).ready(function() {
	console.log( "ready!" );
	$(".welcome .center").hover(function(){
		$('.main-content').css('background-color', 'rgba(0, 0, 0, 1)');
	},function(){
		$('.main-content').css('background-color', 'rgba(93, 108, 124, 0.64)');
	});
	$('.button').hover(function(){
		$(' .button').css('background-color', '#009eaf');
		$(' .button a').css('color', '#fff');
	},function(){
		$(' .button').css('background-color', 'transparent');
		$(' .button a').css('color', '#009eaf');
	})
	$('#welcome').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('section.instruction').hide();
		$('section.why').hide();
		$('section.faq').hide();
		$('section.sponsor').hide();
		$('section.welcome').show();
	});
	$('#instruction').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('section.welcome').hide();
		$('section.why').hide();
		$('section.faq').hide();
		$('section.sponsor').hide();
		$('section.instruction').show();

	});
	$('#why').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('section.welcome').hide();
		$('section.instruction').hide();
		$('section.faq').hide();
		$('section.sponsor').hide();
		$('section.why').show();
	});
	$('#faq').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('section.welcome').hide();
		$('section.instruction').hide();
		$('section.why').hide();
		$('section.sponsor').hide();
		$('section.faq').show();
	});
	$('#sponsor').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('section.welcome').hide();
		$('section.instruction').hide();
		$('section.why').hide();
		$('section.faq').hide();
		$('section.sponsor').show();
	});
});
