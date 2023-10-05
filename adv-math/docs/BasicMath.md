# BasicMath Module

The `BasicMath` module provides basic arithmetic operations for addition, subtraction, multiplication, and division.

## Usage

Import the `BasicMath` module and use its static methods in your JavaScript code.

```javascript
const BasicMath = require('adv-math').BasicMath;

// Example usage
const result = BasicMath.add(2, 3); // Returns 5
const difference = BasicMath.subtract(5, 3); // Returns 2
const product = BasicMath.multiply(2, 3); // Returns 6
const quotient = BasicMath.divide(6, 2); // Returns 3
```

## Methods

### `add(a, b)`

Adds two numbers and returns the result.

- `a` (number): The first number.
- `b` (number): The second number.
- Returns: The sum of `a` and `b`.

### `subtract(a, b)`

Subtracts the second number from the first number and returns the result.

- `a` (number): The first number.
- `b` (number): The number to subtract.
- Returns: The result of `a - b`.

### `multiply(a, b)`

Multiplies two numbers and returns the result.

- `a` (number): The first number.
- `b` (number): The second number.
- Returns: The product of `a` and `b`.

### `divide(a, b)`

Divides the first number by the second number and returns the result. Throws an error if division by zero is attempted.

- `a` (number): The numerator.
- `b` (number): The denominator.
- Returns: The result of `a / b`.
- Throws: An error if `b` is 0 (division by zero).

## Examples

```javascript
const BasicMath = require('adv-math').BasicMath;

// Addition
const sum = BasicMath.add(4, 5); // Returns 9

// Subtraction
const difference = BasicMath.subtract(10, 3); // Returns 7

// Multiplication
const product = BasicMath.multiply(6, 8); // Returns 48

// Division
const quotient = BasicMath.divide(20, 5); // Returns 4

// Division by zero (throws an error)
try {
  BasicMath.divide(10, 0); // Throws an error
} catch (error) {
  console.error(error.message); // Outputs "Division by zero is not allowed."
}
```