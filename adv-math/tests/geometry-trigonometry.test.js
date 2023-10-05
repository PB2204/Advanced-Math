const Geometry = require('../src/geometry-trigonometry/geometry');
const Trigonometry = require('../src/geometry-trigonometry/trigonometry');

describe('Geometry', () => {
    test('calculates the area of a rectangle', () => {
        expect(Geometry.rectangleArea(4, 5)).toBe(20);
    });

    test('calculates the perimeter of a rectangle', () => {
        expect(Geometry.rectanglePerimeter(4, 5)).toBe(18);
    });

    test('calculates the area of a circle', () => {
        expect(Geometry.circleArea(3)).toBeCloseTo(28.274, 3);
    });

    test('calculates the circumference of a circle', () => {
        expect(Geometry.circleCircumference(3)).toBeCloseTo(18.850, 3);
    });

    // Add more test cases as needed
});

describe('Trigonometry', () => {
    test('calculates the sine of an angle in degrees', () => {
        expect(Trigonometry.sine(30)).toBeCloseTo(0.5, 3);
    });

    test('calculates the cosine of an angle in degrees', () => {
        expect(Trigonometry.cosine(45)).toBeCloseTo(0.707, 3);
    });

    test('calculates the tangent of an angle in degrees', () => {
        expect(Trigonometry.tangent(60)).toBeCloseTo(1.732, 3);
    });

    test('calculates the cosecant of an angle in degrees', () => {
        expect(Trigonometry.cosecant(30)).toBeCloseTo(2, 3);
    });

    test('calculates the secant of an angle in degrees', () => {
        expect(Trigonometry.secant(45)).toBeCloseTo(1.414, 3);
    });

    test('calculates the cotangent of an angle in degrees', () => {
        expect(Trigonometry.cotangent(60)).toBeCloseTo(0.577, 3);
    });

    test('calculates the arcsine of a value', () => {
        expect(Trigonometry.arcsine(0.5)).toBeCloseTo(30, 3);
    });

    // Add more test cases as needed
});