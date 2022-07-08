const palindromes = function (string) {
    string = string.toLowerCase();
    const array = Array.from(string);
    const clean = array.filter(e => {
        return (e != " " && e != "!" && e != "?" && e!= "," && e!=".") ? true : false;
    })

    let len = clean.length;
    let result = [];
    for(let i = 0; i < len; i++){
        result[i] = clean[len-1-i];
    }

    let a = clean.toString();
    let b = result.toString();

    if(a==b) {
        return true;
    } else return false;
};


// Do not edit below this line
module.exports = palindromes;
