// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // Start: 1
    // End: 100
    for (var i = 1; i <= 100; i++) {
        // If chain that first assesses if a number is a multiple of both three and 5
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz');
        // Next checks if divisible by 3 and prints "Fizz" instead if true
        } else if (i % 3 === 0) {
            console.log('Fizz');
        // Next checks if divisible by 5 and prints "Buzz" instead if true
        } else if (i % 5 === 0) {
            console.log('Buzz');
        // Finally, prints the number if it is not divisible by 3 or 5
        } else {
            console.log(i);
        }
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}