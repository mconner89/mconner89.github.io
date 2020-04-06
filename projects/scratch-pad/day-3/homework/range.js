// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    var final = [];
    // initializes an empty array variable called final
    if (start <= end) {
    // if chain that checks if start parameter is less than or equal to the 
    // end parameter
       for (var i = start; i <= end; i++) {
       // if true, starts a for loop
       // start: value of start paramater
       // stop: 1 greater than the value of the end parameter
            final.push(i);
            // pushes the value of i onto the end of the final array each loop
        }
        return(final);
        // returns the final variable to parent scope
    } else {
    // executes if first if check is false
        for (var i = end; i <= start; i++){
        // start: value of end parameter
        // stop: 1 greater than value of start parameter
            final.unshift(i);
            // unshifts the value of i onto the beginning of the final array 
            // each loop
        }
        return(final);
        // returns the final variable to parent scope
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}