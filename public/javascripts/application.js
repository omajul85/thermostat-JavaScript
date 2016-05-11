$(document).ready(function(){
	var thermostat = new Thermostat();
	setColor(thermostat.energyUsage());
	$("#temperature").html(formatTemperature(thermostat));
	
	$("#PSM").click(function(){
		thermostat.toggleSavingMode();
		setColor(thermostat.energyUsage());
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
		setColor(thermostat.energyUsage());
		$("#temperature").html(formatTemperature(thermostat));
	});

	$("#down").click(function(){
		thermostat.down();
		setColor(thermostat.energyUsage());
		$("#temperature").html(formatTemperature(thermostat));
	});

	$("#reset").click(function(){
		thermostat.reset();
		setColor(thermostat.energyUsage());
		$("#temperature").html(formatTemperature(thermostat));
	});
});

function setColor(energyUsage) {
	if (energyUsage == "Low") {
		$("#temperature").css("color", "#4CAF50");
	} else if(energyUsage == "Medium"){
		$("#temperature").css("color", "#EAEA2A");
	} else {
		$("#temperature").css("color", "#DE4343");
	}
}

function formatTemperature(thermostat){
	var txt = "";
	txt += "<h1>" + thermostat.getTemperature() + " &#8451;</h1>"
	return txt;
}