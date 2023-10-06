class Financial {
    // Method to calculate the future value of an investment with compound interest
    static futureValue(principal, rate, time) {
        return principal * Math.pow(1 + rate, time);
    }

    // Method to calculate the compound interest earned on an investment
    static compoundInterest(principal, rate, time) {
        return this.futureValue(principal, rate, time) - principal;
    }

    // Method to calculate the present value of a future amount with discounting
    static presentValue(futureValue, rate, time) {
        return futureValue / Math.pow(1 + rate, time);
    }

    // Method to calculate the loan amortization schedule
    static loanAmortization(principal, rate, time) {
        const monthlyRate = rate / 12 / 100; // Monthly interest rate
        const numPayments = time * 12; // Number of monthly payments
        const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));

        const amortizationSchedule = [];
        let remainingBalance = principal;

        for (let month = 1; month <= numPayments; month++) {
            const interestPayment = remainingBalance * monthlyRate;
            const principalPayment = monthlyPayment - interestPayment;
            remainingBalance -= principalPayment;

            amortizationSchedule.push({
                month,
                monthlyPayment,
                principalPayment,
                interestPayment,
                remainingBalance,
            });
        }

        return amortizationSchedule;
    }

    // Method to calculate the effective interest rate
    static effectiveInterestRate(principal, futureValue, time) {
        return Math.pow(futureValue / principal, 1 / time) - 1;
    }

    // Method to convert annual interest rates to monthly
    static annualToMonthlyInterestRate(annualRate) {
        return (Math.pow(1 + annualRate, 1 / 12) - 1) * 100;
    }

    // Method to calculate the net present value (NPV) of cash flows
    static netPresentValue(cashFlows, discountRate) {
        let npv = 0;
        for (let i = 0; i < cashFlows.length; i++) {
            npv += cashFlows[i] / Math.pow(1 + discountRate, i);
        }
        return npv;
    }

    // Method to adjust a value for inflation
    static adjustForInflation(value, inflationRate, years) {
        return value / Math.pow(1 + inflationRate, years);
    }

    // Method to calculate the periodic payment needed to reach a future value goal
    static calculateRequiredPaymentForFutureValue(futureValue, rate, time) {
        return futureValue / ((Math.pow(1 + rate, time) - 1) / rate);
    }

    // Method to calculate asset depreciation
    static calculateDepreciation(initialValue, salvageValue, usefulLife) {
        return (initialValue - salvageValue) / usefulLife;
    }

    // Method to calculate the total return on an investment
    static totalReturn(initialInvestment, finalValue, additionalInvestments) {
        return (finalValue - initialInvestment + additionalInvestments) / initialInvestment;
    }
}

module.exports = Financial;

