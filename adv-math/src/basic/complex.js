class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    // Method to add two complex numbers
    add(complex) {
        return new ComplexNumber(this.real + complex.real, this.imaginary + complex.imaginary);
    }

    // Method to subtract two complex numbers
    subtract(complex) {
        return new ComplexNumber(this.real - complex.real, this.imaginary - complex.imaginary);
    }

    // Method to multiply two complex numbers
    multiply(complex) {
        const realPart = this.real * complex.real - this.imaginary * complex.imaginary;
        const imaginaryPart = this.real * complex.imaginary + this.imaginary * complex.real;
        return new ComplexNumber(realPart, imaginaryPart);
    }

    // Method to get the magnitude (absolute value) of a complex number
    magnitude() {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    }
}

module.exports = ComplexNumber;
