# Units Conversion Module

The `Units` module provides methods for converting units of measurement, including length and temperature units.

## Usage

To use the `Units` module, import it and call the methods to perform unit conversions.

```javascript
const Units = require('adv-math').Units;

// Convert length units
const metersToFeet = Units.convertLength(1, 'meters', 'feet');

// Convert temperature units
const celsiusToFahrenheit = Units.convertTemperature(25, 'Celsius', 'Fahrenheit');
```

## Methods

### `convertLength(value, fromUnit, toUnit)`

Converts length units from one unit to another.

- `value` (number): The numeric value to convert.
- `fromUnit` (string): The source unit (e.g., 'meters').
- `toUnit` (string): The target unit (e.g., 'feet').
- Returns: The converted value in the target unit.

### `convertTemperature(value, fromUnit, toUnit)`

Converts temperature units from one unit to another (e.g., Celsius to Fahrenheit).

- `value` (number): The numeric value to convert.
- `fromUnit` (string): The source temperature unit (e.g., 'Celsius').
- `toUnit` (string): The target temperature unit (e.g., 'Fahrenheit').
- Returns: The converted value in the target temperature unit.

## Supported Units

### Length Units

- `meters` (m)
- `feet` (ft)
- (You can add more unit conversions as needed)

### Temperature Units

- `Celsius` (°C)
- `Fahrenheit` (°F)

## Examples

```javascript
const Units = require('adv-math').Units;

// Convert length units: meters to feet
const metersToFeet = Units.convertLength(1, 'meters', 'feet'); // Result: 3.28084 feet

// Convert temperature units: Celsius to Fahrenheit
const celsiusToFahrenheit = Units.convertTemperature(25, 'Celsius', 'Fahrenheit'); // Result: 77°F
```
