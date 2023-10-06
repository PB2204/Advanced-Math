// adv-math/src/expression-evaluator/expression-evaluator.js

class ExpressionEvaluator {
    static evaluateExpression(expression) {
        function isOperator(char) {
            return ['+', '-', '*', '/'].includes(char);
        }

        function applyOperator(operators, values) {
            const operator = operators.pop();
            const right = values.pop();
            const left = values.pop();

            switch (operator) {
                case '+':
                    values.push(left + right);
                    break;
                case '-':
                    values.push(left - right);
                    break;
                case '*':
                    values.push(left * right);
                    break;
                case '/':
                    if (right === 0) {
                        throw new Error('Division by zero');
                    }
                    values.push(left / right);
                    break;
                default:
                    throw new Error('Invalid operator');
            }
        }

        const operators = [];
        const values = [];

        const precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
        };

        let i = 0;
        while (i < expression.length) {
            const char = expression[i];

            console.log(`Character: ${char}`);
            console.log(`Operators: ${operators.join(', ')}`);
            console.log(`Values: ${values.join(', ')}`);

            if (char === '(') {
                operators.push(char);
            } else if (char === ')') {
                while (operators.length > 0 && operators[operators.length - 1] !== '(') {
                    applyOperator(operators, values);
                }
                if (operators.length === 0 || operators.pop() !== '(') {
                    console.error(`Mismatched parentheses in expression: ${expression}`);
                    throw new Error('Mismatched parentheses');
                }
            } else if (isOperator(char)) {
                while (
                    operators.length > 0 &&
                    isOperator(operators[operators.length - 1]) &&
                    precedence[operators[operators.length - 1]] >= precedence[char]
                ) {
                    applyOperator(operators, values);
                }
                operators.push(char);
            } else if (!isNaN(char) || char === '.') {
                let num = '';
                while (i < expression.length && (!isNaN(expression[i]) || expression[i] === '.')) {
                    num += expression[i];
                    i++;
                }
                i--; // Move back one step since the loop will increment it again
                values.push(parseFloat(num));
            } else {
                console.error(`Invalid character '${char}' in expression: ${expression}`);
                throw new Error('Invalid character: ' + char);
            }

            i++; // Move to the next character
        }

        console.log(`Final Operators: ${operators.join(', ')}`);
        console.log(`Final Values: ${values.join(', ')}`);

        while (operators.length > 0) {
            applyOperator(operators, values);
        }

        if (values.length !== 1 || operators.length !== 0) {
            console.error(`Invalid expression: ${expression}`);
            throw new Error('Invalid expression');
        }

        return values[0];
    }
}

module.exports = ExpressionEvaluator;
