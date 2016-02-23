
var submitBtn = $('#submit-btn');

$( "form" ).on( "submit", function(event) {
	event.preventDefault();
	var value = $('#city-type').val();
	console.log(value);
	$('body').removeClass();

	if (value == "New York City" || value === "NYC"|| value==="New York"|| value==="nyc") {
		$('body').addClass('nyc');
	} else if (value == "San Francisco" || value === "sf"|| value==="San Fran"|| value==="SF") {
		$('body').addClass('sf');
	} else if (value == "la" || value === "Los Angeles"|| value==="lala land"|| value==="LA") {
		$('body').addClass('la');
	} else if (value == "Austin" || value === "texas"|| value==="austin") {
		$('body').addClass('austin');
	} else if (value == "sydney" || value === "SYD"|| value==="Sydney") {
		$('body').addClass('sydney');	
	}

});

