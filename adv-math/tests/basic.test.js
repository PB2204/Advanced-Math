const BasicMath = require('../src/basic/arithmetic');
const ComplexNumber = require('../src/basic/complex');

describe('BasicMath', () => {
    test('adds two numbers', () => {
        expect(BasicMath.add(2, 3)).toBe(5);
    });

    test('subtracts two numbers', () => {
        expect(BasicMath.subtract(5, 2)).toBe(3);
    });

    test('multiplies two numbers', () => {
        expect(BasicMath.multiply(2, 3)).toBe(6);
    });

    test('divides two numbers', () => {
        expect(BasicMath.divide(6, 3)).toBe(2);
    });

    test('throws an error when dividing by zero', () => {
        expect(() => {
            BasicMath.divide(5, 0);
        }).toThrow('Division by zero is not allowed.');
    });
});

describe('ComplexNumber', () => {
    test('adds two complex numbers', () => {
        const complex1 = new ComplexNumber(2, 3);
        const complex2 = new ComplexNumber(1, 2);
        const result = complex1.add(complex2);
        expect(result.real).toBe(3);
        expect(result.imaginary).toBe(5);
    });

    test('multiplies two complex numbers', () => {
        const complex1 = new ComplexNumber(2, 3);
        const complex2 = new ComplexNumber(1, 2);
        const result = complex1.multiply(complex2);
        expect(result.real).toBe(-4);
        expect(result.imaginary).toBe(7);
    });

    test('calculates the magnitude of a complex number', () => {
        const complex = new ComplexNumber(3, 4);
        expect(complex.magnitude()).toBe(5);
    });
});