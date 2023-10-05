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
}

module.exports = Equations;
