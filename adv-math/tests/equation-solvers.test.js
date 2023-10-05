const Equations = require('../src/equation-solvers/equations');

describe('Equations', () => {
    test('solves a linear equation', () => {
        expect(Equations.solveLinear(2, -3)).toBe(1.5);
    });

    test('solves a quadratic equation with real roots', () => {
        const solutions = Equations.solveQuadratic(1, -3, 2);
        expect(solutions).toContainEqual(2);
        expect(solutions).toContainEqual(1);
    });

    test('throws an error for a linear equation with zero coefficient', () => {
        expect(() => {
            Equations.solveLinear(0, -3);
        }).toThrow('The coefficient of x cannot be zero.');
    });

    test('throws an error for a quadratic equation with no real roots', () => {
        expect(() => {
            Equations.solveQuadratic(1, 2, 5);
        }).toThrow('The equation has no real roots.');
    });

    // Add more test cases as needed
});
