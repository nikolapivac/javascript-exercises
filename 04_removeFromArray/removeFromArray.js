const removeFromArray = function(array, num) {
    let len = array.length;
    let result = []
    for (let j=1; j<arguments.length; j++){
        for (let i=0;i<len;i++){
            if(array[i] == arguments[j]){
                result = array.splice(i, 1);
            }
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
