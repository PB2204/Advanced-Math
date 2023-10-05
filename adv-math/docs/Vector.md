# Vector Module

The `Vector` module provides methods for performing vector operations, including addition, subtraction, dot product, and cross product.

## Usage

To use the `Vector` module, import it and create vector instances to perform operations.

```javascript
const Vector = require('adv-math').Vector;

// Create vectors
const vectorA = new Vector([1, 2, 3]);
const vectorB = new Vector([4, 5, 6]);

// Perform vector operations
const resultAddition = vectorA.add(vectorB);
const resultSubtraction = vectorA.subtract(vectorB);
const resultDotProduct = vectorA.dot(vectorB);
const resultCrossProduct = vectorA.cross(vectorB);
```

## Methods

### `add(vector)`

Performs vector addition between two vectors.

- `vector` (Vector): The vector to be added to the current vector.
- Returns: A new vector representing the result of the addition.

### `subtract(vector)`

Performs vector subtraction between two vectors.

- `vector` (Vector): The vector to be subtracted from the current vector.
- Returns: A new vector representing the result of the subtraction.

### `dot(vector)`

Calculates the dot product (inner product) of two vectors.

- `vector` (Vector): The vector with which the dot product will be calculated.
- Returns: A scalar (number) representing the dot product of the two vectors.

### `cross(vector)`

Calculates the cross product of two 3D vectors.

- `vector` (Vector): The 3D vector with which the cross product will be calculated.
- Returns: A new 3D vector representing the cross product of the two vectors.

## Examples

```javascript
const Vector = require('adv-math').Vector;

// Create vectors
const vectorA = new Vector([1, 2, 3]);
const vectorB = new Vector([4, 5, 6]);

// Perform vector operations
const resultAddition = vectorA.add(vectorB);
const resultSubtraction = vectorA.subtract(vectorB);
const resultDotProduct = vectorA.dot(vectorB);
const resultCrossProduct = vectorA.cross(vectorB);
```
