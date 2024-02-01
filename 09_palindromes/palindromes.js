const palindromes = function (str) {
	let strInv = ""

	for (let char of str) {
		strInv = char + strInv
	}

	if (str === strInv) return true
	return false
};

// Do not edit below this line
module.exports = palindromes;
