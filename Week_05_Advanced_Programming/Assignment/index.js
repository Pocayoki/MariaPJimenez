$(document).ready(function()) {

	$('form').submit(function(event)) {

		var inputField = $('input').val();

		$('body').attr('class', ''); //to remove class

		if (inputField === 'New York' || inputField === 'NYC' || inputField === 'New York City') {
			
			$('body').css('background', 'url(".images/nyc.jpg")'); //is cleaner to change background pulling it from the styl sheet using addClass

		}

		event.preventDefault();
	});
});