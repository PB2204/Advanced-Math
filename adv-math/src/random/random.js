class Random {
    // Method to generate a random integer between min (inclusive) and max (exclusive)
    static generateRandomInt(min, max) {
        if (max <= min) {
            throw new Error('Invalid range for generating random integer.');
        }
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Method to generate a random float between min (inclusive) and max (exclusive)
    static generateRandomFloat(min, max) {
        if (max <= min) {
            throw new Error('Invalid range for generating random float.');
        }
        return Math.random() * (max - min) + min;
    }
}

module.exports = Random;
