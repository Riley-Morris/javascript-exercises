const removeFromArray = function(someArray, ...removeItem) {
    for (n=0; n<removeItem.length; n++){    
        for (i=0; i<someArray.length; i++) {
            if (someArray[i]===removeItem[n]) {
                someArray.splice(i, 1)
                }
            }
        }
    return someArray
};

// Do not edit below this line
module.exports = removeFromArray;
