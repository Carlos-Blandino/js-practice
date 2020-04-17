//Created as part of codewars.com training exercise
//Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
function list(names) {
    let strResult = '';

    if (names.length === 0) {
        return '';
    }

    names.forEach((name, index) => {
        if (index === 0) {
            strResult += name.name;
            return strResult;
        }
        if (index >= 0 && index === names.length - 1) {
            strResult = strResult + ' & ' + name.name;
        } else if (index >= 1) {
            strResult = strResult + ', ' + name.name;
        }
    });
    return strResult;
}