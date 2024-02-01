const palindromes = function (str) {
	let strInv = ""
	str = str.toLowerCase().replace(/[^a-z0-9]/g, "")

	for (let char of str) {
		strInv = char + strInv
	}

	if (str === strInv) return true
	return false
};

// Do not edit below this line
module.exports = palindromes;
