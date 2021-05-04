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