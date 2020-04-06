// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return(function test(value) {
    // returns a function that accepts one parameter called value
        return(value > base);
        // returns the result of testing if value is greater than base
    });
        // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return(function test(value){
    // returns a function that accepts one parameter called value
        return(value < base);
        // returns the result of testing if value is less than base
    });
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return(function test(String) {
    // returns a function that accepts one parameter called String
        var test1 = String.toLowerCase();
        // initializes a variable that is the String parameter converted to lowercase
        var test2 = startsWith.toLowerCase();
        // initializes a variable that is the startsWith parameter converted to lowercase
        return(test1[0] === test2);
        // returns the result of a test that checks if the first character of the test1
        // variable is strictly equal to the test2 variable
    });
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return(function test(String) {
    // returns a function that accepts one parameter called String
       var test1 = String.toLowerCase();
       // initializes a variable that is the String parameter converted to lowercase
       var test2 = endsWith.toLowerCase();
       // initializes a variable that is the endsWith parameter converted to lowercase
       return(test1[test1.length-1] === test2);
       // returns the result of a test that checks if the last character of the test1
       // variable is strictly equal to the test2 variable
    });
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
  var test = []; 
  // initializes an empty array variable called test
  for (var i = 0; i < strings.length; i++){
  // start: 0
  // end: length of strings parameter + 1
    test.push(modify(strings[i]));   
    // passes the element located at the i position of the strings parameter to 
    // the modify parameter, then pushes the result of that into the test array
  }
  return(test);
  // returns the test variable
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    var result = true;
    // initializes a result variable and sets it equal to true
    for (var i = 0; i < strings.length; i++) {
    // start: 0
    // end: length of strings parameter + 1
        if (test(strings[i]) === false) {
        // tests if the element at the i position of the strings array returns
        // false when fed into the test function
            result = false;
            // reinitializes result to equal false if any results are false
            break;
            // ends the loop if any results are false
        }
    }
    return(result);
    // returns result
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}