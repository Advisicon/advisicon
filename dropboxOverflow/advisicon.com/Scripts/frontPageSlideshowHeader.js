// This script controls the display of that silly banner at the top of the index page. It sizes them all the same.

	$(function(){ //creates a new function. This s**t is in jQuery.
		
		enterFunction = function(){
			$(this).html('ACTIVE');
		}
		leaveFunction = function(){
			$(this).html('inactive');
		}
		$('.accordion1').hSlides({
			totalWidth: 950, 	// total width of the accordion, the default is 0
			totalHeight: 261, 	// total height of the accordion, again the default is 0
			minPanelWidth: 40, 	// minimum width of a panel when closed. Once again default = 0
			maxPanelWidth: 782	// maximum width to a panel when opened. One final time, the default is 0
		});			
	}
	);

// Jeff Jacobson-Swartfager moved this script out of the HTML 11/16/2011 as part of his push for a semantic site