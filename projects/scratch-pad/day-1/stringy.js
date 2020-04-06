// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    return(string.length);
    // returns the lenght of the string parameter
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    return(string.toLowerCase());
    // returns the string parameter with all characters set to lowercase
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    return(string.toUpperCase());
    // returns the string parameter with all characters set to uppercase
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    string = string.replace(/ /gi, '-');
    // executes the replace method on the string parameter
    // backslashes are delimiters that tell where the regex begins and ends
    // in this case, we are searching for a space character
    // g indicates that we are searching globally, that is, searching the entire string
    // i inddicates that our search is case-insensitive
    return(string.toLowerCase());
    // returns the string parameter with all characters set to lowercase
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    var firstLetter = string[0].toLowerCase();
    // initializes a new variable that contains the first character in the string
    // parameter set to lower-case
    var secondLetter = char.toLowerCase();
    // initializes a new variable that contains the character parameter set to lower-case
    if (firstLetter == secondLetter) {
    // begins if chain that tests if firstLetter is loosely equal to secondLetter
        return(true);
        // returns true if true
    } else {
        return(false);
        // returns false otherwise
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    var firstLetter = string[string.length - 1].toLowerCase();
    // initializes a new variable that contains the last character in the string
    // parameter set to lower-case
    var secondLetter = char.toLowerCase();
    // initializes a new variable that contains the character parameter set to lower-case
    if (firstLetter == secondLetter) {
    // begins if chain that tests if firstLetter is loosely equal to secondLetter
        return(true);
        // returns true if true
    } else {
        return(false);
        // returns false otherwise
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    return stringOne.concat(stringTwo);
    // returns the value of stringOne with stringTwo concatenated onto it
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // arguments creates an object containing all arguments passed to the function
    // array.from creates an array from the arguments passed to the function
    // this array is composed of one element for each character 
    return(args.join(''));
    // returns the args array as a single string, with each element of the original 
    // array not seperated by anything
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length) {
    // if statement that tests if the length of stringOne is longer than the 
    // length of stringTwo
        return(stringOne);
        // returns stringOne is true
    } else {
        return(stringTwo);
        // returns stringTwo otherwise
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    return(stringTwo.localeCompare(stringOne));
    // the localeCompare method returns a -1 if the reference string (stringTwo)
    // is before the compared string (stringOne), a 0 is they're equal, and a 1
    // if the compared string (stringOne) is before the reference string 
    // (stringTwo)
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    return(stringOne.localeCompare(stringTwo));
    // the localeCompare method returns a -1 if the reference string (stringOne)
    // is before the compared string (stringTwo), a 0 is they're equal, and a 1
    // if the compared string (stringTwo) is before the reference string 
    // (stringOne)
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
