/**
 *  Plugin which uses the Google AJAX Feed API for creating feed content
 *  @author:  M. Alsup (malsup at gmail dot com)
 *  @version: 1.0.2 (5/11/2007)
 *  Documentation and examples at: http://www.malsup.com/jquery/gfeed/
 *  Free beer and free speech. Enjoy!
 */
(function($) {

if (!window.google)  {
    alert('You must include the Google AJAX Feed API script');
    return;
}    

if (!google.feeds) google.load("feeds", "1");

$.fn.gFeed = function(options) {
    var opts = jQuery.extend({
        target: this,
        max:   5   // max number of items per feed
    }, options || {});
    
    var g = new google.feeds.Feed(opts.url);
	var results;
	
    this.each(function() {
		var results = g.load(displayFeed);
    });    
	
	function displayFeed(result){
		if (!result.error) {
          var container = opts.target;
		  var max = opts.max;
          for (var i = 0; i < max; i++) {
            var entry = result.feed.entries[i];
			var title = $("<div></div>").attr('class', 'gf-title ').html(
																	 $('<a></a>').attr('href', entry['link']).attr('class', 'gf-title ').html(entry['title'])
																	 );
			$(title).appendTo(container);			
			var content = $("<div></div>").attr('class', 'gf-content ').html(entry['content']);
			$(content).appendTo(container);
          }
        }
	}
    
    return this;
};

})(jQuery);

