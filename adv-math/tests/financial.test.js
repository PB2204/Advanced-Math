const Financial = require('../src/financial/financial');

describe('Financial', () => {
    test('calculates the future value of an investment', () => {
        const principal = 1000;
        const rate = 0.05;
        const time = 5;
        const futureValue = Financial.futureValue(principal, rate, time);
        expect(futureValue).toBeCloseTo(1276.28, 2);
    });

    test('calculates the compound interest earned on an investment', () => {
        const principal = 1000;
        const rate = 0.05;
        const time = 5;
        const compoundInterest = Financial.compoundInterest(principal, rate, time);
        expect(compoundInterest).toBeCloseTo(276.28, 2);
    });

    test('calculates the present value of a future amount', () => {
        const futureValue = 1270.63;
        const rate = 0.05;
        const time = 5;
        const presentValue = Financial.presentValue(futureValue, rate, time);
        expect(presentValue).toBeCloseTo(995.57, 2);
    });

    // Add more test cases as needed
});
