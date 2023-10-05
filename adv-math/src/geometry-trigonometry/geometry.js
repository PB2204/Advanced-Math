class Geometry {
    // Method to calculate the area of a rectangle
    static rectangleArea(length, width) {
        return length * width;
    }

    // Method to calculate the perimeter of a rectangle
    static rectanglePerimeter(length, width) {
        return 2 * (length + width);
    }

    // Method to calculate the area of a circle
    static circleArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }

    // Method to calculate the circumference of a circle
    static circleCircumference(radius) {
        return 2 * Math.PI * radius;
    }
}

module.exports = Geometry;
