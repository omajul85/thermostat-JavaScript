'use strict';

function Thermostat(){
	this._temperature = 20;
	this._MINIMUM_TEMPERATURE = 10;
	this.savingModeOn = true;
}

Thermostat.prototype.getTemperature = function() {
	return this._temperature;
};

Thermostat.prototype.up = function() {
	this._temperature += 1;
};

Thermostat.prototype.down = function() {
	if(this.getTemperature() > this._MINIMUM_TEMPERATURE){
		this._temperature -= 1;
	}
};

Thermostat.prototype.isSavingModeOn = function() {
	return this.savingModeOn;
};