class Calculus {
    // Method to calculate the derivative of a function at a given point using numerical differentiation (finite difference method)
    static derivative(func, point, h = 0.001) {
        const f_x = func(point);
        const f_x_plus_h = func(point + h);

        return (f_x_plus_h - f_x) / h;
    }

    // Method to calculate the definite integral of a function between two points using numerical integration (trapezoidal rule)
    static integral(func, a, b, n = 1000) {
        const h = (b - a) / n;
        let sum = (func(a) + func(b)) / 2;

        for (let i = 1; i < n; i++) {
            const x_i = a + i * h;
            sum += func(x_i);
        }

        return sum * h;
    }
}

module.exports = Calculus;
