# Matrix Module

The `Matrix` module provides methods for performing matrix operations, including addition, subtraction, and multiplication of matrices.

## Usage

To use the `Matrix` module, import it and create matrix instances to perform operations.

```javascript
const Matrix = require('adv-math').Matrix;

// Create matrices
const matrixA = new Matrix(2, 3);
matrixA.data = [[1, 2, 3], [4, 5, 6]];

const matrixB = new Matrix(2, 3);
matrixB.data = [[7, 8, 9], [10, 11, 12]];

// Perform matrix operations
const resultAddition = Matrix.add(matrixA, matrixB);
const resultSubtraction = Matrix.subtract(matrixA, matrixB);
const resultMultiplication = Matrix.multiply(matrixA, matrixB);
```

## Methods

### `add(matrixA, matrixB)`

Performs matrix addition between two matrices, `matrixA` and `matrixB`.

- `matrixA` (Matrix): The first matrix for addition.
- `matrixB` (Matrix): The second matrix for addition.
- Returns: A new matrix representing the result of the addition.

### `subtract(matrixA, matrixB)`

Performs matrix subtraction between two matrices, `matrixA` and `matrixB`.

- `matrixA` (Matrix): The matrix from which `matrixB` will be subtracted.
- `matrixB` (Matrix): The matrix to be subtracted from `matrixA`.
- Returns: A new matrix representing the result of the subtraction.

### `multiply(matrixA, matrixB)`

Performs matrix multiplication between two matrices, `matrixA` and `matrixB`.

- `matrixA` (Matrix): The first matrix for multiplication.
- `matrixB` (Matrix): The second matrix for multiplication.
- Returns: A new matrix representing the result of the multiplication.

## Examples

```javascript
const Matrix = require('adv-math').Matrix;

// Create matrices
const matrixA = new Matrix(2, 3);
matrixA.data = [[1, 2, 3], [4, 5, 6]];

const matrixB = new Matrix(3, 2);
matrixB.data = [[7, 8], [9, 10], [11, 12]];

// Perform matrix operations
const resultAddition = Matrix.add(matrixA, matrixB);
const resultSubtraction = Matrix.subtract(matrixA, matrixB);
const resultMultiplication = Matrix.multiply(matrixA, matrixB);
```
