// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (var i = 0; i < array.length; i++) {
  // start: 0
  // end: length of array parameter
    console.log(array[i]);
    // prints the element found at the i index position in the array parameter
  }
      // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (var i = array.length - 1; i >= 0; i--) {
  // start: length of array parameter - 1
  // stop: -1
    console.log(array[i]);
    // prints the element found at the i index position in the array parameter
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var keyList = [];
  // initialize empty array variable called keyList 
  for (var key in object) {
  // for in loop that stores property names in key variable as it loops through
  // the object parameter
    keyList.push(key);
    // pushes the property name stored in the key value to the keyList array
    // each time it loops over a property
  }
  return(keyList);
  // returns the keyList variable to global scope
      // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
    for (var key in object) {
    // for in loop that stores property names in the key variable as it loops
    // through the object parameter
    console.log(key);
    // prints the property name stored in the key variable each time it loops
    // over a property
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var valueList = [];
  // initializes an empty array variable called valueList
  for (var key in object) {
  // for in loop that stores property names in the key variable as it loops
  // through the object parameter
    valueList.push(object[key]);
    // pushes the value associated with the property name stored in the key
    // variable of the object parameter into the valueList array each time it
    // loops over a property
  }
  return(valueList);
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) {
  // for in loop that stores property names in the key variable as it loops
  // through the object parameter
    console.log(object[key]);
    // prints the value associated with the property name stored in the key
    // variable of the object parameter each time it loops over a property
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var pairs = [];
  // initializes an empty array variable called pairs
  for (var key in object) {
  // for in loop that stores property names in the key variable as it loops
  // through the object parameter
    pairs.push(key);
    // pushes the property names of each property into the pairs array each time
    // it loops over a property
  }
  return pairs.length;
  // returns the length of the pairs array, which contains the name of every
  // property in the object parameter
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var valueList = [];
  // initializes an empty array variable called valueList
  for (var key in object) {
  // for in loop that stores property names in the key variable as it loops
  // through the object parameter
    valueList.push(object[key]);
    // pushes the value associated with the property name stored in the key
    // variable of the object parameter into the valueList array each time it
    // loops over a property
  }
  for (var i = valueList.length - 1; i >= 0; i--) {
  // start: length of valueList array - 1 
  // end: -1
    console.log(valueList[i]);
    // prints the element of valueList found at the i index position every time
    // a loop is completed
  }
    // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
