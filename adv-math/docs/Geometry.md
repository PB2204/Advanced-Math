# Geometry Module

The `Geometry` module provides methods for performing geometric calculations, including area and perimeter calculations for rectangles and circles.

## Usage

To use the `Geometry` module, import it and use its methods in your JavaScript code.

```javascript
const Geometry = require('adv-math').Geometry;

// Example usage
const length = 10;
const width = 5;
const radius = 3;

// Calculate the area and perimeter of a rectangle
const rectangleArea = Geometry.rectangleArea(length, width);
const rectanglePerimeter = Geometry.rectanglePerimeter(length, width);

// Calculate the area and circumference of a circle
const circleArea = Geometry.circleArea(radius);
const circleCircumference = Geometry.circleCircumference(radius);
```

## Methods

### `rectangleArea(length, width)`

Calculates the area of a rectangle.

- `length` (number): The length of the rectangle.
- `width` (number): The width of the rectangle.
- Returns: The area of the rectangle.

### `rectanglePerimeter(length, width)`

Calculates the perimeter of a rectangle.

- `length` (number): The length of the rectangle.
- `width` (number): The width of the rectangle.
- Returns: The perimeter of the rectangle.

### `circleArea(radius)`

Calculates the area of a circle.

- `radius` (number): The radius of the circle.
- Returns: The area of the circle.

### `circleCircumference(radius)`

Calculates the circumference of a circle.

- `radius` (number): The radius of the circle.
- Returns: The circumference of the circle.

## Examples

```javascript
const Geometry = require('adv-math').Geometry;

// Example calculations
const length = 10;
const width = 5;
const radius = 3;

const rectangleArea = Geometry.rectangleArea(length, width); // Returns 50
const rectanglePerimeter = Geometry.rectanglePerimeter(length, width); // Returns 30
const circleArea = Geometry.circleArea(radius); // Returns 28.274333882308138
const circleCircumference = Geometry.circleCircumference(radius); // Returns 18.84955592153876
```
