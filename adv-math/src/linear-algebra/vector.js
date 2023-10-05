class Vector {
    constructor(components) {
        this.components = [...components];
        this.dimension = components.length;
    }

    // Method to perform vector addition
    add(vector) {
        if (this.dimension !== vector.dimension) {
            throw new Error('Vector dimensions must match for addition.');
        }

        const resultComponents = [];
        for (let i = 0; i < this.dimension; i++) {
            resultComponents[i] = this.components[i] + vector.components[i];
        }

        return new Vector(resultComponents);
    }

    // Method to perform vector subtraction
    subtract(vector) {
        if (this.dimension !== vector.dimension) {
            throw new Error('Vector dimensions must match for subtraction.');
        }

        const resultComponents = [];
        for (let i = 0; i < this.dimension; i++) {
            resultComponents[i] = this.components[i] - vector.components[i];
        }

        return new Vector(resultComponents);
    }

    // Method to calculate the dot product of two vectors
    dot(vector) {
        if (this.dimension !== vector.dimension) {
            throw new Error('Vector dimensions must match for dot product.');
        }

        let product = 0;
        for (let i = 0; i < this.dimension; i++) {
            product += this.components[i] * vector.components[i];
        }

        return product;
    }

    // Method to calculate the cross product of two 3D vectors
    cross(vector) {
        if (this.dimension !== 3 || vector.dimension !== 3) {
            throw new Error('Cross product is defined for 3D vectors only.');
        }

        const x = this.components[1] * vector.components[2] - this.components[2] * vector.components[1];
        const y = this.components[2] * vector.components[0] - this.components[0] * vector.components[2];
        const z = this.components[0] * vector.components[1] - this.components[1] * vector.components[0];

        return new Vector([x, y, z]);
    }
}

module.exports = Vector;
