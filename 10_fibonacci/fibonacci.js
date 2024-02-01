const fibonacci = function (sequence) {
	if (sequence > 0) {
		let a = 0
		let b = 1
		let c = 0

		for (let i = 0; i < sequence; i++) {
			c = a + b
			a = b
			b = c
		}

		return a
	}

	return "OOPS"
};

// Do not edit below this line
module.exports = fibonacci;
