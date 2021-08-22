// calculations for LGA etc

import { inputData } from './inputData';

// Household constants
const expenseRate = 0.85; // Household expense as percentage of disposable income
const rentRate = 0.225; // Household rent expenditure as percentage of disposable income
const taxRate = 0.18; // Effective tax rate
const cashInterest = 0.01; // Interest on cash savings
const wageIncrease = 0.0056; // Wage growth for each additional year aged
const ageMultiple = 1.17; // Adjustment factor for 30 yr olds earning more than population median
const coupleFactor = 1.85; // Couple income as multiple of single income


// Propert constants
const propGrowthRate = 0.06129641461; // Annual property price growth rate
const loanInterest = 0.03; // Home loan interest rate
const loanTenure = 30; // Home loan duration in years
const minDeposit = 0.15; // Minimum loan to value ratio

<<<<<<< HEAD
let fatConstant = loanInterst * (1+loanInterst)^loanTenure / ((1+loanInterst)^loanTenure - 1);

let targetList = [
    "Woollahra",
    "Hunters Hill",
    "Mosman",
    "Ku-ring-gai",
    "Northern Beaches",
    "Randwick",
    "Inner West",
    "North Sydney",
    "Lane Cove",
    "Hornsby",
    "Sydney",
    "Sutherland Shire",
    "Burwood",
    "Canterbury-Bankstown",
    "Parramatta",
    "Ryde",
    "Blacktown",
    "Blue Mountains",
    "Wollongong",
    "Liverpool",
    "Penrith",
    "Campbelltown"
]
=======
let fatConstant = loanInterest * (1 + loanInterest) ^ loanTenure / ((loanInterest + 1) ^ loanTenure - 1);
>>>>>>> 8d6585ef52ab6b5dc7286526c54e9261b1346136

export const getHouseholdIncome = (lga, t) => {
    return ageMultiple * coupleFactor * inputData[lga]['median_income_2021'];
    // asdf
}

export const getIncome = (lga, t) => {
    // household income after t years
    let incomeGrowth = inputData[lga]['income_growth'] + wageIncrease;
    return getHouseholdIncome(lga, t) * (1 + incomeGrowth) ^ t;
}

export const getHousePrice = (lga, t) => {
    // the median property price in lga after t years
    let medianPrice = inputData[lga]['property_price_median'];
    return medianPrice * (1 + propGrowthRate) ^ t;
}

export const getSavings = (lga, t) => {
    // sum of savings after t years
<<<<<<< HEAD
    let incomeGrowth = inputData[lga]['income_growth']+wageIncrease;
    let r = (1+incomeGrowth)*(1+cashInterest);
    return (1-expenseRate)*(1-taxRate)*getHouseholdIncome(lga, t)*(1-r^t)/(1-r);
=======
    let incomeGrowth = inputData[lga]['income_growth'] + wageIncrease;
    let r = (1 + incomeGrowth) * (1 + cashInterest);
    return (1 - expenseRate) * (1 - taxRate) * getHouseholdIncome(lga, t) * (1 - r ^ (t + 1)) / (1 - r);
>>>>>>> 8d6585ef52ab6b5dc7286526c54e9261b1346136
}

export const getNIS = (lga, t) => {
    // net income surplus at t-th year
    return getIncome(lga, t) * (1 - expenseRate + rentRate) * (1 - taxRate);
}

export const getMaxPriceDeposit = (lga, t) => {
    return getSavings(lga, t) / minDeposit;
}

export const getMaxPriceRepayments = (lga, t) => {
    return getSavings(lga, t) + getNIS(lga, t) / fatConstant;
    // return 0;
}

export const getMin = (x, y) => {
    if (x > y) {
        return y;
    }
    return x;
}

export const getMaxPrice = (lga, t) => {
    return getMin(getMaxPriceDeposit(lga, t), getMaxPriceRepayments(lga, t))
}

export const getTimeToStart = (base_lga, target_lga) => {
    for (let i = 0; i < 26; i++) {
        let max_possible = getMaxPrice(base_lga, i);
        let house_price = getHousePrice(target_lga, i);
        if (max_possible >= house_price) {
            return i;
        }
    }
    return null;
}

export const getTimes = (lga) => {
<<<<<<< HEAD
    let output = [];
    for (let i=0; i < targetList.length; i++) {
        let target = targetList[i];
        let years = getTimeToStart(lga, target)
    }
    return [1,2,3,4,5,6,7,8,9,10,11,null,13,14,15,16,17,18,19,20,21,22,null,24,25,26,27,28,29,30,null,32,33,34,35,36]
=======
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, null, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, null, 24, 25, 26, 27, 28, 29, 30, null, 32, 33, 34, 35, 36]
>>>>>>> 8d6585ef52ab6b5dc7286526c54e9261b1346136
}