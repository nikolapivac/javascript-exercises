const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	let len = array.length;
  let s = 0;
  for(let i = 0; i < len; i++){
    s += array[i];
  }
  return s;
};

const multiply = function(array) {
  let len = array.length;
  let s = 1;
  for(let i = 0; i < len; i++){
    s *= array[i];
  }
  return s;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let s = 1;
  if (a == 0){
    return 1;
  } else{
    for(let i = 1; i <= a; i++){
      s *= i;
    }
  }
	return s;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
