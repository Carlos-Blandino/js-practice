// The function should output an array containing all the strings from the input array but in alphabetical order
// Example: -var myArray = ['mouse', 'cat', 'dog', 'human'];
// sort(myArray);
// Output - ['cat', 'dog', 'human', 'mouse']
// Try doing this using a Bubble Sort

var myArray = [ 'mouse', 'cat', 'cata', 'human' ];

function sortStringArray(strArray) {
	for (let i = 0; i < strArray.length - 1; i++) {
		let str1 = strArray[i].toLowerCase().trim();
		let str2 = strArray[i + 1].toLowerCase().trim();

		if (strArray[i + 1] === 'undifined') {
			break;
		}
		if (str1 > str2) {
			let temp = str1;
			strArray[i] = str2;
			strArray[i + 1] = temp;
		}
	}
	return strArray;
}
console.log(sortStringArray(myArray));
