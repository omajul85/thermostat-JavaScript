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

	$("#get-status").click(function(){
		getStatus();
	});

	$("#post-status").click(function(){
		postStatus(thermostat.getTemperature(), thermostat.savingModeOn);
	});

	function updateTemperature(){
		$('#temperature').attr('class', thermostat.energyUsage());
		$("#temperature").html(formatTemperature());
	}

	function formatTemperature(){
		var txt = "";
		txt += "<h1>" + thermostat.getTemperature() + " &#8451;</h1>";
		return txt;
	}

	function getStatus(){
		res = $.getJSON('http://localhost:4567/status', function(data){ 
			res = data
			thermostat._temperature = res.temperature;
			thermostat.savingModeOn = res.power;
			updateTemperature();
			if(thermostat.savingModeOn){
				$("#power-saving-status").text("ON");
				$("#PSM").attr("src", "public/images/psm_on.png");
			} else {
				$("#power-saving-status").text("OFF");
				$("#PSM").attr("src", "public/images/psm_off.png");
			}
		});
	}

	function postStatus(temperature, power){
		console.log("Hello there!");
		$.ajax
		({
			type: "POST",
			url: 'http://localhost:4567/status',
			dataType: 'json',
			data: JSON.stringify({"temperature":temperature,"power":power}),
			success: function () {
				alert("Thanks!"); 
			}
		})
	}
});

