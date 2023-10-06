const ExpressionEvaluator = require('../src/expression-evaluator/expression-evaluator');

describe('ExpressionEvaluator', () => {
    it('should evaluate a simple expression', () => {
        const expression = '4 + 6';
        const result = ExpressionEvaluator.evaluateExpression(expression);
        expect(result).toBe(10);
    });

    it('should handle subtraction', () => {
        const expression = '10 - 3';
        const result = ExpressionEvaluator.evaluateExpression(expression);
        expect(result).toBe(7);
    });

    it('should handle multiplication', () => {
        const expression = '5 * 8';
        const result = ExpressionEvaluator.evaluateExpression(expression);
        expect(result).toBe(40);
    });

    it('should handle division', () => {
        const expression = '12 / 4';
        const result = ExpressionEvaluator.evaluateExpression(expression);
        expect(result).toBe(3);
    });

    // it('should handle parentheses', () => {
    //     const expression = '4 * (6 + 2)'; // Valid expression with parentheses
    //     expect(ExpressionEvaluator.evaluateExpression(expression)).toEqual(32);
    // });

    // it('should handle complex expressions', () => {
    //     const expression = '4 * (6 + 2) / 2'; // Valid complex expression
    //     expect(ExpressionEvaluator.evaluateExpression(expression)).toEqual(16);
    // });

    // it('should throw an error for invalid expressions', () => {
    //     const expression = '4 + * 6'; // Invalid expression
    //     expect(() => ExpressionEvaluator.evaluateExpression(expression)).toThrowError('Invalid operator');
    // });

    it('should handle floating-point numbers', () => {
        const expression = '1.5 + 2.3';
        const result = ExpressionEvaluator.evaluateExpression(expression);
        expect(result).toBe(3.8);
    });

    it('should throw an error for division by zero', () => {
        const expression = '5 / 0'; // Division by zero
        expect(() => ExpressionEvaluator.evaluateExpression(expression)).toThrowError('Division by zero');
    });

    it('should throw an error for mismatched parentheses', () => {
        const expression = '4 * (6 + 2'; // Mismatched parentheses
        expect(() => ExpressionEvaluator.evaluateExpression(expression)).toThrowError('Invalid operator');
    });

    it('should throw an error for invalid characters', () => {
        const expression = '4 # 6'; // Invalid character #
        expect(() => ExpressionEvaluator.evaluateExpression(expression)).toThrowError('Invalid character: #');
    });
});
