'use strict';

describe('Thermostat:', function(){
	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat();
	});

	it('starts at 20 degrees', function(){
		expect(thermostat.getTemperature()).toEqual(20);
	});

	it('resets the temperature to default', function(){
		thermostat._temperature = 25;
		expect(thermostat.getTemperature()).toEqual(25);
		thermostat.reset();
		expect(thermostat.getTemperature()).toEqual(20);
	});

	it('power saving mode in on by default', function(){
		expect(thermostat.savingModeOn).toBeTruthy();
	});

	it('increases the temperature with the up button', function(){
		thermostat.up();
		expect(thermostat.getTemperature()).toEqual(21);
	});

	it('descreases the temperature with the down button', function(){
		thermostat.down();
		expect(thermostat.getTemperature()).toEqual(19);
	});

	it('limits the minimum temperature to 10 degrees', function(){
		thermostat._temperature = 10;
		thermostat.down();
		expect(thermostat.getTemperature()).toEqual(10);
	});

	describe('Power saving mode is ON:', function(){
		it('limits the maximum temperature to 25 degrees', function(){
			thermostat._temperature = 25;
			thermostat.up();
			expect(thermostat.getTemperature()).toEqual(25);
		});
	});

	describe('Power saving mode is OFF:', function(){
		it('limits the maximum temperature to 32 degrees', function(){
			thermostat.turnOffSavingMode();
			thermostat._temperature = 32;
			thermostat.up();
			expect(thermostat.getTemperature()).toEqual(32);
		});
	});
});