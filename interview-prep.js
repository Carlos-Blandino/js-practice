class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

/**
 * LinkedList class holds a reference to the `head` node.
 */

class LinkedList {
    constructor(){
        this.head = null
    }
    /**
     * The number of elements in the linked list.
     *
     * @returns {number}
     *   the number of elements in the linked list.
     */

    get length() {
        let tempNode = this.head;
        let count = 0;
        while(tempNode){
            count++;
            tempNode = tempNode.next;
        }
        return count;
    }

    /**
     * Find a node in the linked list.
     *
     * @param isMatch
     *  function that returns true if the current node matches the search criteria.
     *
     * @returns {*|null}
     *  the first node where `isMatch(node, index) === true` or null if no match is found.
     */
    find(isMatch) {
        return this.findWithPrevious(isMatch)[0];
    }

    findWithPrevious(isMatch) {
        let index = 0;
        let previous = null;
        let node = this.head;
        while (node) {
            if (isMatch(node, index, this)) {
                return [node, previous];
            }
            index++;
            previous = node;
            node = node.next;
        }
        return [null, null];
    }
    /**
     * Insert the value after a matched node in the list.
     *
     * @param isMatch
     *  function that returns true if the current node matches the search criteria.
     *
     * @param value
     *  the value to add.
     *
     * @returns {LinkedList}
     *  this linked list so methods can be chained.
     *
     * @throws 'No match found.'
     *  if list is not empty and no matching element is found.
     */
    insert(value, isMatch = (node, index) => index === this.length - 1) {
        if (this.head) {
            const previousNode = this.find(isMatch);

            if (!previousNode) {
                throw new Error("No match found.");
            }

            previousNode.next = new Node(value, previousNode.next);
        } else {
            this.insertAtHead(value);
        }
        return this;
    }

    /**
     * Insert a new value at the head of the list.
     * @param value
     *  the new value to insert
     *
     * @returns {LinkedList}
     *  this linked list so methods can be chained.
     */

    insertAtHead(value) {
        // This is a new function that you will need to implement.
        this.head = new Node(value, this.head)
    }

    /**
     * Remove the first node where `isMatch(node, index) === true`.
     *
     * @param isMatch
     *  function that returns true if the current node matches the node to be removed.
     *
     * @returns {LinkedList}
     *  this linked list so methods can be chained.
     */
    remove(isMatch) {

        const [matchedNode, previousNode] = this.findWithPrevious(isMatch);

        if (!matchedNode) {
            return null;
        }

        if (this.head === matchedNode) {
            this.head = this.head.next;
        } else {
            previousNode.next = matchedNode.next;
        }
        return matchedNode.value;
    }

}


const data = ["When I wake up, the other side of the bed is cold",
    "My finger reach out, seeking Prim's warmth but finding only the rough canvas cover of the mattress",
    "She must have had bad dreams and climbed in with our mother"]

const myList = new LinkedList()

myList.insertAtHead("wake");
myList.insertAtHead("up");
myList.insertAtHead("dreams");

    function concordance(data) {
        // the result variable will hold the all the index in which a word appears
        const map = new Map();
        //need an array to hold the data that needs to be split
        const splitArr = [];
        //thru each iteration we get the sentence that we want to split
        //we push the split sentence into our splitArray
        //use regular exp to indicate what to split on
        for (let i = 0; i < data.length; i++) {
            splitArr.push(data[i].split(/[\s.,';]/));
            console.log("split", splitArr)
        }
        //iterate thru the splitArray
        splitArr.forEach((ele, ind) =>
           // iterate the sentence split sentence , word by word
            ele.forEach((word) => {
                //we need the words in lower case
                word = word.toLowerCase();
                //create  a map to keep track of the word and index it appears on
                //check if the word exist
                if (map.has(word)) {
                    //temporarily hold what is currently in the word key
                    //so that can re combine it with the new index that will be added
                    const lines = map.get(word);
                    //check to see if the line number is in there , skip it if it is
                    if (!lines.includes(ind)) {
                        //if it safe to add new number then we can set the exising word to the new value
                        map.set(word, [...lines, ind]);
                    }
                    // if the word is not in the map
                } else {
                    //as long as the word does not equal an empty space set the map with the new key/ value pair
                     if(word !== "")map.set(word, [ind]);
                }
            })
        );
                    //mdn web docs converting map to an object
        return Object.fromEntries(map);
    }

const myConcordance = concordance(["When I wake up, the other side of the bed is cold", "My finger reach out, seeking Prim's warmth but finding only the rough canvas cover of the mattress", "She must have had bad dreams and climbed in with our mother", "etc"])

function searchLines(words, concordance, data) {
     //need an array to hold the results of all the index found for a word
    const indexsToLookUp = [];
    //need a variable to place the extracted look up words from the linked list
    const lookUpWords = [];
    //need a variable for the resulting find
    const results = [];
    //linked list has a head at which we need to start
    let node = words.head;
    //extract the words from the linked list as long as there is a node
    while (node) {
        lookUpWords.push(node.value);
        node = node.next;
    }
    //iterate the list of extracted linked list words
    lookUpWords.forEach((word) => {
        //if the word exist in the concordance save the index to the array where the index for the words are stored
        if (concordance[word]) indexsToLookUp.push(concordance[word]);
    });

    //we want to store the index with duplicates from the look up index array
    let set = new Set();

    //extract each num into the set to clean up duplicates
    indexsToLookUp.forEach((linesIndex) => linesIndex.forEach((num) => set.add(num)));

    //iterate thru the set to extract the sentence from the data using the index into a resulting variable
    set.forEach((line) => {
        results.push(data[line]);
    });
    return results;
}

console.log('concordance', concordance(data))
//concordance {
//   when: [ 0 ],
//   i: [ 0 ],
//   wake: [ 0 ],
//   up: [ 0 ],
//   the: [ 0, 1 ],
//   ]
console.log('search', searchLines(myList, myConcordance,data))
//search [
//   'She must have had bad dreams and climbed in with our mother',
//   'When I wake up, the other side of the bed is cold'
// ]
