////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// range function that accepts three parameters
function range(start, end, step) {
  // create empty array parameter
  let array = [];
  // if loop that tests if start input does not equal end input
  if(start != end) {
    // if loop that tests if step input is greater than 0
    if(step > 0) {
      // if true, starts for loop
      // start: start input
      // stop: end input
      // inrements by step input
      for(let i = start; i <= end; i += step) {
        // pushes i onto end of array variable each loop
        array.push(i);
      }   
    // if statement that checks if i is not greater than zero
    } else if (step < 0) {
      // if true, starts for loop
      // start: start
      // stop: end 
      // decrements by step input
      for(let i = start; i >= end; i -= step) {
        // pushes i onto end of array variable each loop
        array.push(i);
      }
    } else {
      // for statement that runs if i is neither greater than or less than 
      // start: start
      // end: end
      // increments by 1 each loop
      for(let i = start; i <= end; i++) {
        // pushes i onto end of array variable each loop
        array.push(i);
      }
    }
  }
  // returns array
  return(array);
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// sum function that accepts one parameter: array
function sum(array) {
  // initialize sum to value of 0
  let sum = 0;
  // for loop that loops through array
  // start: 0
  // stop: last element of array
  // increment i by 1 each loop
  for(let i = 0; i < array.length; i++) {
    // add value at i element of array input to sum value
    sum += array[i];
  }
  // return sum
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// revereseArray function that accepts one parameter: array
function reverseArray(array) {
  // initialize newArray to an empty array
  let newArray = [];
  // for loop that loops through array
  // start: last element of array
  // stop: first element of array
  // decrement i by 1 each loop
  for (let i = array.length - 1; i >= 0; i--) {
    // push value at i element of array to end of newArray
    newArray.push(array[i]);
  }
  // return newArray
  return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// reverseArrayInPlace function that accepts one parameter: array
function reverseArrayInPlace(array) {
  // for loop that loops through array
  // start: 0
  // stop: i = half the number of elements in array
  // increment i by 1 each loop
  for(let i = 0; i < Math.floor(array.length / 2); i++) {
    // initialize first to the ith element of array
    let first = array[i];
    // sets the ith element of array to the opposite element of array
    array[i] = array[array.length - 1 - i];
    // sets the current position of array to first
    array[array.length - 1 - i] = first;
  }
  // return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// arrayToList function that accepts one parameter: array
function arrayToList(array) {
  // initializes list to null
  let list = null;
  // for loop that loops through array
  // start: end of array
  // stop: beginning of array
  // decrement by 1
  for (let i = array.length - 1; i >= 0; i--) {
    // push an object onto the list variable
    list = {value: array[i], rest: list};
  }
  // returns list
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// listToArray function that accepts one parameter: list
function listToArray(list) {
  // initialize array to empty array
  let array = [];
  // for loop that loops through list
  // start: list
  // stop: i
  // increment by rest
  for(let i = list; i; i = i.rest) {
    // push i.value onto array each loop
    array.push(i.value);
  }
  // return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// prepend function that accepts two parameters: value and list
function prepend(value, list) {
  // returns a new list 
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// nth function that accepts two parameters: list and n
function nth(list, n) {
  // returns undefined if no element of list
  if (!list) return undefined;
  // returns the element at given position in list
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// deepEqual function that accepts two parameters: a and b
function deepEqual(a, b) {
  // if a strictly equals b, returns true
  if (a === b) return true;
  // if a or be are null or return object, return false
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;
  // initializes keysA and keysB
  let keysA = Object.keys(a), keysB = Object.keys(b);
  // if keysA and keysB arent the same length, return false
  if (keysA.length != keysB.length) return false;
  // for loop that loops through the keys of keysA
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  // returns true if all else fails
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
