function isPangram(string) {
	let alphabet = 'abcdefghijklmnopqrustuvwxyz'.split('');
	let lowerCaseStr = string.toLowerCase();

	for (char of alphabet) {
		if (!lowerCaseStr.includes(char)) {
			return false;
		}
	}
	return true;
}
