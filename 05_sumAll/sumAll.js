const sumAll = function(numOne, numTwo) {
    let mySum = 0
    if (numOne < 0 || numTwo < 0 || Number(numOne) !== numOne|| Number(numTwo) !== numTwo||Array.isArray(numOne)||Array.isArray(numTwo)){
        mySum = 'ERROR'
    }else if (numOne < numTwo) {
        for (i = numOne; i<= numTwo; i++){
            mySum += i
        }
    }else if (numTwo < numOne) {
        for (i = numTwo; i<= numOne; i++){
            mySum += i
        }
    }
    return mySum
};

// Do not edit below this line
module.exports = sumAll;
