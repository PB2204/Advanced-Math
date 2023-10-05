const Statistics = require('../src/statistics/statistics');

describe('Statistics', () => {
    test('calculates the mean of an array', () => {
        const numbers = [1, 2, 3, 4, 5];
        expect(Statistics.mean(numbers)).toBe(3);
    });

    test('calculates the median of an odd-length array', () => {
        const numbers = [4, 1, 3];
        expect(Statistics.median(numbers)).toBe(3);
    });

    test('calculates the median of an even-length array', () => {
        const numbers = [4, 1, 3, 2];
        expect(Statistics.median(numbers)).toBe(2.5);
    });

    test('calculates the standard deviation of an array', () => {
        const numbers = [2, 4, 4, 4, 5, 5, 7, 9];
        expect(Statistics.standardDeviation(numbers)).toBeCloseTo(2.138, 3);
    });

    test('throws an error for an empty array in mean calculation', () => {
        const numbers = [];
        expect(() => {
            Statistics.mean(numbers);
        }).toThrow('Array must not be empty.');
    });

    // Add more test cases as needed
});