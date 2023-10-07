const Geometry = require("../src/geometry-trigonometry/geometry");
const Trigonometry = require("../src/geometry-trigonometry/trigonometry");

describe("Geometry", () => {
  test("calculates the area of a rectangle", () => {
    expect(Geometry.rectangleArea(4, 5)).toBe(20);
  });

  test("calculates the perimeter of a rectangle", () => {
    expect(Geometry.rectanglePerimeter(4, 5)).toBe(18);
  });

  test("calculates the area of a circle", () => {
    expect(Geometry.circleArea(3)).toBeCloseTo(28.274, 2);
  });

  test("calculates the circumference of a circle", () => {
    expect(Geometry.circleCircumference(3)).toBeCloseTo(18.85, 2);
  });
  test("calculates the area of a triangle", () => {
    expect(Geometry.triangleArea(3, 4)).toBe(6);
  });
  test("calculates the volume of a sphere", () => {
    expect(Geometry.sphereVolume(3)).toBeCloseTo(113.097, 2);
  });
  test("calculates the area of an equilateral triangle", () => {
    expect(Geometry.equilateralTriangleArea(3)).toBeCloseTo(3.897, 2);
  });
  test("calculates the area of a triangle given its side lengths", () => {
    expect(Geometry.triangleArea_sides(3, 4, 5)).toBe(6);
  });
  test("calculates the area of a square given its side length", () => {
    expect(Geometry.squareArea(3)).toBe(9);
  });
  test("calculates the perimeter of a square given its side length", () => {
    expect(Geometry.squarePerimeter(3)).toBe(12);
  });
  test("calculates the volume of a cube given its side length", () => {
    expect(Geometry.cubeVolume(3)).toBe(27);
  });
  test("calculates the volume of a rectangular prism given length, width, and height", () => {
    expect(Geometry.rectangularPrismVolume(3, 4, 5)).toBe(60);
  });
  test("calculates the surface area of a rectangular prism given length, width, and height", () => {
    expect(Geometry.rectangularPrismSurfaceArea(3, 4, 5)).toBe(94);
  });
  test("calculates the volume of a cylinder given radius and height", () => {
    expect(Geometry.cylinderVolume(3, 5)).toBeCloseTo(141.371, 2);
  });
  test("calculates the surface area of a cylinder given radius and height", () => {
    expect(Geometry.cylinderSurfaceArea(3, 5)).toBeCloseTo(150.796, 2);
  });
  test("calculates the volume of a cone given radius and height", () => {
    expect(Geometry.coneVolume(3, 5)).toBeCloseTo(47.123, 2);
  });
  test("calculates the surface area of a cone given radius and height", () => {
    expect(Geometry.coneSurfaceArea(3, 5)).toBeCloseTo(83.229, 2);
  });
  // Add more test cases as needed
});

describe("Trigonometry", () => {
  test("calculates the sine of an angle in degrees", () => {
    expect(Trigonometry.sine(30)).toBeCloseTo(0.5, 1);
  });

  test("calculates the cosine of an angle in degrees", () => {
    expect(Trigonometry.cosine(45)).toBeCloseTo(0.707, 2);
  });

  test("calculates the tangent of an angle in degrees", () => {
    expect(Trigonometry.tangent(60)).toBeCloseTo(1.732, 2);
  });

  test("calculates the cosecant of an angle in degrees", () => {
    expect(Trigonometry.cosecant(30)).toBeCloseTo(2, 1);
  });

  test("calculates the secant of an angle in degrees", () => {
    expect(Trigonometry.secant(45)).toBeCloseTo(1.414, 2);
  });

  test("calculates the cotangent of an angle in degrees", () => {
    expect(Trigonometry.cotangent(60)).toBeCloseTo(0.577, 2);
  });

  test("calculates the arcsine of a value", () => {
    expect(Trigonometry.arcsine(0.5)).toBeCloseTo(30, 1);
  });

  // Add more test cases as needed
});
