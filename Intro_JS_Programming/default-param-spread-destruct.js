// applying default parameters

function divide(numerator, denominator = 2) {
	return numerator / denominator;
}

console.log(`Divide 32 by the default of 2 = ${divide(32)}`);
console.log(`Divide 12 by 3 = ${divide(12, 3)}`);

// without default parameters
function divide2(numerator, denominator) {
	if (typeof denominator === 'undefined') {
		return numerator / 2;
	} else {
		return numerator / denominator;
	}
}

console.log(`Divide 32 by the default of 2 = ${divide2(32)}`);
console.log(`Divide 12 by 3 = ${divide2(12, 3)}`);
