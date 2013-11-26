// Loads google's Feed API
// uses form google.load(module, version, package), where 
//   module calls the specific API module you wish to use on your page (in this case, elements)
//   version is the version number of the module you wish to load (in this case, 1)
//   package specifies the specific elements package you wish to load, in this cae Feed
// If you need to find out more about google.load, visit https://developers.google.com/loader/
    
    google.load("feeds", "1");
    
    // Our callback function, for when a feed is loaded.
    function feedLoaded(result) {
      if (!result.error) {
        // Grab the container we will put the results into
        var container = document.getElementById("feedContent");
        container.innerHTML = '';
		
		
        // Loop through the feeds, putting the titles onto the page.
        // Check out the result object for a list of properties returned in each entry.
        // http://code.google.com/apis/ajaxfeeds/documentation/reference.html#JSON
        for (var i = 0; i < result.feed.entries.length; i++) {
          var entry = result.feed.entries[i];
          var li = document.createElement("li");
		  li.innerHTML = '<a href="' + entry.link + '">' + entry.title + '</a>';
     //     li.appendChild(document.createTextNode(entry.title));
          container.appendChild(li);
        }
		
		
      } else { // If loading the feed results in an error, show a link to the Advisicon blog instead.
		container.innerHTML = '<li><a href="http://advisiconblog.com" title="View the Advisicon blog">Learn about the latest in project management, Microsoft SharePoint, and Microsoft Project/Project Server</a></li>';
	  }
    }
    
    function OnLoad() {
      // Create a feed instance that will grab the advisiconblog.com feed.
      var feed = new google.feeds.Feed("http://www.advisiconblog.com/feed/");
    
      // Calling load sends the request off.  It requires a callback function.
      feed.load(feedLoaded);
    }
    
    google.setOnLoadCallback(OnLoad);