/** #
 * Build a function, random_range, that takes 2 parameters, 
 * start_num and end_num. OPTIONALLY: If start_num is an array instead (and end_num isn't specified), 
 * then it returns a random element from the array
 * Example:
 * random_range(2,15)
 * returns 7
 * random_range(1,100)
 * returns 85
 * random_range(['a','b','c','d','e'])
 * returns 'b'
 * 
 * 
 */
function random_range(start_num, end_num) {
    var count = null;
    var tempArray = [];
    var randomNum = null;
    var choosenFromRandom = null;

    if (Array.isArray(start_num)) {
        randomNum = Math.floor(Math.random() * start_num.length);
        choosenFromRandom = start_num[randomNum];
        console.log('random number: ' + choosenFromRandom);
    } else {
        for (var start = start_num; start <= end_num; start++) {
            // console.log('number range to choose form: ' + start);
            tempArray.push(start);
            count += 1;
            // console.log(count);
        }
        randomNum = Math.floor(Math.random() * count);
        choosenFromRandom = tempArray[randomNum];
        console.log('random number: ' + choosenFromRandom);
    }
}
random_range(0, 2);
random_range([3, 4, 7, 10, 30, 41, 62, 16, 88, 99, 300, 23, 22, 1, 5]);