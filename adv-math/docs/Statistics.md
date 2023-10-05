# Statistics Module

The `Statistics` module provides methods for calculating statistical measures of arrays of numbers, including mean (average), median, and standard deviation.

## Usage

To use the `Statistics` module, import it and call the methods to calculate statistical measures of arrays of numbers.

```javascript
const Statistics = require('adv-math').Statistics;

const numbers = [1, 2, 3, 4, 5];

// Calculate mean
const meanValue = Statistics.mean(numbers);

// Calculate median
const medianValue = Statistics.median(numbers);

// Calculate standard deviation
const stdDeviation = Statistics.standardDeviation(numbers);
```

## Methods

### `mean(numbers)`

Calculates the mean (average) of an array of numbers.

- `numbers` (Array): An array of numeric values.
- Returns: The mean (average) value of the array.

### `median(numbers)`

Calculates the median of an array of numbers.

- `numbers` (Array): An array of numeric values.
- Returns: The median value of the array.

### `standardDeviation(numbers)`

Calculates the standard deviation of an array of numbers.

- `numbers` (Array): An array of numeric values.
- Returns: The standard deviation of the array.

## Examples

```javascript
const Statistics = require('adv-math').Statistics;

const numbers = [1, 2, 3, 4, 5];

// Calculate mean (average)
const meanValue = Statistics.mean(numbers); // Result: 3

// Calculate median
const medianValue = Statistics.median(numbers); // Result: 3

// Calculate standard deviation
const stdDeviation = Statistics.standardDeviation(numbers);
```
