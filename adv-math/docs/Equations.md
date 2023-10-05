# Equations Module

The `Equations` module provides methods for solving linear and quadratic equations in JavaScript.

## Usage

To use the `Equations` module, import it and use its static methods in your JavaScript code.

```javascript
const Equations = require('adv-math').Equations;

// Example usage
const a = 2;
const b = -4;
const c = 2;
const linearRoot = Equations.solveLinear(a, b); // Solve a linear equation
const quadraticRoots = Equations.solveQuadratic(a, b, c); // Solve a quadratic equation
```

## Methods

### `solveLinear(a, b)`

Solves a linear equation of the form `ax + b = 0`.

- `a` (number): The coefficient of `x`. It cannot be zero.
- `b` (number): The constant term.
- Returns: The root (solution) of the linear equation.

### `solveQuadratic(a, b, c)`

Solves a quadratic equation of the form `ax^2 + bx + c = 0`.

- `a` (number): The coefficient of `x^2`.
- `b` (number): The coefficient of `x`.
- `c` (number): The constant term.
- Returns: An array containing the roots (solutions) of the quadratic equation. If the equation has no real roots, an error is thrown.

## Examples

```javascript
const Equations = require('adv-math').Equations;

// Example linear equation: 2x - 4 = 0
const linearA = 2;
const linearB = -4;
const linearRoot = Equations.solveLinear(linearA, linearB); // Returns 2

// Example quadratic equation: x^2 - 4x + 4 = 0
const quadraticA = 1;
const quadraticB = -4;
const quadraticC = 4;
const quadraticRoots = Equations.solveQuadratic(quadraticA, quadraticB, quadraticC); // Returns [2, 2]
```
