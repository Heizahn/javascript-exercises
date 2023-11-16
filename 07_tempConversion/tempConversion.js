const convertToCelsius = function(grade) {
  let num = (grade - 32) * 5 / 9;
  return Number(num.toFixed(2));
};

const convertToFahrenheit = function(grade) {
  let num = grade * 9 / 5 + 32;
  return Number(num.toFixed(2));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
