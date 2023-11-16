const sumAll = function(num1, num2) {
    let sumTotal = 0;

    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        sumTotal += i;
    };

    return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
