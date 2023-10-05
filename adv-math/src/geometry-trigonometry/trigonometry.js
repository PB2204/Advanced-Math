class Trigonometry {
    // Method to calculate the sine of an angle in degrees
    static sine(degrees) {
        const radians = (degrees * Math.PI) / 180;
        return Math.sin(radians);
    }

    // Method to calculate the cosine of an angle in degrees
    static cosine(degrees) {
        const radians = (degrees * Math.PI) / 180;
        return Math.cos(radians);
    }

    // Method to calculate the tangent of an angle in degrees
    static tangent(degrees) {
        const radians = (degrees * Math.PI) / 180;
        return Math.tan(radians);
    }

    // Method to calculate the cosecant of an angle in degrees
    static cosecant(degrees) {
        return 1 / this.sine(degrees);
    }

    // Method to calculate the secant of an angle in degrees
    static secant(degrees) {
        return 1 / this.cosine(degrees);
    }

    // Method to calculate the cotangent of an angle in degrees
    static cotangent(degrees) {
        return 1 / this.tangent(degrees);
    }

    // Method to calculate the arcsine in degrees
    static arcsine(value) {
        if (value < -1 || value > 1) {
            throw new Error('Invalid input for arcsine.');
        }
        const radians = Math.asin(value);
        return (radians * 180) / Math.PI;
    }

    // Method to calculate the arccosine in degrees
    static arccosine(value) {
        if (value < -1 || value > 1) {
            throw new Error('Invalid input for arccosine.');
        }
        const radians = Math.acos(value);
        return (radians * 180) / Math.PI;
    }

    // Method to calculate the arctangent in degrees
    static arctangent(value) {
        const radians = Math.atan(value);
        return (radians * 180) / Math.PI;
    }

    // Method to calculate the arccosecant in degrees
    static arccosecant(value) {
        if (value === 0) {
            throw new Error('Invalid input for arccosecant.');
        }
        return this.arcsine(1 / value);
    }

    // Method to calculate the arcsecant in degrees
    static arcsecant(value) {
        if (value === 0) {
            throw new Error('Invalid input for arcsecant.');
        }
        return this.arccosine(1 / value);
    }

    // Method to calculate the arccotangent in degrees
    static arccotangent(value) {
        if (value === 0) {
            throw new Error('Invalid input for arccotangent.');
        }
        return this.arctangent(1 / value);
    }
}

module.exports = Trigonometry;
