# Parser Module

The `Parser` module provides a method for evaluating mathematical expressions in JavaScript.

## Usage

To use the `Parser` module, import it and use its `evaluate` method in your JavaScript code.

```javascript
const Parser = require('adv-math').Parser;

// Example usage
const expression = "2 + 3 * 4";
const result = Parser.evaluate(expression); // Evaluate the expression
```

## Methods

### `evaluate(expression)`

Evaluates a mathematical expression.

- `expression` (string): The mathematical expression to evaluate.
- Returns: The result of evaluating the expression.

If the expression is invalid or cannot be evaluated, an error is thrown with the message "Invalid expression."

## Examples

```javascript
const Parser = require('adv-math').Parser;

// Example expression: 2 + 3 * 4
const expression = "2 + 3 * 4";
const result = Parser.evaluate(expression); // Returns 14

// Example expression with an error: "2 + 3 *"
try {
    const invalidExpression = "2 + 3 *";
    const invalidResult = Parser.evaluate(invalidExpression); // Throws an error
} catch (error) {
    console.error(error.message); // Outputs "Invalid expression."
}
```
