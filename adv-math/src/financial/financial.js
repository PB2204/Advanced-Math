class Financial {
    // Method to calculate the future value of an investment with compound interest
    static futureValue(principal, rate, time) {
        const compoundInterest = principal * Math.pow(1 + rate, time);
        return compoundInterest;
    }

    // Method to calculate the compound interest earned on an investment
    static compoundInterest(principal, rate, time) {
        return this.futureValue(principal, rate, time) - principal;
    }

    // Method to calculate the present value of a future amount with discounting
    static presentValue(futureValue, rate, time) {
        return futureValue / Math.pow(1 + rate, time);
    }
}

module.exports = Financial;
