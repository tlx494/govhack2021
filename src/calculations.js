// calculations for LGA etc

import { inputData } from './inputData';

// Household constants
let expenseRate = 0.85; // Household expense as percentage of disposable income
let rentRate = 0.225; // Household rent expenditure as percentage of disposable income
let taxRate = 0.18; // Effective tax rate
let cashInterest = 0.01; // Interest on cash savings
let wageIncrease = 0.0056; // Wage growth for each additional year aged
let ageMultiple = 1.17; // Adjustment factor for 30 yr olds earning more than population median
let coupleFactor = 1.85; // Couple income as multiple of single income


// Propert constants
let propGrowthRate = 0.06129641461; // Annual property price growth rate
let loanInterst = 0.03; // Home loan interest rate
let loanTenure = 30; // Home loan duration in years
let minDeposit = 0.15; // Minimum loan to value ratio

let fatConstant = r * (1+r)^N / ((r+1)^N - 1);

export const getIncome = (lga, t) => {
    // household income for the t-th years
    let householdIncome = ageMultiple*coupleFactor*inputData[lga]['median_income_2021'];
    let incomeGrowth = inputData[lga]['income_growth']+wageIncrease;

    return householdIncome*(1+incomeGrowth)^(t-1)
}

export const getHousePrice = (lga, t) => {
    // the median property price in lga in year t
}

export const getSavings = (lga, t) => {
    // sum of savings after t years

}

export const getNIS = (lga, t) => {
    // net income surplus at t-th year
    return getIncome(lga, t) * (1-expenseRate+rentRate)
}

export const getMaxPriceDeposit = (lga, t) => {
    return getSavings(lga, t) / minDeposit
}

export const getMaxPriceRepayments = (lga, t) => {
    return getSavings(lga, t) + getNIS(lga, t) * fatConstant
}

export const getMin = (x, y) => {
    if (x > y) {
        return y;
    }
    return x;
}

export const getMaxPrice = (lga, t) => {
    return getMin(getMaxPriceDeposit(lga,t), getMaxPriceRepayments(lga,t))
}

export const getTimeToStart = (base_lga, target_lga) => {
    for (let i = 0; i < 26; i++) {
        let max_possible = getMaxPrice(base_lga, i)
        let house_price = getHousePrice(target_lga, i)
        if (max_possible > house_price) {
            return i
        }
    }
    return null
}

export const getTimes = (lga) => {
    return [1,2,3,4,5,6,7,8,9,10,11,null,13,14,15,16,17,18,19,20,21,22,null,24,25,26,27,28,29,30,null,32,33,34,35,36]
}