const Units = require('../src/units-conversions/units');

describe('Units', () => {
    test('converts meters to feet', () => {
        expect(Units.convertLength(5, 'meters', 'feet')).toBeCloseTo(53.8195, 3);
    });

    test('converts feet to meters', () => {
        expect(Units.convertLength(10, 'feet', 'meters')).toBeCloseTo(0.929, 3);
    });

    test('converts Celsius to Fahrenheit', () => {
        expect(Units.convertTemperature(25, 'Celsius', 'Fahrenheit')).toBeCloseTo(77, 1);
    });
    test('converts Celsius to Kelvin', () => {
        expect(Units.convertTemperature(25, 'Celsius', 'Kelvin')).toBeCloseTo(298.15, 1);
    });
    test('converts Fahrenheit to Kelvin', () => {
        expect(Units.convertTemperature(68, 'Fahrenheit', 'Kelvin')).toBeCloseTo(293.15, 1);
    });
    test('converts Fahrenheit to Celsius', () => {
        expect(Units.convertTemperature(68, 'Fahrenheit', 'Celsius')).toBeCloseTo(20, 1);
    });
    test('converts Kelvin to Celsius', () => {
        expect(Units.convertTemperature(300, 'Kelvin', 'Celsius')).toBeCloseTo(26.85, 1);
    });
    test('converts Kelvin to Fahrenheit', () => {
        expect(Units.convertTemperature(300, 'Kelvin', 'Fahrenheit')).toBeCloseTo(80.33, 1);
    });

    // Add more test cases as needed
});
