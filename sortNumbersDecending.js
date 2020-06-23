function sortNumbersDecending(numbers) {
	//outer loop iterates from first element to the one before last
	//because inner loop iterates one index in advance of outer
	for (let i = 0; i < numbers.length - 1; i++) {
		let maxNum = numbers[i];
		let maxIndex = i;

		for (let j = i; j < numbers.length; j++) {
			if (numbers[j] > maxNum) {
				maxNum = numbers[j];
				maxIndex = j;
				//starting position of outer loop will advance to next index and
				//must place the highest number at starting index postion, swap the low with the
				//high
				numbers[maxIndex] = numbers[i]; //where the max index is at needs to now hold the low num
				numbers[i] = maxNum; //where the low index was at, needs to hold the max num
			}
		}
	}

	return numbers;
}

let numbers = sortNumbersDecending([
	10,
	8,
	22,
	3,
	9,
	11,
	4,
	34,
	55,
	122,
	0,
	66
]);
for (num of numbers) {
	console.log(num);
}
