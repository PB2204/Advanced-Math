class Statistics {
    // Method to calculate the mean (average) of an array of numbers
    static mean(numbers) {
        if (numbers.length === 0) {
            throw new Error('Array must not be empty.');
        }

        const sum = numbers.reduce((acc, value) => acc + value, 0);
        return sum / numbers.length;
    }

    // Method to calculate the median of an array of numbers
    static median(numbers) {
        if (numbers.length === 0) {
            throw new Error('Array must not be empty.');
        }

        const sortedNumbers = numbers.slice().sort((a, b) => a - b);
        const middle = Math.floor(sortedNumbers.length / 2);

        if (sortedNumbers.length % 2 === 0) {
            return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
        } else {
            return sortedNumbers[middle];
        }
    }

    // Method to calculate the standard deviation of an array of numbers
    static standardDeviation(numbers) {
        if (numbers.length < 2) {
            throw new Error('Array must have at least two values for standard deviation calculation.');
        }

        const meanValue = this.mean(numbers);
        const squaredDifferences = numbers.map((value) => Math.pow(value - meanValue, 2));
        const variance = squaredDifferences.reduce((acc, value) => acc + value, 0) / (numbers.length - 1);
        return Math.sqrt(variance);
    }
}

module.exports = Statistics;
