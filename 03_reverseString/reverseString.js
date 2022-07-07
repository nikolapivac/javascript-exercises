const reverseString = function(string) {
    let len = string.length;
    string = string.split("");
    string = Array.from(string)
    let result = [];
    for(let i=0; i<len; i++){
        result[i] = string[len-1-i]
    }
    result = result.join("")
    return result;
};

// Do not edit below this line
module.exports = reverseString;
