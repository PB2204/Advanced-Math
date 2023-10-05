# Random Module

The `Random` module provides methods for generating random numbers, including random integers and random floats within specified ranges.

## Usage

To use the `Random` module, import it and call the methods to generate random numbers.

```javascript
const Random = require('adv-math').Random;

// Generate random integer
const randomInt = Random.generateRandomInt(1, 10);

// Generate random float
const randomFloat = Random.generateRandomFloat(0, 1);
```

## Methods

### `generateRandomInt(min, max)`

Generates a random integer between `min` (inclusive) and `max` (exclusive).

- `min` (Number): The minimum value (inclusive) of the random integer range.
- `max` (Number): The maximum value (exclusive) of the random integer range.
- Returns: A random integer within the specified range.

### `generateRandomFloat(min, max)`

Generates a random floating-point number (float) between `min` (inclusive) and `max` (exclusive).

- `min` (Number): The minimum value (inclusive) of the random float range.
- `max` (Number): The maximum value (exclusive) of the random float range.
- Returns: A random float within the specified range.

## Examples

```javascript
const Random = require('adv-math').Random;

// Generate random integer between 1 and 10 (inclusive of 1, exclusive of 10)
const randomInt = Random.generateRandomInt(1, 10);

// Generate random float between 0 and 1 (inclusive of 0, exclusive of 1)
const randomFloat = Random.generateRandomFloat(0, 1);
```
