const Matrix = require('../src/linear-algebra/matrix');
const Vector = require('../src/linear-algebra/vector');


describe('Matrix', () => {
    // Implicit assumption that matrix creation does not need to be tested.
    let matrixA;
    let matrixB;
    beforeAll(() => {
            matrixA = new Matrix([[1, 2], [3, 4]]);
            matrixB = new Matrix([[5, 6], [7, 8]]);
        }
    );

    test('adds two matrices', () => {
        const result = matrixA.add(matrixB);
        expect(result.data).toEqual([[6, 8], [10, 12]]);
    });

    test('subtracts two matrices', () => {
        const result = matrixA.subtract(matrixB);
        expect(result.data).toEqual([[-4, -4], [-4, -4]]);
    });

    test('multiplies two matrices', () => {
        const result = matrixA.multiply(matrixB);
        expect(result.data).toEqual([[19, 22], [43, 50]]);
    });

    test('computes trace of a matrix', () => {
        let result = matrixA.trace()
        expect(result).toEqual(5)
        result = matrixB.trace()
        expect(result).toEqual(13)
    });
    test('throws an error for invalid matrix dimensions in addition', () => {
        const matrixA = new Matrix([[1,2,3],[1,2,3]]);
        const matrixB = new Matrix([[1,2],[1,2]]);

        expect(() => {
            matrixA.add(matrixB);
        }).toThrow('Matrix dimensions must match for addition.');
    });

    test('throws an error for invalid matrix dimensions in multiplication', () => {
        const matrixA = new Matrix([1,2,3],[1,2,3]);
        const matrixB = new Matrix([[1,2],[1,2],[1,2],[1,2]]);

        expect(() => {
            matrixA.multiply(matrixB);
        }).toThrow('Number of columns in the first matrix must match the number of rows in the second matrix for multiplication.');
    });
});

describe('Vector', () => {
    const vectorA = new Vector([1, 2, 3]);
    const vectorB = new Vector([4, 5, 6]);
    test('adds two vectors', () => {
        const result = vectorA.add(vectorB);
        expect(result.components).toEqual([5, 7, 9]);
    });

    test('subtracts two vectors', () => {
        const result = vectorA.subtract(vectorB);
        expect(result.components).toEqual([-3, -3, -3]);
    });

    test('calculates the dot product of two vectors', () => {
        const result = vectorA.dot(vectorB);
        expect(result).toBe(32);
    });

    test('calculates the cross product of two 3D vectors', () => {
        const result = vectorA.cross(vectorB);
        expect(result.components).toEqual([-3, 6, -3]);
    });

    test('throws an error for invalid vector dimensions in addition', () => {
        const vectorB = new Vector([4, 5]);

        expect(() => {
            vectorA.add(vectorB);
        }).toThrow('Vector dimensions must match for addition.');
    });

    // Add more test cases as needed
});