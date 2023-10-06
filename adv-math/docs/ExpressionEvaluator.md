# ExpressionEvaluator Class

The `ExpressionEvaluator` class is a part of the `adv-math` package and is designed to evaluate mathematical expressions in string format. It can handle basic arithmetic operations, parentheses, and operator precedence.

## Usage

To use the `ExpressionEvaluator` class, follow these steps:

1. Import the `ExpressionEvaluator` class into your JavaScript file.

   ```javascript
   const ExpressionEvaluator = require('adv-math').ExpressionEvaluator;
   ```

2. Call the `evaluateExpression` method of the `ExpressionEvaluator` class with a mathematical expression as a string.

   ```javascript
   const expression = '3 + 5 * (2 - 4)';
   const result = ExpressionEvaluator.evaluateExpression(expression);
   console.log('Result:', result);
   ```

   This will evaluate the expression and return the result.

## Methods

### `evaluateExpression(expression: string): number`

Evaluates the mathematical expression provided as a string and returns the result as a number.

- `expression` (string): The mathematical expression to be evaluated.

## Examples

### Example 1: Basic Arithmetic

```javascript
const expression = '2 + 3 * 4 - 1';
const result = ExpressionEvaluator.evaluateExpression(expression);
console.log('Result:', result); // Output: 13
```

### Example 2: Using Parentheses

```javascript
const expression = '(2 + 3) * (4 - 1)';
const result = ExpressionEvaluator.evaluateExpression(expression);
console.log('Result:', result); // Output: 15
```

### Example 3: Handling Operator Precedence

```javascript
const expression = '3 + 5 * (2 - 4)';
const result = ExpressionEvaluator.evaluateExpression(expression);
console.log('Result:', result); // Output: -7
```

### Example 4: Error Handling (Division by Zero)

```javascript
const expression = '5 / 0';
try {
  const result = ExpressionEvaluator.evaluateExpression(expression);
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error.message); // Output: Error: Division by zero
}
```

## Notes

- The `ExpressionEvaluator` class supports addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`) operations.
- It follows operator precedence, with `*` and `/` having higher precedence than `+` and `-`.
- Use parentheses to override operator precedence as needed.

## License

This class is part of the `adv-math` package and is subject to the package's [license](../LICENSE).