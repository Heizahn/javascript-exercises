const getTheTitles = function (arrObj) {
	let arrayTitle = []

	for (let obj of arrObj) {
		arrayTitle.push(obj.title)
	}

	return arrayTitle
};

// Do not edit below this line
module.exports = getTheTitles;
