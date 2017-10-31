// pseudo code:
// 1. Select a city name from the  "Select a city" drop down menu
	// 5 city names must be listed
// 2. When clicked:
	//city name is submitted, and 
// 3. Background changes to image of selected city
	

$(document).ready(function(){
	
	var city = ["ATX", "LA", "NYC", "SF", "SYD"];
	// var i = [0];
	// var city = $('#city-type').val();

	for (var i=0;i<city.length;i++){
   $('<option/>').val(city[i]).text(city[i]).appendTo('#city-type');
}
	
	//test - practice
	// $('#city-type').append('<option>ATX</option>');
	// $('#city-type').append('<option>LA</option>');
	// $('#city-type').append('<option>NYC</option>');
	// $('#city-type').append('<option>SF</option>');
	// $('#city-type').append('<option>SYD</option>');
	
	$('#city-type').change(function(){
	var city = $("#city-type option:selected").val();

	

	if (city == "NYC"){
	$('body').addClass('nyc');
	}

	else if (city == "SF"){
	$('body').addClass('sf');
	}


	else if (city == "LA"){
	$('body').addClass('la');
	}


	else if (city == "ATX"){
	$('body').addClass('austin');
	}


	else if (city == "SYD"){
	$('body').addClass('sydney');
	}

	})
	
})









    
    	
  
