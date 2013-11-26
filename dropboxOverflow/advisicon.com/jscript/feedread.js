
    // when the DOM is ready, convert the feed anchors into feed content 
    $(document).ready(function() { 
        // add a feed manually 
		$('#feeds').gFeed({  
			url: 'http://blog.biznetis.net/?feed=rss',
			max: 1
		}); 
		// add a feed manually 
		$('#feedsall').gFeed({  
			url: 'http://blog.biznetis.net/?feed=rss',
			max: 5
		}); 
    }); 
