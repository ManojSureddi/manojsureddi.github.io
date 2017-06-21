  	$(function() {
  		var	animation= { speed : 800, easing : 'easeInOutExpo' }
  		$('#navigation a').bind('click',(event)=>{
  			var $anchor = $(this);
		/*
		if you want to use one of the easing effects:
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1500,'easeInOutExpo');
		*/
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).position().left
		}, animation.speed, animation.easing, ()=> {
			
						// active class for selected chapter
						///$articles.removeClass( 'content-active' );
						//$article.addClass( 'content-active' );
						
						
					} );
		event.preventDefault();
	});

  		$('.scroll-container section').bind("click",(event)=>{
  			console.log(event);
  		})
  	});