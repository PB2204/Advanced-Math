# Trigonometry Module

The `Trigonometry` module provides methods for performing trigonometric calculations, including sine, cosine, tangent, and their inverse functions.

## Usage

To use the `Trigonometry` module, import it and use its methods in your JavaScript code.

```javascript
const Trigonometry = require('adv-math').Trigonometry;

// Example usage
const degrees = 30;

// Calculate sine, cosine, and tangent
const sineValue = Trigonometry.sine(degrees);
const cosineValue = Trigonometry.cosine(degrees);
const tangentValue = Trigonometry.tangent(degrees);

// Calculate arcsine, arccosine, and arctangent
const arcsineValue = Trigonometry.arcsine(0.5);
const arccosineValue = Trigonometry.arccosine(0.5);
const arctangentValue = Trigonometry.arctangent(0.577);

// Calculate cosecant, secant, and cotangent
const cosecantValue = Trigonometry.cosecant(degrees);
const secantValue = Trigonometry.secant(degrees);
const cotangentValue = Trigonometry.cotangent(degrees);

// Calculate arccosecant, arcsecant, and arccotangent
const arccosecantValue = Trigonometry.arccosecant(2);
const arcsecantValue = Trigonometry.arcsecant(2);
const arccotangentValue = Trigonometry.arccotangent(1.732);
```

## Methods

### `sine(degrees)`

Calculates the sine of an angle in degrees.

- `degrees` (number): The angle in degrees.
- Returns: The sine value of the angle.

### `cosine(degrees)`

Calculates the cosine of an angle in degrees.

- `degrees` (number): The angle in degrees.
- Returns: The cosine value of the angle.

### `tangent(degrees)`

Calculates the tangent of an angle in degrees.

- `degrees` (number): The angle in degrees.
- Returns: The tangent value of the angle.

### `cosecant(degrees)`

Calculates the cosecant of an angle in degrees.

- `degrees` (number): The angle in degrees.
- Returns: The cosecant value of the angle.

### `secant(degrees)`

Calculates the secant of an angle in degrees.

- `degrees` (number): The angle in degrees.
- Returns: The secant value of the angle.

### `cotangent(degrees)`

Calculates the cotangent of an angle in degrees.

- `degrees` (number): The angle in degrees.
- Returns: The cotangent value of the angle.

### `arcsine(value)`

Calculates the arcsine (inverse sine) in degrees.

- `value` (number): The value for which to calculate arcsine. Should be between -1 and 1.
- Returns: The arcsine value in degrees.

### `arccosine(value)`

Calculates the arccosine (inverse cosine) in degrees.

- `value` (number): The value for which to calculate arccosine. Should be between -1 and 1.
- Returns: The arccosine value in degrees.

### `arctangent(value)`

Calculates the arctangent (inverse tangent) in degrees.

- `value` (number): The value for which to calculate arctangent.
- Returns: The arctangent value in degrees.

### `arccosecant(value)`

Calculates the arccosecant (inverse cosecant) in degrees.

- `value` (number): The value for which to calculate arccosecant. Should not be 0.
- Returns: The arccosecant value in degrees.

### `arcsecant(value)`

Calculates the arcsecant (inverse secant) in degrees.

- `value` (number): The value for which to calculate arcsecant. Should not be 0.
- Returns: The arcsecant value in degrees.

### `arccotangent(value)`

Calculates the arccotangent (inverse cotangent) in degrees.

- `value` (number): The value for which to calculate arccotangent. Should not be 0.
- Returns: The arccotangent value in degrees.

## Examples

```javascript
const Trigonometry = require('adv-math').Trigonometry;

// Example calculations
const degrees = 30;

const sineValue = Trigonometry.sine(degrees); // Returns 0.5
const cosineValue = Trigonometry.cosine(degrees); // Returns 0.86602540378
const tangentValue = Trigonometry.tangent(degrees); // Returns 0.57735026919

const arcsineValue = Trigonometry.arcsine(0.5); // Returns 30
const arccosineValue = Trigonometry.arccosine(0.5); // Returns 60
const arctangentValue = Trigonometry.arctangent(0.577); // Returns 30

const cosecantValue = Trigonometry.cosecant(degrees); // Returns 2
const secantValue = Trigonometry.secant(degrees); // Returns 1.15470053838
const cotangentValue = Trigonometry.cotangent(degrees); // Returns 1.73205080757

const arccosecantValue = Trigonometry.arccosecant(2); // Returns 30
const arcsecantValue = Trigonometry.arcsecant(2); // Returns 60
const arccotangentValue = Trigonometry.arccotangent(1.732); // Returns 30
```
