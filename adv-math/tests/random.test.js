const Random = require('../src/random/random');

describe('Random', () => {
    test('generates a random integer within a specified range', () => {
        const randomInt = Random.generateRandomInt(1, 10);
        expect(randomInt).toBeGreaterThanOrEqual(1);
        expect(randomInt).toBeLessThan(10);
    });

    test('generates a random float within a specified range', () => {
        const randomFloat = Random.generateRandomFloat(0, 1);
        expect(randomFloat).toBeGreaterThanOrEqual(0);
        expect(randomFloat).toBeLessThan(1);
    });

    test('throws an error for an invalid integer range', () => {
        expect(() => {
            Random.generateRandomInt(10, 1);
        }).toThrow('Invalid range for generating random integer.');
    });

    test('throws an error for an invalid float range', () => {
        expect(() => {
            Random.generateRandomFloat(1, 1);
        }).toThrow('Invalid range for generating random float.');
    });

    // Add more test cases as needed
});
