/**
 * A palindrome is a word, phrase, or number that is spelled the same forward and backward.
 * For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
 * and 1,001 is a numeric palindrome.
 *
 * Use a stack to determine whether or not a given string is a palindrome.
 *
 * The implementation should have O(n) performance.
 *
 * @param text
 *  a possibly empty string that may be a palindrome.
 */

class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    push(value) {
        this.linkedList.insertAtHead(value);
    }

    pop() {
        const headNode = this.linkedList.head;
        this.linkedList.remove((node) => node === headNode)
        return headNode.value;
    }

    peek() {
        return this.linkedList.head.value;
    }

    isEmpty() {
        return this.linkedList.head === null;
    }
}

function isPalindrome(text) {

    const cleanText = text.toLowerCase().replace(/'\\t'|[^a-zA-Z0-9]/g, "");

    if (!cleanText) {
        return false;
    }
    // TODO: Write an O(n) algorithm that uses a stack to determine whether the given input text is palindrome or not.
    let middle = Math.floor(cleanText.length / 2);

    const stack = new Stack();

    for (let index = 0; index < middle; index++) {
        stack.push(cleanText[index]);
    }

    middle += cleanText.length % 2 === 0 ? 0 : 1;

    for (let index = middle, limit = cleanText.length; index < limit; index++) {
        if (cleanText[index] !== stack.pop()) {
            return false;
        }
    }

    return true;
}
console.log('test', isPalindrome("\t"))
console.log('test', isPalindrome("😁"))
console.log('test', isPalindrome(""))
console.log('test', isPalindrome("A man, a plan, a canal: Panama"))