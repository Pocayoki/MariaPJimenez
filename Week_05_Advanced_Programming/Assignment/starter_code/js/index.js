// pseudo code:
// 1. Type in a city name into "Enter a city name..."field
	// city name typed in (3)different ways
	// option for 5 different cities to be entered
// 2. Click update button
	//city name is submitted
// 3. Background changes to image of the typed city
	

$(document).ready(function(){
	
	$("#submit-btn").click(function(event){
	event.preventDefault();
	var userCity = $('#city-type').val();
	console.log(userCity);

	if (userCity == "NYC" || userCity == "New York City" || userCity == "New York"){
		$('body').addClass('nyc');
	}

	else if (userCity == "San Francisco" || userCity == "SF" || userCity == "Bay Area"){
		$('body').addClass('sf');
	}


	else if (userCity == "Los Angeles" || userCity == "LA" || userCity == "LAX"){
		$('body').addClass('la');
	}


	else if (userCity == "Austin" || userCity == "ATX"){
		$('body').addClass('austin');
	}


	else if (userCity == "Sydney" || userCity == "SYD"){
		$('body').addClass('sydney');
	}

	})
	

})








    
    	
  
