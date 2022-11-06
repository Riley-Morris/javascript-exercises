const reverseString = function(givenString) {
    let newString = ''
    let givenArray = Array.from(givenString)
    for (char of givenString){
        const popped = givenArray.pop()
        newString += popped
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
