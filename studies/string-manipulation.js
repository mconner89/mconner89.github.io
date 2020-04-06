/**
 * String Manipulation
 * 
 * 0. Intro
 * Strings are very common when using Javascript. As such, there are several built-in
 * operators and methods that can be used to change or return data about string variables.
 * 
 * 1. With operators
 * There are two string operator and both are used to concatenate strings. The + operator 
 * works similarly to the arithmatic + operator, while the += operator also works 
 * similarly to the arithmatic += operator. The plus operator is used to combine two 
 * strings into a new string. Note that the strings will be combined exactly as they are
 * entered. That is, strings will not have spaces between them unless explicitly coded 
 * to. The += operator is used to add a second string to an existing string. While faster
 * in some cases, the += operator is not nearly as flexible as the + operator. 
 * 
 * 2. With string methods
 * String methods are, well, methods that help you work with strings. These are appended 
 * to the end of a string variable and perform various actions within that string. The 
 * .length method returns the length of a string. The .toLowerCase() and .toUpperCase 
 * methods convert the entire string to lowercase and upperase, respectively. The .concat
 * method will combine the text of two or more strngs and return a new string. The 
 * .split() method will split a single string into an array of strings each time it 
 * encounters the character(s) in the parentheses. If no characters are entered, the 
 * entire string will be returned as a single element of an array. If ('') is entered,
 * each character of the original string will be entered into its own element in the 
 * array that is returned. The .charAt() method returns a character located at the
 * requested index location in a string. This method requires the desired index position 
 * as a parameter. The .slice() method will remove a section of string from an existing
 * string and return a new string composed of what was removed. This method requires 2 
 * parameters: the index position to begin at and the index position to end at. If the 
 * parameters are negative,the position is counted from the end of the string. Note that
 * the ending position is NOT included in the returned string. The .substring() method 
 * accepts a starting and ending index, then returns the portion of a string between 
 * those two indexes. This method is almost identical to the .slice() method, but the 
 * .slice() method can accept negative indexes, whereas the .substring() method cannot. 
 * The .substr() method is again very similar to the slice method, the only difference 
 * being that you use the second parameter to specify the length to be removed as opposed
 * to an index position. The .substr() method can also accept negative indexes. The 
 * .indexOf() and .lastIndexOf() methods function similarly. The .indexOf() method 
 * returns the starting index of the first occurrence a specified substring from within 
 * another string, while the .lastIndexOf() method does the same thing, but returns the 
 * last occurrence of the specified substring. Both of these methods will return a -1 if 
 * the specified substring does not occur. Both of these methods also require only one 
 * parameter, but accept two. The first parameter is the string that you're searching 
 * for. Note that this IS case-sensitive. The second, optional parameter, is the index 
 * position that you would like to begin the search from. If no index position is 
 * specified, the search will begin from either the beginning of the string (indexOf) or 
 * the end of the string (lastIndexOf). The.search() method searches a string for a match
 * of a regular expression, then returns the index of that match. If no match is found, 
 * it returns a -1. It functions similarly to .match, but less complex. It is also 
 * similar to .indexOf, but the .search method cannot accept a second argument. The 
 * .replace method is used to match a regular expression to a string, then replace the 
 * matched substring with a new substring. All expressions can be replace by using a /g 
 * flag on the search expression. The .match() method will search a string for match 
 * against a regular expression. If the g (global) modifier is included in the initial 
 * parameter, it will search the entire string and return an array composed of each 
 * occurrence of the desired expression. if it is not included, only the first occurrence
 * of the desired expression will be returned. Note that the  parameter must be enclosed 
 * in both parentheses and backslashes: (//g) 
 */
 
/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                    1. With operators
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

console.log('fat' + 'cat');
// prints => fatcat

console.log('fat' + ' ' + 'cat');
console.log('fat ' + 'cat');
console.log('fat' + ' cat');
// prints => fat cat

var first = 'fat', second = 'cat';
// initializes two variables, first to the value of 'fat' and second to the value of 'cat'

var someStrings = first + second;
// initializes someStrings to the value of first + second

console.log(someStrings);
// prints => fatcat

var withSpaces = first + ' ' + second;
// initializes withSpaces to the value of first + ' ' + second.

console.log(withSpaces);
// prints => fat cat

first += second;
// adds the value of first to the value of second and sets this new value as the value of 
// first

console.log(first);
// prints => fatcat

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                 2. With string methods 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

var myString = 'This Is A String Variable';
// initializes myString to the value of 'This Is A String Variable'

console.log(myString);
// prints => This Is A String Variable
 
