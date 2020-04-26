// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // base case: 
  if (n === 0) {
    return 1;
  // recursive case:
  // save: n * (n - 1)
  // recurse to reach base case    
  } else if (n < 0) {
    return null;
  } else {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // base case: array is empty
  if (!array.length) {
    return 0;
  } else {
  // recursive case:
  // save first element of array and recurse 
  return array[0] + sum(array.slice(1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  // base case: n = 1
  if (n === 1) {
    return false;
  // recursive case:
  // test: if n = 0, n is even
  } else if (n === 0) {
    return true;
  // test: is n negative
  } else if (n < 0) {
    // if true, recurse to zero using n + 2
    return isEven(n + 2);
  } else {
    // if n is positive, recurse to zero using n - 2
    return isEven(n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // recursive case: n = 0
  if (n === 0) {
    return 0;
  // recrusive case
  // test: is n negative
  } else if (n < 0) {
    // if true, save n + 1 and recurse to zero using n + 1
    return (n + 1) + sumBelow(n + 1);
  } else {
    // if n is positive, same n - 1 and recurse to zero using n - 1
    return (n - 1) + sumBelow(n - 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  // base case:
  // x is smaller: x + 1 = y
  // y is smaller: y + 1 = x
  // x and y are equal
  if (x + 1 === y || x === y + 1 || x === y) {
    return [];
  // recursive case
  // test: x is greater than y
  } else if (x > y) {
    // if true, create list variable  that is result of recursing using x and 
    // y + 1
    var list = range(x , y + 1);
    // push y + 1 into list array
    list.push(y + 1);
    // return list
    return list;
  } else {
    // if x is less than y, create list variable that is result of recursing 
    // using x + 1 and y
    var list = range(x + 1, y);
    // place x + 1 at the beggining of the list array
    list.unshift(x + 1);
    // return list
    return list;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // base case: exp = 0
  if (exp === 0) {
    return 1;
  // recursive case
  // test: is exp is negative
  } else if (exp < 0) {
    // if true, return the inverse result of base * recursive exponent calll 
    return 1 / (base * exponent(base, -exp - 1));
  }  else {
    // if exp is positive, return result of base * recursive exponent call
    return base * exponent(base, exp - 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // base case: n = 2 or n = 1, n < 2
  if (n === 2 || n === 1) {
    return true;
  // test: is n less than 2
  } else if (n < 2) {
    // if true, return false
    return false;
  // recursive case
  // recurse until n is 2 or lower
  } else {
    return powerOfTwo(n/2);
  }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // base case: string is empty
  if (!string.length) {
    return '';
  // recursive case
  // return the last character of string and recurse on the remaining characters
  } else {
    return string[string.length-1] + reverse(string.slice(0, string.length-1));
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // remove spaces from string and set everything to lower case
  string = string.replace(' ', '').toLowerCase();
  // create variable that stores length of string
  let len = string.length;
  // base case: string is empty
  if (len === 0) {
    return true ;
  // recursive case
  // test: does first character of string NOT equal last character of string
  } else if (string[0] !== string[len - 1]) {
    // if true, return false
    return false;
  } else {
    // slice off first and last characters of string and recurse
    return palindrome(string.slice(1).slice(0, len - 2));
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  // base case: y can only fit into x once
  if (x - y <= y) {
    // returns remainder
    return x - y;
  // recursive case
  // remove one y from x and recurse using new value of x and y
  } else {
    return modulo((x-y), y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// line 203: base case: y = 0
// line 205: recursive case
// line 205: test: is y negative  
// line 206: if true, save - x and recurse using y + 1  
// line 207: if y is positive, save x and recurse using y - 1    

var multiply = function(x, y) {
  if(y === 0) {
    return 0;
  } else if (y < 0) {
    return -x + multiply(x, y + 1);
  } else  {
    return x + multiply(x, y - 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // base case: the first characters of str1 and str1 are not equal
  if (str1[0] !== str2[0]) {
    // return false if true
    return false;
  // return true if str1 and str2 are empty
  } else if (str1.length === 0 & str2.length === 0){
    return true; 
  // recursive case
  // remove first characters of str1 and str2 and recurse
  } else {
    return compareStr(str1.slice(1), str2.slice(1));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  // create empty arr variable
  var arr = [];
  // base case: str is empty
  if(!str.length) {
      return arr;
  }
  // recursive case
  // push first character of str into arr
  arr.push(str[0]);
  // set arr to result of concatinating arr and a recursive call of str
  arr = arr.concat(createArray(str.slice(1)));
  // return arr
  return arr;
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  // create empty arr variable
  var arr = [];
  // base case: arr is empty
  if (array.length === 0) {
    return arr;
  } 
  // recursive case
  // remove the last element from array and push it into arr
  arr.push(array.pop());
  // set arr equal to the result of concatinating arr and a recursive call of 
  // array
  arr = arr.concat(reverseArr(array));
  // return arr
  return arr;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // create empty array variable
  let array = [];
  // base case: array is empty
  if (length === 0) {
    return array;
  // recursive case
  } else {
    // push value into array
    array.push(value);
    // save result of concating recursive call onto array
    return array.concat(buildList(value, length - 1));
  }
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // base case: array is empty
  if (!array.length) {
    return 0;
  // recursive case
  // test: does first element of array equal value
  } else if (array[0] === value) {
    // if true, save 1 + result of recursive call 
    return 1 + countOccurrence(array.slice(1), value);
  } else {
    // otherwise, remove first element of array and recurse
    return countOccurrence(array.slice(1), value);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // create empty array variable arr
  let arr = [];
  // base case: array is empty
  if (!array.length) {
    return arr;
  // recursive case
  } else {
    // push result of invoking callback on first element of array into arr
    arr.push(callback(array[0]));
    // save arr concatenated with recursive rMap call
    return arr.concat(rMap(array.slice(1), callback));
  }
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // base case: n is less than zero or n = 1
    if(n < 0) {
    	return null;
    } else if(n === 1) {
		return 1;
	}
	// recursive case: save sum of recursively calling nthFibo twice
  	return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  // create empty array variable arr
  let arr = [];
  // base case: input is empty
  if(!input.length) {
    return arr;
  // recursive case
  } else {
    // capitalize first element of input and push it into array
    arr.push(input[0].toUpperCase());
    // save arr concatenated with results of recursive function call
    return arr.concat(capitalizeWords(input.slice(1)));
  }
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // create empty array variable arr
  let arr = [];
  // base case: array is empty
  if (!array.length) {
    return arr;
  // recursive case
  } else {
    // capitalize first letter of first element of array, combine it with the 
    // rest of the word, and push it into arr
    arr.push(array[0][0].toUpperCase() + array[0].slice(1));
    // save arr concatenated with recursive function call
    return arr.concat(capitalizeFirst(array.slice(1)));
  }
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  // creates a new variable that, if an obj parameter is present, consists of the obj
  // parameter. if no obj parameter is present, is an empty object.
  let returnObj = Array.from(arguments)[1] || {};
  // stop recursing when string is empty
  if (!str.length) {
    return returnObj;
  // test: does returnObj not have a key of the current letter? 
  } else if (!returnObj[str[0]]) {
    // if true, create key of current letter and set value equal to 1
    returnObj[str[0]] = 1;
  // otherwise, iterate the count of current letter in returnObj
  } else {
    returnObj[str[0]]++;
  }
  // recurse with first letter of str removed and returnObj fed as the obj parameter
  return letterTally(str.slice(1), returnObj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  // create empty array variable
  let arr = [];
  // stop recursing when list is empty and return array variable
  if (!list.length) {
    return arr;
  // test: does first element of list equal the second element
  } else if (list[0] === list[1]) {
    // if true, recurse function with first element of list removed
    return compress(list.slice(1));
  // otherwise:
  } else {
    // push first element of list into arr
    arr.push(list[0]);
    // concatenated arr with recursed compress call with first element of 
    // list removed
    return arr.concat(compress(list.slice(1)));
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // create empty array variable arr
  let arr = [];
  // stop recursing when array is empty and return arr
  if (!array.length) {
    return arr;
  // test: is first element of array 0 AND does it equal second element of array
  } else if (array[0] === 0 && array[0] === array[1]){
    // if true, slice off first element of array and recurse
    return minimizeZeroes(array.slice(1));
  // otherwise:
  } else {
    // push first element of array into arr
    arr.push(array[0]);
    // concatenate arr with recursive minimizeZeroes call with first element of
    // array removed
    return arr.concat(minimizeZeroes(array.slice(1)));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  // stop recursing when array is empty and return arrary
  if (!array.length) {
    return array;
  // test: is first element of array negative
  } 
  if (array[0] < 0) {
    // if true, set it to positive
    array[0] = -array[0];
  }
  // test: is next element of array positive
  if (array[1] > 0) {
    // if true, set it to negative
    array[1] = -array[1];
  }
  // concatenate first two modified values onto recursive alternateSign call 
  // first two elements of array removed
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // end recursion if string is empty and return empty string
  if (!str.length) {
    return '';
  // test: is first character of string a number
  } else if (!isNaN(str[0])) {  
    // if true, replace number with word equivalent and recurse 
    switch(str[0]) {
      case '1':
        return 'one' + numToText(str.slice(1));
      case '2':
        return 'two' + numToText(str.slice(1));
      case '3':
        return 'three' + numToText(str.slice(1));
      case '4':
        return 'four' + numToText(str.slice(1));
      case '5':
        return 'five' + numToText(str.slice(1));
      case '6':
        return 'six' + numToText(str.slice(1));
      case '7':
        return 'seven' + numToText(str.slice(1));
      case '8':
        return 'eight' + numToText(str.slice(1));
      case '9':
        return 'nine' + numToText(str.slice(1));
    }
  }
  // save first character of string and recurse
  return str[0] + numToText(str.slice(1)); 
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
