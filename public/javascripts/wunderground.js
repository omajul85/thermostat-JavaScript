jQuery(document).ready(function($) {
	function displayWeather(country, city){
		$.ajax({
			url : "http://api.wunderground.com/api/403cd5091c5612ec/conditions/q/" + country + "/" + city + ".json",
			dataType : "jsonp",
			success : function(parsed_json) {
				var location = parsed_json['current_observation']['display_location']['city'];
				var temp_c = parsed_json['current_observation']['temp_c'];
				$('#current-temperature').html("<h1>Current temperature in " + location + " is " + temp_c + " &#8451;</h1>");
			}
		});
	}

	// By default
	displayWeather('France', 'Paris');

	$("#select-location").submit(function(event){
		event.preventDefault();
		var country = $("#current-country").val();
		var city = $("#current-city").val();
		displayWeather(country, city);
	});
});