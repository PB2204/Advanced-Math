const Matrix = require('../src/linear-algebra/matrix');
const Vector = require('../src/linear-algebra/vector');

describe('Matrix', () => {
    test('adds two matrices', () => {
        const matrixA = new Matrix(2, 2);
        const matrixB = new Matrix(2, 2);

        matrixA.data = [[1, 2], [3, 4]];
        matrixB.data = [[5, 6], [7, 8]];

        const result = Matrix.add(matrixA, matrixB);
        expect(result.data).toEqual([[6, 8], [10, 12]]);
    });

    test('subtracts two matrices', () => {
        const matrixA = new Matrix(2, 2);
        const matrixB = new Matrix(2, 2);

        matrixA.data = [[1, 2], [3, 4]];
        matrixB.data = [[5, 6], [7, 8]];

        const result = Matrix.subtract(matrixA, matrixB);
        expect(result.data).toEqual([[-4, -4], [-4, -4]]);
    });

    test('multiplies two matrices', () => {
        const matrixA = new Matrix(2, 2);
        const matrixB = new Matrix(2, 2);

        matrixA.data = [[1, 2], [3, 4]];
        matrixB.data = [[5, 6], [7, 8]];

        const result = Matrix.multiply(matrixA, matrixB);
        expect(result.data).toEqual([[19, 22], [43, 50]]);
    });

    test('throws an error for invalid matrix dimensions in addition', () => {
        const matrixA = new Matrix(2, 3);
        const matrixB = new Matrix(2, 2);

        expect(() => {
            Matrix.add(matrixA, matrixB);
        }).toThrow('Matrix dimensions must match for addition.');
    });

    test('throws an error for invalid matrix dimensions in multiplication', () => {
        const matrixA = new Matrix(2, 3);
        const matrixB = new Matrix(4, 2);

        expect(() => {
            Matrix.multiply(matrixA, matrixB);
        }).toThrow('Number of columns in the first matrix must match the number of rows in the second matrix for multiplication.');
    });
});

describe('Vector', () => {
  test('adds two vectors', () => {
    const vectorA = new Vector([1, 2, 3]);
    const vectorB = new Vector([4, 5, 6]);

    const result = vectorA.add(vectorB);
    expect(result.components).toEqual([5, 7, 9]);
  });

  test('subtracts two vectors', () => {
    const vectorA = new Vector([1, 2, 3]);
    const vectorB = new Vector([4, 5, 6]);

    const result = vectorA.subtract(vectorB);
    expect(result.components).toEqual([-3, -3, -3]);
  });

  test('calculates the dot product of two vectors', () => {
    const vectorA = new Vector([1, 2, 3]);
    const vectorB = new Vector([4, 5, 6]);

    const result = vectorA.dot(vectorB);
    expect(result).toBe(32);
  });

  test('calculates the cross product of two 3D vectors', () => {
    const vectorA = new Vector([1, 2, 3]);
    const vectorB = new Vector([4, 5, 6]);

    const result = vectorA.cross(vectorB);
    expect(result.components).toEqual([-3, 6, -3]);
  });

  test('throws an error for invalid vector dimensions in addition', () => {
    const vectorA = new Vector([1, 2, 3]);
    const vectorB = new Vector([4, 5]);

    expect(() => {
      vectorA.add(vectorB);
    }).toThrow('Vector dimensions must match for addition.');
  });

  // Add more test cases as needed
});