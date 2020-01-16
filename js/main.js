$(document).ready(function(){

	// Tabbed steps
	$('.steps:not(".steps--Single") .step h4').click(function(e){
		e.preventDefault();
		var image = $(this).parents('.step').data('target');
		var $imageContainer = $(this).parents('.steps__copyContainer').siblings('.steps__imageContainer');
		$(this).parents('.step').siblings().removeClass('is-active');
		$(this).parents('.step').addClass('is-active');
		$imageContainer.children('.step__image').removeClass('is-active');
		$imageContainer.children('.step__image[data-name="' + image + '"]').addClass('is-active');
	});

  // Expand team tiles
	$('#team .cardGridItem[data-quote="true"]').click(function(){
		if( $(this).hasClass('active') ){
			$('#team .cardGridItem').removeClass('active');
		} else {
			$('#team .cardGridItem').removeClass('active');
			$(this).addClass('active');
		}
	});

	// Scroll to anchor
	if(window.location.hash) {
	  var hash = window.location.hash;
	  var headerOffset = $('header').height();
	  $("html, body").animate({ scrollTop: $(hash).offset().top - headerOffset }, "slow");
	}

	// Video aspect ratio
  $('.videoContainer iframe').liquidFrame();

});




