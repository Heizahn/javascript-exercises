const removeFromArray = function(array, argument) {
    let newArray = [];

    for (let item of array) {
        if (argument !== item) {
            newArray.push(item);
        };
    };

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
