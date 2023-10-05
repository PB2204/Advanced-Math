# Calculus Module

The `Calculus` module provides methods for performing basic calculus operations, including calculating the derivative of a function at a given point using numerical differentiation (finite difference method) and calculating the definite integral of a function between two points using numerical integration (trapezoidal rule).

## Usage

To use the `Calculus` module, import it and use its static methods in your JavaScript code.

```javascript
const Calculus = require('adv-math').Calculus;

// Example usage
const func = (x) => x * x; // Example function
const point = 2; // Point at which to calculate the derivative
const derivative = Calculus.derivative(func, point); // Calculate the derivative
const a = 0; // Lower bound of the integral
const b = 1; // Upper bound of the integral
const n = 1000; // Number of subintervals for numerical integration
const integral = Calculus.integral(func, a, b, n); // Calculate the definite integral
```

## Methods

### `derivative(func, point, h = 0.001)`

Calculates the derivative of a function at a given point using numerical differentiation (finite difference method).

- `func` (function): The function for which to calculate the derivative.
- `point` (number): The point at which to calculate the derivative.
- `h` (number, optional): The step size for numerical differentiation (default is 0.001).
- Returns: The numerical derivative of the function at the specified point.

### `integral(func, a, b, n = 1000)`

Calculates the definite integral of a function between two points using numerical integration (trapezoidal rule).

- `func` (function): The function for which to calculate the integral.
- `a` (number): The lower bound of the integral.
- `b` (number): The upper bound of the integral.
- `n` (number, optional): The number of subintervals for numerical integration (default is 1000).
- Returns: The numerical value of the definite integral of the function between `a` and `b`.

## Examples

```javascript
const Calculus = require('adv-math').Calculus;

// Example function
const func = (x) => x * x;

// Calculate the derivative at a point
const point = 2;
const derivative = Calculus.derivative(func, point); // Returns approximately 4.001

// Calculate the definite integral between two points
const a = 0;
const b = 1;
const n = 1000;
const integral = Calculus.integral(func, a, b, n); // Returns approximately 0.3335
```