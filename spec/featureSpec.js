'use strict';

describe('Feature tests:', function(){
	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat();
	});

	it('Thermostat starts at 20 degrees', function(){
		expect(thermostat.getTemperature()).toEqual(20);
	});
});