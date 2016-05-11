$(document).ready(function(){
	var thermostat = new Thermostat();
	$("#temperature").text(thermostat.getTemperature());
	
	$("#PSM").click(function(){
		thermostat.toggleSavingMode();
		$("#temperature").text(thermostat.getTemperature());
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
		$("#temperature").text(thermostat.getTemperature());
	});

	$("#down").click(function(){
		thermostat.down();
		$("#temperature").text(thermostat.getTemperature());
	});

	$("#reset").click(function(){
		thermostat.reset();
		$("#temperature").text(thermostat.getTemperature());
	});
});