const Calculus = require('../src/calculus/calculus');

describe('Calculus', () => {
    test('calculates the derivative of a function at a point', () => {
        // Define a sample function (e.g., f(x) = x^2)
        const func = (x) => x * x;

        // Calculate the derivative at x = 2
        const derivative = Calculus.derivative(func, 2);
        expect(derivative).toBeCloseTo(4, 2);
    });

    test('calculates the definite integral of a function between two points', () => {
        // Define a sample function (e.g., f(x) = x^2)
        const func = (x) => x * x;

        // Calculate the integral of the function from 1 to 3
        const integral = Calculus.integral(func, 1, 3);
        expect(integral).toBeCloseTo(8.67, 2);
    });

    // Add more test cases as needed
});
