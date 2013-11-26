// Controls the slideshow action of fading from book to book in the "Featured Books" section of the index page

$(document).ready(
		function(){
			$('#portfolio').innerfade({
				speed: 'slow',
				timeout: 4000,
				type: 'sequence',
				containerheight: '220px'
			});
		}
	);

// Jeff Jacobson-Swartfager moved this script out of the HTML 11/16/2011 as part of his push for a semantic site