$(document).ready(function(){
	var thermostat = new Thermostat();
	updateTemperature();
	
	$("#PSM").click(function(){
		thermostat.toggleSavingMode();
		updateTemperature();
		$("#temperature").html(formatTemperature(thermostat));
		if($(this).attr("src") == "public/images/psm_off.png"){
			$(this).attr("src", "public/images/psm_on.png");
			$("#power-saving-status").text("ON");
		} else {
			$(this).attr("src", "public/images/psm_off.png");
			$("#power-saving-status").text("OFF");
		}
	});

	$("#up").click(function(){
		thermostat.up();
		updateTemperature();
	});

	$("#down").click(function(){
		thermostat.down();
		updateTemperature();
	});

	$("#reset").click(function(){
		thermostat.reset();
		updateTemperature();
	});

	function updateTemperature(){
		$('#temperature').attr('class', thermostat.energyUsage());
		$("#temperature").html(formatTemperature());
	}

	function formatTemperature(){
		var txt = "";
		txt += "<h1>" + thermostat.getTemperature() + " &#8451;</h1>"
		return txt;
	}
});

