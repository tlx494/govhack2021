// calculations for LGA etc

import { inputData } from './inputData';

let minDeposit = 0.15; // Minimum loan to value ratio



export const getIncome = (lga, t) => {
    // income for the t-th years

}

// just realised this live share will close

//  ill push to git and someone can host a new one
// 
export const getSavings = (lga, t) => {
    // sum of savings after t years

    inputData['key']

    const a = 'asdf' // for immutable vars
    let x = 'asdf' // mutable

}

export const getNIS = (lga, t) => {
    // net income surplus at t-th year
}

export const getMaxPriceDeposit = (lga, t) => {
    return getSavings(lga, t) / minDeposit
}

export const getMaxPriceRepayments = (lga, t) => {

}

export const getMin = (x, y) => {
    if (x > y) {
        return y;
    }
    return x;
}