class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];

        for (let i = 0; i < rows; i++) {
            this.data[i] = [];
            for (let j = 0; j < cols; j++) {
                this.data[i][j] = 0;
            }
        }
    }

    // Method to perform matrix addition
    static add(matrixA, matrixB) {
        if (matrixA.rows !== matrixB.rows || matrixA.cols !== matrixB.cols) {
            throw new Error('Matrix dimensions must match for addition.');
        }

        const result = new Matrix(matrixA.rows, matrixA.cols);
        for (let i = 0; i < result.rows; i++) {
            for (let j = 0; j < result.cols; j++) {
                result.data[i][j] = matrixA.data[i][j] + matrixB.data[i][j];
            }
        }

        return result;
    }

    // Method to perform matrix subtraction
    static subtract(matrixA, matrixB) {
        if (matrixA.rows !== matrixB.rows || matrixA.cols !== matrixB.cols) {
            throw new Error('Matrix dimensions must match for subtraction.');
        }

        const result = new Matrix(matrixA.rows, matrixA.cols);
        for (let i = 0; i < result.rows; i++) {
            for (let j = 0; j < result.cols; j++) {
                result.data[i][j] = matrixA.data[i][j] - matrixB.data[i][j];
            }
        }

        return result;
    }

    // Method to perform matrix multiplication
    static multiply(matrixA, matrixB) {
        if (matrixA.cols !== matrixB.rows) {
            throw new Error('Number of columns in the first matrix must match the number of rows in the second matrix for multiplication.');
        }

        const result = new Matrix(matrixA.rows, matrixB.cols);
        for (let i = 0; i < result.rows; i++) {
            for (let j = 0; j < result.cols; j++) {
                let sum = 0;
                for (let k = 0; k < matrixA.cols; k++) {
                    sum += matrixA.data[i][k] * matrixB.data[k][j];
                }
                result.data[i][j] = sum;
            }
        }

        return result;
    }
}

module.exports = Matrix;
