/**
 * Reverse String
Write a function that reverses a string. Take a string as input, reverse the string, and return the new string. 
For example, given the string "thinkful" return the string "lufkniht".

const reverse = require("../src/reverse");

describe("Reverse", () => {
  it("should reverse the empty string", () => {
    expect(reverse("")).toEqual("");
  });

  it("should reverse a single character", () => {
    expect(reverse("a")).toEqual("a");
  });

  it("should reverse distinct characters", () => {
    expect(reverse("abcdef")).toEqual("fedcba");
  });
});

 * Returns the string with the characters in reverse order

 */
function reverse(text) {
    if(text === ""){
        return ""
    }
const newChar = text[0]
 const result =  reverse(text.slice(1)) + newChar
    return   result
}