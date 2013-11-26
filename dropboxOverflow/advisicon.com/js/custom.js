

function FormSubmits()
	{
		var clLocation = document.getElementById("ClassLocation").value;
		var clCity = document.getElementById("ClassCity").value;
		var clState = document.getElementById("ClassState").value;
		var clStart = document.getElementById("ClassStart").value;
		var clEnd = document.getElementById("ClassEnd").value;
		var clRegLink = document.getElementById("ClassRegLink").value;
		var dbStatus;
		var regex = /^\d{4}\-\d{2}\-\d{2}$/;	
				
		if (clLocation == "" || clLocation.length < 3)
			{
			alert("The Location field is empty.");
			return false;
			}
		else if (clCity == "" || clCity.length < 3)
			{
			alert("The City field is empty.");
			return false;
			}
		else if (clState == "" || clState.length < 3)
			{
			alert("The State field is empty.");
			return false;
			}
		else if (clStart == "")
			{
			alert("The Start Date field is empty.");
			return false;
			}
		else if (clStart.length < 10 || clStart.length > 10)
			{
			alert("There are too many or too few characters in the Start Date field. 10 characters max/min.");
			return false;
			}
		else if (!regex.test(clStart))
			{
			alert("The information in the Start Date field is incorrectly formatted");
			return false;
			}
		else if (clEnd == "")
			{
			alert("The End Date field is empty");
			return false;
			}
		else if (clEnd.length < 10 || clEnd.length > 10)
			{
			alert("There are too many or too few characters in the End Date field. 10 characters max/min.");
			return false;
			}
		else if (!regex.test(clEnd))
			{
			alert("The information in the End Date field is incorrectly formatted");
			return false;
			}
		else
			{
			document.getElementById("ClassTitle").value = getClassName();
			document.getElementByID("ClassStatus").value = generateClassStatus();
			document.getElementByID("RegStatus").value = generateRegStatus();
			
			return true;
			} 
			
	}
	


function getClassName()
	{
		var getClassTitle = document.getElementById("ClassTitleSelector").selectedIndex;
		var returnClassTitle;
		
		switch(getClassTitle)
			{
			case 0:
			returnClassTitle = "MRG";
			return returnClassTitle;
			break;
			case 1:
			returnClassTitle = "MSP2007";
			return returnClassTitle;
			break;
			case 2:
			returnClassTitle = "MSP2010";
			return returnClassTitle;
			break;
			case 3:
			returnClassTitle = "PMP";
			return returnClassTitle;
			break;
			case 4:
			returnClassTitle = "PPM";
			return returnClassTitle;
			break;
			case 5:
			returnClassTitle = "SPT2007";
			return returnClassTitle;
			break;
			case 6:
			returnClassTitle = "SPT2010";
			return returnClassTitle;
			break;
			}
	}


function generateClassStatus()
	{
		var getClassStatus = document.getElementByID("ClassStatusSelector").selectedIndex;
		var returnClassStatus;
		
		switch(getClassStatus)
			{
			case 0:
			returnClassStatus = "Active";
			return returnClassStatus;
			break;
			case 1:
			returnClassStatus = "Inactive";
			return returnClassStatus;
			break;
			}
	}

function generateRegStatus()
	{
		var getRegStatus = document.getElementByID("RegStatusSelector").selectedIndex;
		var returnRegStatus;
		
		switch(getRegStatus)
			{
			case 0:
			returnRegStatus = "Open";
			return returnRegStatus;
			break;
			case 1:
			returnRegStatus = "Closed";
			return returnRegStatus;
			break;
			}
	}


function gettodaydate()
	{
	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth();
	var year = currentDate.getFullYear();
	var todaydate = year + "-" + month + "-" + day;
	return todaydate;
	}

function popupwebform(url)
	{
	var newwindow=window.open(url,'','scrollbars=no,menubar=no,height=400,width=450,resizable=no,toolbar=no,left=300,top=200,location=no,status=no');
	}

