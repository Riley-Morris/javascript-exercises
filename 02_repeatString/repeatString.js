const repeatString = function(givenString, num) {
    repeated = ''
    if (num < 0){
        repeated = 'ERROR'
    }else {for (i = 1; i <= num; i++) {
        repeated += givenString
    }
}
    return repeated
};

// Do not edit below this line
module.exports = repeatString;
