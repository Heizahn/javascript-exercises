const reverseString = function(str) {
    let result = '';
    for (let i of str) {
        result = i + result;
    };

    return result;
};

// Do not edit below this line
module.exports = reverseString;
