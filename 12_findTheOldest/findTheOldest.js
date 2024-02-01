const findTheOldest = function (arrObj) {
	let actuality = (new Date).getFullYear()
	let oldest = 0
	let people = {}

	for (let obj of arrObj) {
		if (!("yearOfDeath" in obj)) {
			obj.yearOfDeath = actuality
		}

		let age = obj.yearOfDeath - obj.yearOfBirth

		if (oldest < age) {
			oldest = age
			people = obj
		}
	}

	return people
};

// Do not edit below this line
module.exports = findTheOldest;

