function validAnagram(string1, string2) {
    // add whatever parameters you deem necessary - good luck!
    if (string1 === string2) {
        return true;
    }
    if (string1.length !== string2.length) return false;

    let string1Obj = {};
    let string2Obj = {};

    for (let i = 0; i < string1.length; i++) {
        string1Obj[string1[i]] = (string1Obj[string1[i]] || 0) + 1;
    }
    for (let i = 0; i < string2.length; i++) {
        string2Obj[string2[i]] = (string2Obj[string2[i]] || 0) + 1;
    }
    console.log('1: ', string1Obj)
    //console.log('2: ', string2Obj)
    for (let i = 0; i < string1.length; i++) {
        if (!(string1[i] in string2Obj)) return false;
        if (string1Obj[string1[i]] !== string2Obj[string1[i]]) return false;

    }
    return true;
}

console.log('boolean', validAnagram("", ""));
console.log('boolean', validAnagram("aaz", "zza"));