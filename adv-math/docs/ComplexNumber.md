# ComplexNumber Module

The `ComplexNumber` module represents complex numbers and provides methods for performing arithmetic operations on them, including addition, subtraction, multiplication, and magnitude calculation.

## Usage

To use the `ComplexNumber` module, create instances of complex numbers and use its methods in your JavaScript code.

```javascript
const ComplexNumber = require('adv-math').ComplexNumber;

// Create complex numbers
const complex1 = new ComplexNumber(2, 3);
const complex2 = new ComplexNumber(1, -1);

// Example operations
const sum = complex1.add(complex2); // Returns a new complex number (3, 2)
const difference = complex1.subtract(complex2); // Returns a new complex number (1, 4)
const product = complex1.multiply(complex2); // Returns a new complex number (5, 1)
const magnitude = complex1.magnitude(); // Returns the magnitude (absolute value) of complex1 (sqrt(13))
```

## Constructor

### `constructor(real, imaginary)`

Creates a new complex number with the specified real and imaginary parts.

- `real` (number): The real part of the complex number.
- `imaginary` (number): The imaginary part of the complex number.

## Methods

### `add(complex)`

Adds the current complex number to another complex number and returns a new complex number representing the sum.

- `complex` (ComplexNumber): The complex number to add.
- Returns: A new complex number representing the sum.

### `subtract(complex)`

Subtracts another complex number from the current complex number and returns a new complex number representing the difference.

- `complex` (ComplexNumber): The complex number to subtract.
- Returns: A new complex number representing the difference.

### `multiply(complex)`

Multiplies the current complex number by another complex number and returns a new complex number representing the product.

- `complex` (ComplexNumber): The complex number to multiply.
- Returns: A new complex number representing the product.

### `magnitude()`

Calculates and returns the magnitude (absolute value) of the complex number.

- Returns: The magnitude (absolute value) of the complex number as a non-negative number.

## Examples

```javascript
const ComplexNumber = require('adv-math').ComplexNumber;

// Create complex numbers
const complex1 = new ComplexNumber(2, 3);
const complex2 = new ComplexNumber(1, -1);

// Addition
const sum = complex1.add(complex2); // Returns a new complex number (3, 2)

// Subtraction
const difference = complex1.subtract(complex2); // Returns a new complex number (1, 4)

// Multiplication
const product = complex1.multiply(complex2); // Returns a new complex number (5, 1)

// Magnitude
const magnitude1 = complex1.magnitude(); // Returns sqrt(13), approximately 3.6055
const magnitude2 = complex2.magnitude(); // Returns sqrt(2), approximately 1.4142
```