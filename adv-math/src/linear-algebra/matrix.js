class Matrix {
    data;
    rows;
    cols;

    constructor(list_of_lists) {
        this.data = list_of_lists;
        this.rows = list_of_lists.length;
        this.cols = list_of_lists[0].length;
        for (let i in this.rows) {
            let cur_col = list_of_lists[i]
            if (this.cols !== cur_col.length) {
                throw new Error('Matrix is invalid, not enough elements')
            }
        }
    }

    /**
     * Method to perform elementwise addition
     * @param {Matrix} matrixB
     * @return {Matrix} elementwise addition with matrixB
     */
    add(matrixB) {
        if (this.rows !== matrixB.rows || this.cols !== matrixB.cols) {
            throw new Error('Matrix dimensions must match for addition.');
        }
        let result = []
        for (let i = 0; i < matrixB.rows; i++) {
            let new_arr = []
            for (let j = 0; j < matrixB.cols; j++) {
                new_arr.push(this.data[i][j] + matrixB.data[i][j])
            }
            result.push(new_arr)
        }

        return new Matrix(result);
    }

    /** Method to perform matrix subtraction
     *
     * @param matrixB
     * @returns {Matrix} elementwise subtraction with matrixB
     */
    subtract(matrixB) {
        if (this.rows !== matrixB.rows || this.cols !== matrixB.cols) {
            throw new Error('Matrix dimensions must match for subtraction.');
        }

        let result = []
        for (let i = 0; i < matrixB.rows; i++) {
            let new_arr = []
            for (let j = 0; j < matrixB.cols; j++) {
                new_arr.push(this.data[i][j] - matrixB.data[i][j])
            }
            result.push(new_arr)
        }

        return new Matrix(result);
    }

    /**
     * Method to perform matrix multiplication
     * @param {Matrix} matrixB
     * @return {Matrix} Matrix multiplication with matrixB
     */
    multiply(matrixB) {
        if (this.cols !== matrixB.rows) {
            throw new Error('Number of columns in the first matrix must match the number of rows in the second matrix for multiplication.');
        }

        let result = []
        for (let i = 0; i < matrixB.rows; i++) {
            let new_arr = []
            for (let j = 0; j < matrixB.cols; j++) {
                let sum = 0;
                for (let k = 0; k < this.cols; k++) {
                    sum += this.data[i][k] * matrixB.data[k][j];
                }
                new_arr.push(sum);
            }
            result.push(new_arr)
        }

        return new Matrix(result);
    }

    /**
     * Method to calculate the trace of a square matrix
     * @returns {number} the trace
     */
    trace() {
        if (this.rows !== this.cols) {
            throw new Error('Matrix is not square, Trace does not exist.')
        }
        let result = 0;
        for (let i = 0; i < this.rows; i++) {
            result += this.data[i][i]
        }
        return result
    }

}

module.exports = Matrix;
