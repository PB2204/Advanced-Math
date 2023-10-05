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

    // Method to calculate the area of a triangle given base and height
    static triangleArea(base, height) {
        return (base * height) / 2;
    }

    // Method to calculate the volume of a sphere given its radius
    static sphereVolume(radius) {
        return (4 / 3) * Math.PI * Math.pow(radius, 3);
    }

    // Method to calculate the area of an equilateral triangle given its side length
    static equilateralTriangleArea(side) {
        return (Math.sqrt(3) / 4) * Math.pow(side, 2);
    }

    // Method to calculate the volume of a cube given its side length
    static cubeVolume(side) {
        return Math.pow(side, 3);
    }

    // Method to calculate the volume of a rectangular prism given length, width, and height
    static rectangularPrismVolume(length, width, height) {
        return length * width * height;
    }

    // Method to calculate the surface area of a rectangular prism given length, width, and height
    static rectangularPrismSurfaceArea(length, width, height) {
        return 2 * (length * width + width * height + height * length);
    }

    // Method to calculate the volume of a cylinder given its radius and height
    static cylinderVolume(radius, height) {
        return Math.PI * Math.pow(radius, 2) * height;
    }

    // Method to calculate the surface area of a cylinder given its radius and height
    static cylinderSurfaceArea(radius, height) {
        const baseArea = Math.PI * Math.pow(radius, 2);
        const lateralArea = 2 * Math.PI * radius * height;
        return 2 * baseArea + lateralArea;
    }

    // Method to calculate the volume of a cone given its radius and height
    static coneVolume(radius, height) {
        return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    }

    // Method to calculate the surface area of a cone given its radius and height
    static coneSurfaceArea(radius, height) {
        const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
        const baseArea = Math.PI * Math.pow(radius, 2);
        const lateralArea = Math.PI * radius * slantHeight;
        return baseArea + lateralArea;
    }
}

module.exports = Geometry;
