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
    for (var i = 1; i <= 100; i++) {    
    // Start: 1
    // End: 100
        if (i % 5 === 0 && i % 3 === 0) {
        // If chain that first assesses if a number is a multiple of both three and 5
            console.log('FizzBuzz');
            // if true, prints => FizzBuzz
        } else if (i % 3 === 0) {            
        // If false, checks if divisible by 3 
            console.log('Fizz');
            // if true, prints => Fizz
        } else if (i % 5 === 0) {            
        // If false, checks if divisible by 5
            console.log('Buzz');
            // if true, prints => Buzz
        } else {            
            console.log(i);
            // if no checks pass, prints => i
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