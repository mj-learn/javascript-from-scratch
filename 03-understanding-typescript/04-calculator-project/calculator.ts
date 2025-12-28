type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
}

type InvestmentResult = {
    year: number;
    totalAmount: number;
    totalContribution: number;
    totalInterest: number;
}

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;

    if (initialAmount <= 0) {
        return 'Initial amount must be greater than 0';
    }

    if (duration <= 0) {
        return 'Duration must be greater than 0';
    }

    if (expectedReturn <= 0) {
        return 'Expected return must be greater than 0';
    }

    let total = initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;

    const annualResult: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++) {
        total += annualContribution;
        totalContribution += annualContribution;
        totalInterestEarned = total * expectedReturn;
        total += totalInterestEarned;
        annualResult.push({
            year: i + 1,
            totalAmount: Number(total.toFixed(2)),
            totalContribution: Number(totalContribution.toFixed(2)),
            totalInterest: Number(totalInterestEarned.toFixed(2)),
        });
    }

    return annualResult;
}

function printResult(result: CalculationResult) {
    if (Array.isArray(result)) {
        result.forEach(yearData => {
            console.log(`Year: ${yearData.year}`);
            console.log(`Total Amount: ${yearData.totalAmount}`);
            console.log(`Total Contribution: ${yearData.totalContribution}`);
            console.log(`Total Interest: ${yearData.totalInterest}`);
            console.log('--------------------------------');
        });
    } else {
        console.log(result);
    }
}

const result = calculateInvestment({
    initialAmount: 1000,
    annualContribution: 100,
    expectedReturn: 0.05,
    duration: 10
});

printResult(result);