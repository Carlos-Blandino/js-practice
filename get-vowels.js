/*
 given a string, find all the vowels in the string. Store them in a new string
example:
parameters: "four score and seven years ago"
return: "ouoeaeeeaao"
human-level instructions

create variable to store vowels
begin loop
get each letter, one at a time
compare it with each each vowel and see if it matches
if it is, add it to the vowel variable
repeat
 */

function findVowels(someString) {
    var tempArray = [];
    var len = someString.length;
    for (var i = 0; i < len; i++) {
        var letter = someString.charAt(i);
        switch (letter) {
            case 'a':
                tempArray.push('a');
                break;
            case 'e':
                tempArray.push('e');
                break;
            case 'i':
                tempArray.push('i');
                break;
            case 'o':
                tempArray.push('o');
                break;
            case 'u':
                tempArray.push('u');
                break;
            default:
                break;
        }
    }
    console.log(tempArray);
}
findVowels('okay');