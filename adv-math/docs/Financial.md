# Financial Module

The `Financial` module provides methods for financial calculations, including calculating future values, compound interest, and present values.

## Usage

To use the `Financial` module, import it and use its methods in your JavaScript code.

```javascript
const Financial = require('adv-math').Financial;

// Example usage
const principal = 1000; // Initial investment
const rate = 0.05; // Annual interest rate (5%)
const time = 5; // Number of years

// Calculate future value with compound interest
const futureValue = Financial.futureValue(principal, rate, time);

// Calculate compound interest earned
const compoundInterest = Financial.compoundInterest(principal, rate, time);

// Calculate present value
const presentValue = Financial.presentValue(futureValue, rate, time);
```

## Methods

### `futureValue(principal, rate, time)`

Calculates the future value of an investment with compound interest.

- `principal` (number): The initial investment or principal amount.
- `rate` (number): The annual interest rate (decimal).
- `time` (number): The number of years.
- Returns: The future value of the investment.

### `compoundInterest(principal, rate, time)`

Calculates the compound interest earned on an investment.

- `principal` (number): The initial investment or principal amount.
- `rate` (number): The annual interest rate (decimal).
- `time` (number): The number of years.
- Returns: The compound interest earned.

### `presentValue(futureValue, rate, time)`

Calculates the present value of a future amount with discounting.

- `futureValue` (number): The future amount to be discounted.
- `rate` (number): The annual interest rate (decimal).
- `time` (number): The number of years.
- Returns: The present value of the future amount.

## Examples

```javascript
const Financial = require('adv-math').Financial;

// Example calculations
const principal = 1000;
const rate = 0.05;
const time = 5;

const futureValue = Financial.futureValue(principal, rate, time); // Returns 1276.2830362313579
const compoundInterest = Financial.compoundInterest(principal, rate, time); // Returns 276.2830362313579
const presentValue = Financial.presentValue(futureValue, rate, time); // Returns 1000
```
