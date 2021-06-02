function anagramGroups(words) {
    if (words.length === 0) {
        return [];
    }

    let lookupTable = {};

    words.forEach((word) => {
        const letters = word.split("").sort();
        //each word in the array is sorted then if it exists in as a sorted key we add the actual word
        // to the lookup object by push
        //other wise we assign a word to a new key
        lookupTable[letters] ? lookupTable[letters].push(word) : lookupTable[letters] = [word];
        console.log('lookup', lookupTable)
    });
    return Object.values(lookupTable);

}

function firstSingleCharacter(word) {
    if (word.length === 0) {
        return null;
    }

    let strArray = word.split("");

    const letterLookup = {};

    for (let i = 0; i < word.length; i++) {
        letterLookup[word[i]] = (letterLookup[word[i]] || 0 ) + 1
    }
    for (let key in letterLookup) {
        if (letterLookup[key] === 1) {
            return key;
        }
    }
    return null;

}

function anagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    let temp1 = s1.toLowerCase().split("");
    temp1.sort();
    // console.log('1', temp1)
    let temp2 =  s2.toLowerCase().split("");
    temp2.sort();
    // console.log('2', temp2)

    for (let i = 0; i < s1.length; i++) {
        if (temp1[i] !== temp2[i]) {
            return false;
        }
    }
    return true;
}
function permutationPalindrome(word) {
    const charSet = new Set();

    word.split("").forEach((char) => {
        if (charSet.has(char)) {
            charSet.delete(char);
        } else {
            charSet.add(char);
        }
    });

    return charSet.size <= 1;
}


