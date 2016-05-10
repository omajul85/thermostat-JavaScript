'use strict';

function Thermostat(){
	this._temperature = 20;
}

Thermostat.prototype.getTemperature = function() {
	return this._temperature;
};