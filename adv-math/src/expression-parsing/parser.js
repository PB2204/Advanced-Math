class Parser {
    // Method to evaluate a mathematical expression
    static evaluate(expression) {
        try {
            // Use the built-in JavaScript eval function to evaluate the expression
            return eval(expression);
        } catch (error) {
            throw new Error('Invalid expression.');
        }
    }
}

module.exports = Parser;
