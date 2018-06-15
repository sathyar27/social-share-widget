$(document).ready(function() {
	var aCount,widthSum,navWidth,tranSize;
	
	// Find anchor count
	aCount = $('.shareOption nav a').length;
	
	// total width of nav element
	widthSum = 0;				
	$('.shareOption nav a').each(function() {
		widthSum += $(this).outerWidth(true);
		console.log($(this).outerWidth());
	});				
	$('.shareOption nav').css('width',widthSum+'px');				
	
	// finding rest of than 4 anchors width for transform
	navWidth = (4 * $('.shareOption nav a').outerWidth(true)) - parseInt($('.shareOption nav a').css('marginRight'));				
	tranSize = widthSum - navWidth;

	// event for share button
	$('.shareBtn').click(function(){
		$('.share').removeClass('inActive').addClass('active');
		
		if(aCount > 4) {				
			if (screen.width > 767) {
				$(".shareOption > div").mousemove(function(event){    
					
					var relX = event.pageX - $(this).offset().left;
					var transVal = (tranSize/($('.shareOption > div').outerWidth(true)))*relX;
					
					if(relX >= 60) {
						$('.shareOption nav').css({'transform' : 'translateX(-' + transVal + 'px)', '-webkit-transform' : 'translateX(-' + transVal + 'px)', '-moz-transform' : 'translateX(-' + transVal + 'px)', '-ms-transform' : 'translateX(-' + transVal + 'px)', '-o-transform' : 'translateX(-' + transVal + 'px)'});
						
					}
					else {									
						$('.shareOption nav').css({'-o-transform' : 'translateX(0px)', '-webkit-transform' : 'translateX(0px)', '-moz-transform' : 'translateX(0px)', '-ms-transform' : 'translateX(0px)', 'transform' : 'translateX(0px)'});
						
					}
				});
			}
		}
	});
		
	// event for each share option
	$('.shareOption nav a').click(function() {
		$('.share').removeClass('active').addClass('inActive');		
	
		$('.share.inActive .shareOption > p').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e){
			setTimeout(function(){
				$('.share').removeClass('inActive'); 
				$('.shareOption nav').css({'-o-transform' : 'translateX(0px)', '-webkit-transform' : 'translateX(0px)', '-moz-transform' : 'translateX(0px)', '-ms-transform' : 'translateX(0px)', 'transform' : 'translateX(0px)'});		
				$('.shareOption > div').scrollLeft(0);
			},1000);
		});
	});	
});