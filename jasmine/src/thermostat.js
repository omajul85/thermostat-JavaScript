'use strict';

function Thermostat(){
	this._MINIMUM_TEMPERATURE = 10;
	this._DEFAULT_TEMPERATURE = 20;
	this.turnOnSavingMode();
	this.reset();
}

Thermostat.prototype.getTemperature = function() {
	return this._temperature;
};

Thermostat.prototype.reset = function() {
	this._temperature = this._DEFAULT_TEMPERATURE;
};

Thermostat.prototype.up = function() {
	if(this.getTemperature() < this._MAXIMUM_TEMPERATURE){
		this._temperature += 1;
	}
};

Thermostat.prototype.down = function() {
	if(this.getTemperature() > this._MINIMUM_TEMPERATURE){
		this._temperature -= 1;
	}
};

Thermostat.prototype.isSavingModeOn = function() {
	return this.savingModeOn;
};

Thermostat.prototype.turnOnSavingMode = function() {
	this.savingModeOn = true;
	this._MAXIMUM_TEMPERATURE = 25;
};

Thermostat.prototype.turnOffSavingMode = function() {
	this.savingModeOn = false;
	this._MAXIMUM_TEMPERATURE = 32;
};