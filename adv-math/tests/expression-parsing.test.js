const Parser = require('../src/expression-parsing/parser');

describe('Parser', () => {
    test('evaluates a simple mathematical expression', () => {
        expect(Parser.evaluate('2 + 3')).toBe(5);
    });

    test('evaluates a complex mathematical expression', () => {
        expect(Parser.evaluate('2 * (3 + 4)')).toBe(14);
    });

    test('throws an error for an invalid expression', () => {
        expect(() => {
            Parser.evaluate('2 +');
        }).toThrow('Invalid expression.');
    });

    // Add more test cases as needed
});
