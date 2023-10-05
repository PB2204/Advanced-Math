class Equations {
    // Method to solve a linear equation of the form: ax + b = 0
    static solveLinear(a, b) {
        if (a === 0) {
            throw new Error('The coefficient of x cannot be zero.');
        }
        return -b / a;
    }

    // Method to solve a quadratic equation of the form: ax^2 + bx + c = 0
    static solveQuadratic(a, b, c) {
        const discriminant = b * b - 4 * a * c;
        if (discriminant < 0) {
            throw new Error('The equation has no real roots.');
        }
        const sqrtDiscriminant = Math.sqrt(discriminant);
        const x1 = (-b + sqrtDiscriminant) / (2 * a);
        const x2 = (-b - sqrtDiscriminant) / (2 * a);
        return [x1, x2];
    }

    // Method to solve a cubic equation of the form: ax^3 + bx^2 + cx + d = 0
    static solveCubic(a, b, c, d) {
        // Implementation of Cardano's method to solve cubic equations
        if (a === 0) {
            throw new Error('The coefficient of x^3 cannot be zero.');
        }

        const delta0 = b * b - 3 * a * c;
        const delta1 = 2 * b * b * b - 9 * a * b * c + 27 * a * a * d;
        const C = Math.cbrt((delta1 + Math.sqrt(delta1 * delta1 - 4 * delta0 * delta0 * delta0)) / 2);
        const x1 = -(1 / (3 * a)) * (b + C + delta0 / C);
        return [x1];
    }

    // Method to solve an exponential equation of the form: a^x = b
    static solveExponential(a, b) {
        if (a <= 0 || a === 1 || b <= 0) {
            throw new Error('Values of a and b must be positive, and a cannot be equal to 1.');
        }
        return Math.log(b) / Math.log(a);
    }

    // Method to solve a logarithmic equation of the form: log_a(bx + c) = d
    static solveLogarithmic(a, b, c, d) {
        if (a <= 0 || a === 1 || b <= 0 || c < 0) {
            throw new Error('Values of a, b, and c must be positive, and a cannot be equal to 1.');
        }
        const logValue = d / Math.log(a);
        return (Math.pow(a, logValue) - c) / b;
    }

    // Method to solve a system of linear equations
    static solveLinearSystem(a1, b1, c1, a2, b2, c2) {
        const determinant = a1 * b2 - a2 * b1;
        if (determinant === 0) {
            throw new Error('The system of equations has no unique solution.');
        }
        const x = (c1 * b2 - c2 * b1) / determinant;
        const y = (a1 * c2 - a2 * c1) / determinant;
        return [x, y];
    }
}

module.exports = Equations;
