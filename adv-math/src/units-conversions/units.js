class Units {
    // Method to convert length units (e.g., meters to feet)
    static convertLength(value, fromUnit, toUnit) {
        const conversions = {
            meters: 3.28084, // 1 meter = 3.28084 feet
            feet: 0.3048,   // 1 foot = 0.3048 meters
            // Add more unit conversions as needed
        };

        if (!conversions[fromUnit] || !conversions[toUnit]) {
            throw new Error('Invalid unit(s).');
        }

        return value * conversions[fromUnit] / conversions[toUnit];
    }

    // Method to convert temperature units (e.g., Celsius to Fahrenheit)
    static convertTemperature(value, fromUnit, toUnit) {
        if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
            return (value * 9 / 5) + 32;
        } else if (fromUnit=='Celsius' && toUnit=='Kelvin') {
            return value + 273.15;
        } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
            return (value - 32) * 5 / 9;
        } else if (fromUnit=='Fahrenheit' && toUnit=='Kelvin') {
            return (value + 459.67) * 5 / 9;
        } else if (fromUnit=='Kelvin' && toUnit=='Celsius') {
            return value - 273.15;
        } else if (fromUnit=='Kelvin' && toUnit=='Fahrenheit') {
            return (value * 9 / 5) - 459.67;
        }

        else {
            throw new Error('Invalid temperature unit conversion.');
        }
    }
}

module.exports = Units;