var stringLength = myString.length;
// initializes stringLength to the value equal to the length of myString

console.log(stringLength, myString.length);
// prints => 25 25

var lowerString = myString.toLowerCase(), upperString = myString.toUpperCase();
// initializes two variables, lowerString to the value equal to myString when all 
// characters have been converted to lower case, and upperString to the value equal to 
// myString when all the characters have been converted to upper case.

console.log(lowerString, myString.toLowerCase());
// prints => this is a string variable this is a string variable

console.log(upperString, myString.toUpperCase());
// prints => THIS IS A STRING VARIABLE THIS IS A STRING VARIABLE

var concatString = myString.concat("that has been concatenated");
// initializes concatString to the value of myString plus "that has been concatenated"

console.log(concatString);
// prints => This Is A String Variablethat has been concatenated

var concatTwice = myString.concat(' ', 'that has been concatenated twice');
// initializes concatTwice to the value of myString plus " " plus "that has been 
// concatenated twice"

console.log(concatTwice);
// prints => This Is A String Variable that has been concatenated twice

var splitScreen = myString.split(' ');
// initializes splitScreen to an array where each element is a substring of myString 
// that was generated at every occurrence of the ' ' character.

console.log(splitScreen);
// prints => [ 'This', 'Is', 'A', 'String', 'Variable' ]

var splitScreen2 = myString.split();
// initializes splitScreen to an array that contains myString as its only element

console.log(splitScreen2);
// prints => [ 'This Is A String Variable' ]

var splitScreen3 = myString.split('');
// initializes splitScreen to an array that contains each character of the myString 
// value as a seperate element

console.log(splitScreen3);
// prints => [ 'T','h','i','s',' ','I','s',' ','A',' ','S','t','r','i','n','g',
//             ' ','V','a','r','i','a','b','l','e' ]

var charString = myString.charAt(5);
// initializes charString to a variable that contains the value in the 5th index position
// of myString

console.log(charString);
// prints => I

var sliceString = myString.slice(5, 7);
// initializes sliceString to a variable that contains the values in the 5th and 6th 
// index positions of myString

console.log(sliceString);
// prints => Is

var sliceString2 = myString.slice(-20, -18);
// initializes sliceString to a variable that contains the values in the 20th from last 
// index and the 19th from last index of myString

console.log(sliceString2);
// prints => Is

var subString = myString.substring(5, 7);
// initializes subString to a variable that contains the values in the 5th and 6th 
// index positions of myString

console.log(subString);
// prints => Is

var substrString = myString.substr(5, 2);
// initializes substrString to a variable that contains two values from the myString 
// variable, starting at the 5th index position

console.log(substrString);
// prints => Is

var substrString2 = myString.substr(-20, 2);
// initializes substrString2 to a variable that contains two values from the myString 
// variable, starting at the -20th index position

console.log(substrString2);
// prints => Is

var firstIndex = lowerString.indexOf('is');
// initializes firstIndex to a variable that contains the index position where the first 
// instance of the string of characters 'is' begins in the variable lowerString, starting
// from index position 0.

console.log(firstIndex);
// prints => 2

var secondIndex = lowerString.indexOf('is', 3);
// initializes secondIndex to a variable that contains the index position where the first 
// instance of the string of characters 'is' begins in the variable lowerString, starting
// from index position 3.

console.log(secondIndex);
// prints => 5

var searchString = lowerString.search('is');
// initializes searchString to a variable that contains the index position where the first 
// instance of the string of characters 'is' begins in the variable lowerString, starting
// from index position 0.

console.log(searchString);
// prints => 2

var replaceString = lowerString.replace('this', 'here');
// initializes replaceString to a variable that is equal to the lowerString variable, but 
// with the first instance of 'this' replaced with 'here'

console.log(replaceString);
// prints => here is a string variable

var replaceString2 = lowerString.replace(/is/g, 'eez');
// initializes replaceString to a variable that is equal to the lowerString variable, but 
// with the every instance of 'this' replaced with 'here'

console.log(replaceString2);
// prints => theez eez a string variable

var matchString1 = lowerString.match(/is/);
// initializes matchString1 to an array that consists of the first occurrence of the 
// expression 'is' in the lowerString variable

console.log(matchString1);
// prints =>[ 'is',index: 2,input: 'this is a string variable',groups:undefined ]

var matchString2 = lowerString.match(/is/g);
// initializes matchString2 to an array that consists of one element filled with the 
// expression 'is' for each occurrence of the element 'is' in the lowerString variable

console.log(matchString2);
// prints => [ 'is', 'is' ]