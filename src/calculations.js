// calculations for LGA etc

import { inputDataRaw } from './inputData';

export const inputData = JSON.parse(inputDataRaw);

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

let fatConstant = loanInterest * (1 + loanInterest) ^ loanTenure / ((1 + loanInterest) ^ loanTenure - 1);

let targetList = [
    "Campbelltown",
    "Penrith",
    "Liverpool",
    "Wollongong",
    "Blue Mountains",
    "Blacktown",
    "Ryde",
    "Parramatta",
    "Canterbury-Bankstown",
    "Burwood",
    "Sutherland Shire",
    "Sydney",
    "Hornsby",
    "Lane Cove",
    "North Sydney",
    "Inner West",
    "Randwick",
    "Northern Beaches",
    "Ku-ring-gai",
    "Mosman",
    "Hunters Hill",
    "Woollahra"
]

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
    let incomeGrowth = inputData[lga]["income_growth"];//+wageIncrease;
    let r = (1 + incomeGrowth) * (1 + cashInterest);
    return (1 - expenseRate) * (1 - taxRate) * getHouseholdIncome(lga, t) * (1 - r ^ t) / (1 - r);
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
    return -1;
}

export const getTimes = (lga) => {
    let output = [];
    for (let i = 0; i < targetList.length; i++) {
        let target = targetList[i];
        let years = getTimeToStart(lga, target);
        output.push(years);
    }
    return output;
}

// returns a list (len = 40) each corresponding to a value that should be populated in the location tiles around the board
// null if it's a chance card or something that should not be populated
// -1 if it's impossible to buy a house
// int if it's possible to buy a house
export const getTimesAndFormat = (lga) => {
    let output = getTimes(lga);
    let final_output = [];
    for (let i = 0; i < 40; i++) {
        let ind = mapIndicesFromLongToShort(i)
        if (ind != null) {
            final_output.push(output[ind])
        }
        else {
            final_output.push(null)
        }
    }
}

// export const mapIndicesFromShortToLong = (ind) => {
//        let arr = [0,2,5,7,8,10,12,13,15,17,18,20,22,23,25,26,28,30,31,33,36,38];
//         return arr[ind];
// }

// this is used to test getTimesAndFormat
export const mapIndicesFromLongToShort = (ind) => {
    let arr = [0, null, 1, null, null, 2, null, 3, 4, null, 5, null, 6, 7, null, 8, null, 9, 10, null, 11, null, 12, 13, null, 14, 15, null, 16, null, 17, 18, null, 19, null, null, 20, null, 21, null];
    return arr[ind]
}