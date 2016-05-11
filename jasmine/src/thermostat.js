'use strict';

function Thermostat(){
	this._MINIMUM_TEMPERATURE = 10;
	this._DEFAULT_TEMPERATURE = 20;
	this._MAX_TEMPERATURE_PSM_ON = 25;
	this._MAX_TEMPERATURE_PSM_OFF = 32;
	this.savingModeOn = true;
	this._MAXIMUM_TEMPERATURE = this._MAX_TEMPERATURE_PSM_ON;
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

Thermostat.prototype.toggleSavingMode = function() {
	this.savingModeOn = !this.savingModeOn;
	this._MAXIMUM_TEMPERATURE = this.savingModeOn ? this._MAX_TEMPERATURE_PSM_ON : this._MAX_TEMPERATURE_PSM_OFF;
};

// Thermostat.prototype.turnOnSavingMode = function() {
// 	this.savingModeOn = true;
// 	this._MAXIMUM_TEMPERATURE = 25;
// };

// Thermostat.prototype.turnOffSavingMode = function() {
// 	this.savingModeOn = false;
// 	this._MAXIMUM_TEMPERATURE = 32;
// };

Thermostat.prototype.isSavingModeOn = function() {
	return this.savingModeOn;
};

Thermostat.prototype.energyUsage = function() {
	if(this.getTemperature() < 18){
		return 'Low'
	} else if(this.getTemperature() >=18 && this.getTemperature() < 25){
		return 'Medium'
	} else {
		return 'High'
	}
};

// Console tests
// var t = new Thermostat();
// console.log(t.getTemperature());
// console.log(t._MAXIMUM_TEMPERATURE);
// console.log(t.energyUsage());
// console.log(t.isSavingModeOn());
// t.toggleSavingMode();
// console.log(t.isSavingModeOn());
// t.toggleSavingMode();
// console.log(t.isSavingModeOn());
// t.down();
// t.down();
// t.down();
// console.log(t.getTemperature());
// t.reset();
// console.log(t.getTemperature());