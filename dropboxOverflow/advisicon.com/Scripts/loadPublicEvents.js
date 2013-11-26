google.load("feeds", "1");

var container = document.getElementById("public-classes");


function eventFeedLoaded(result) {
	if (!result.error) {
		if (result.feed.entries.length > 0) {
			var upcomingCalendar = document.createElement('table');
			upcomingCalendar.innerHTML = '<th>Course</th><th>Location</th><th>Date</th>';
			container.appendChild(upcomingCalendar);
			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i];
				var event = document.createElement("tr");
				var eventContent = entry.content;
					var removedContentNewLines = eventContent.replace(/\n/gim, ' ');
					var eventLonghand = removedContentNewLines.replace(/^.*When:.*(\b.*\b),\s+(\b.*\b)\s+(\d+),\s+(\d+).*-.*$/m, "$2 $3, $4");
					var eventDateObject = new Date(eventLonghand);
					if (eventDateObject != 'Invalid Date') {
						var eventDate = (eventDateObject.getMonth()+1) + '/' + eventDateObject.getDate() + '/' + eventDateObject.getFullYear();
					} else {
						var eventDate = 'Multiple';
					}
					

					var spideredLocation = entry.content.replace(/^.*Where:.*\n.*<b>(.*)<\/b><br>(.*)<br>(.*)<br>[\n.*]*$/gim, "<spideredLocation>$1###$2###$3</spideredLocation>");
					var location = spideredLocation.replace(/\n/gim, ' ').replace(/.*<spideredLocation>(.*)<\/spideredLocation>.*/gim, "$1");
					splitLocation = location.split('###');
					var bizLocation = splitLocation[0];
					var bizMap = 'http://maps.google.com/maps?q=' + splitLocation[1].replace(/ /g, "+") + '+' + splitLocation[2].replace(/ /g, "+");
				event.innerHTML = '<td><a href="' + entry.link + '" title="Register for ' + entry.title + ' on the Advisicon store" target="_blank">' + entry.title + '</a></td><td><a href="' + bizMap + '" title="Find ' + bizLocation + ' on Google Maps">' + bizLocation + '</a></td><td>' + eventDate + '</td>';
				upcomingCalendar.appendChild(event);
				
			}
		}
	} else {
		errorHere.innerHTML += ': ' + result.error['message'];
	}
	
}
function OnLoad() {
	var feed = new google.feeds.Feed('http://www.eventbrite.com/rss/user_list_events/35721498302');
	feed.setNumEntries(99);
	feed.load(eventFeedLoaded);
}
google.setOnLoadCallback(OnLoad);
