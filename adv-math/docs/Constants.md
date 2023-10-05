# Mathematical Constants

The `Constants` module provides mathematical constants for various mathematical calculations.

## Usage

To use the `Constants` module, import it and access the constants as static properties.

```javascript
const Constants = require('adv-math').Constants;

// Access mathematical constants
const pi = Constants.PI;
const e = Constants.E;
const goldenRatio = Constants.GOLDEN_RATIO;
const squareRoot2 = Constants.SQUARE_ROOT_2;
const squareRoot3 = Constants.SQUARE_ROOT_3;
```

## Supported Constants

- `PI`: The mathematical constant π (pi).
- `E`: The mathematical constant e (Euler's number).
- `GOLDEN_RATIO`: The golden ratio (φ).
- `SQUARE_ROOT_2`: The square root of 2 (√2).
- `SQUARE_ROOT_3`: The square root of 3 (√3).
- (You can add more constants as needed)

## Examples

```javascript
const Constants = require('adv-math').Constants;

// Access mathematical constants
const pi = Constants.PI;             // Result: 3.141592653589793
const e = Constants.E;               // Result: 2.718281828459045
const goldenRatio = Constants.GOLDEN_RATIO; // Result: 1.618033988749895
const squareRoot2 = Constants.SQUARE_ROOT_2; // Result: 1.4142135623730951
const squareRoot3 = Constants.SQUARE_ROOT_3; // Result: 1.7320508075688772
```
