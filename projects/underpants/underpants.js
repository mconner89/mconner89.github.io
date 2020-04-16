// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// initializing variable called _ and assigning it to an object literal
// essentially creating methods
var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

// {identity : function(value)}
_.identity = function(value) {
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// type out an object {typeof: function (value)}
_.typeOf = function(value) {
    // check if value input is an array
    if (Array.isArray(value) == true) {
        // if true, return 'array'
        return 'array';
    // check if value input is null
    } else if (value === null) {
        // if true, return 'null'
        return 'null';
    } else {
        // return type of value as string
        return typeof(value);
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// adding in arguments to first function
_.first = function(array, number) {
    // initialize empty array variable
    var myArray = [];
    // test: array input is not an array
    if(!Array.isArray(array)) {
        // if true, return empty array
        return [];
    // test: is number is not given OR is not a number
    } else if(number == undefined || number.isNaN == true) {
        // if either are true, return the first element of array
        return array[0];
    // test: is number larger than the amount of elements in array
    } else if (number > array.length) {
        // if true, return array
        return array;
    } else {
        // for loop that loops through array
        // start: 0
        // stop: number input
        // increment by 1 each loop
        for(var i = 0; i < number; i++) {
            // push the value of the ith element of array input into the myArray
            // array
            myArray.push(array[i]);
        }
    }
    // return myArray
    return myArray;
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    // initialize myArray to an empty array
    let myArray = [];
    // test: is array input not an array OR is it a number less than zero
    if (!Array.isArray(array) || number < 0) {
        // if true, return empty array
        return [];
    // test: is number input not given or not a number
    } else if (number == undefined || number.isNaN == true) {
        // if true, return the last element of array input
        return array[array.length - 1];
    // test: is number input longer than entire array
    } else if (number > array.length) {
        // if true, return array input
        return array;
    } else {
        // loop through array input backwards
        // start: last element of array
        // stop: first element of array
        // decrement by one each loop
        for (let i = array.length - 1; i > 0; i--) {
            // place the ith element of array input at the beginning of the 
            // myArray array each loop
            myArray.unshift(array[i]);
        }
    }
    // return myArray
    return myArray;
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (array, value) {
    // loop through array input
    // start: 0
    // stop: last element of array
    // increment by 1 each loop
    for (let i = 0; i < array.length; i++) {
        // test: is value input equal to the ith element of array
        if (value == array[i]) {
            // if true, return index position of array
            return i;
        }
    }
    // if value isnt in array, return -1
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    // search array for the first instance of value input 
    // test: does the value input not occur in array input
    // if true (does not occur), return false. return true otherwise.
    return array.indexOf(value) == -1 ? false : true;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    // check if collection is array and if true, call func once for each element 
    if (Array.isArray(collection) == true) {
        // for loop that loops through collection
        // start: 0
        // end: last element of collection
        // increment by 1 each loop
        for(let i = 0; i < collection.length; i++) {
            // call func once for each element
            func(collection[i], i, collection);
        }
    // check if collection is an object and if true, call func once for each
    // property
    } else if (typeof collection == 'object') {
        // for in loop that loops through colection
        for(let key in collection) {
            // call func once for each property
            func(collection[key], key, collection);
        }
    }
};

// stop here 4/13

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function (array) {
    // initialize newArray variable to an empty array
    let newArray = [];
    // for loop that loops through array
    // start: 0
    // stop: last element of array
    // increment by 1 each loop
    for(let i = 0; i < array.length; i++) {
        // take value stored in ith element of array and search array for first 
        // instance of that value
        let first = _.indexOf(array, array[i]);
        // check if ith element is the first element to contain its value
        if(first == i) {
            // if true, it is not a duplicate and is pushed to newArray
            // if false, i was a duplicate and is excluded from newArray
            newArray.push(array[i]);
        }
    }
    // return newArray
    return newArray;
};
  
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func) {
    // created empty array
    let myArray = [];
    // looping through array input
    // start: 0
    // stop: end of array
    for(var i = 0; i < array.length; i++) {
        // testing if calling func input equals true
        if(func(array[i], i, array) == true) {
            // if true, pushes ith element of array into myArray
            myArray.push(array[i]);
        }
    }
    // return myArray
    return myArray;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
    // creating an empty array
    var reject = [];
    // looping through our array input
    for (let i = 0; i < array.length; i++) {
        // if we run the filter method on the array and it returns falsey,
        if(_.filter(array, func) < array[i]) {
            reject.push(i);
        }
    }
    return reject;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
    // created empty array
    var trueArray = _.filter(array, func);
    var falseArray = [];
    // looping through array input
    // start: 0
    // stop: end of array
    // for(var i = 0; i < array.length; i++) {
    //     // testing if calling func input equals true
    //     if(func(array[i], i, array) == true) {
    //         // if true, pushing ith element of array into myArray
    //         trueArray.push(array[i]);
    //     }
    // }
    for(var x = 0; x < array.length; x++) {
        // testing if calling func input equals true
        if(func(array[x], x, array) == false) {
            // if true, pushing ith element of array into myArray
            falseArray.push(array[x]);
        }
    }
    // return myArray
    var finalArray = [];
    finalArray.push(trueArray);
    finalArray.push(falseArray);
    return finalArray;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
    var newArray = [];
    // check if collection is array and if true, call func once for each element 
    if (Array.isArray(collection) == true) {
        // for loop that loops through collection
        // start: 0
        // end: last element of collection
        // increment by 1 each loop
        for(let i = 0; i < collection.length; i++) {
            // call func once for each element
            newArray.push(func(collection[i], i, collection));
        }
    // check if collection is an object and if true, call func once for each
    // property
    } else if (typeof collection == 'object') {
        // for in loop that loops through colection
        for(let key in collection) {
            // call func once for each property
            newArray.push(func(collection[key], key, collection));
        }
    }
    return newArray;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop) {
    // initialize new array to map function
    // pass in array and a function that takes a parameter of object
    // _.map will take an array and a function, perform the function on the array, 
    // and return an array of the altered values
    // passed a function that loops through each object at each element of the array
    let newArray = array.map(function(obj) {
        // loop through each object 
        for(var key in obj) {
            // return the key associated with the prop input of each object
            return obj[prop];
           }
    });
    // return newArray
    return newArray;
};

// stop here 4/14

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
    // test: is collection an array
    if (Array.isArray(collection) === true) {
        // if true, for loop that loops through collection
        // start: 0
        // stop: end of collection
        // increment by 1 each loop
        for(let i = 0; i < collection.length; i++) {
            // test: has a func input NOT been passed
            if (func == undefined) {
                // if true, test: is any element of collection falsey
                if (collection[i] == false) {
                    // if true, return false
                   return false;
               } 
               // return true if func input is not passed and every element of
               // collection is truthy
               return true;
            // test: does calling function on any element of collection return
            // false
            } else if (func(collection[i], i, collection) == false) {
                // if true, return false
                return false;
            }
        }
    // test: is collection an object
    } else if (typeof(collection) === 'object') {
        // if true, for-in loop that loops through collection
        for (let key in collection) {
            // test: does calling func on any property of collection return 
            // false
            if (func(collection[key], key, collection) == false) {
                // if true, return false
                return false;
            }
        }
    }
    // return true
    return true;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    // test: is collection an array
    if(Array.isArray(collection) == true) {
        // if true, for loop that loops through collection
        // start: 0
        // stop: end of collection
        // increment by 1 each loop
        for(let i = 0; i < collection.length; i++) {
            // test: was func not passed
            if(func == undefined) {
                // if true, test: does any element of collection evaluate to
                // truthy
                if(collection[i] == true) {
                    // if true, return true;
                    return true;
                }
                // if no element of collection evaluates to truthy, return false
                return false;
            // test: does calling function on any element of collection return
            // true
            } else if(func(collection[i], i, collection) == true) {
                // if true, return true
                return true;
            }
        } 
    // test: is collection an object
    } else if(typeof collection === 'object') {
        // if true, for loop that loops through collection
        for (let key in collection) {
            // test: does calling func on any property of collection return 
            // true
            if (func(collection[key], key, collection) == true) {
                // if true, return true
                return true;
                }
            }
    }
    // return false
    return false;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) {
    // declare a prevRes variable
    let prevRes;
    // test: was seed paramater not was passed
    if(seed === undefined) {
        // if true, set prevRes to value of first element
        prevRes = array[0];
        // loop through array input
        // start: 1
        // stop: last element of array
        for(let i = 1; i < array.length; i++) {
            // set prevRes equal to the value obtained by executing func on the 
            // next element of the array
            prevRes = func(prevRes, array[i], i);
        } 
    } else {
        // set prevRes value to seed input
        prevRes = seed;
        // loop through array
        // start: 0
        // stop: end of array
        // increment by 1 each loop
        for(let i = 0; i < array.length; i++) {
            // set prevRes equal to the value obtained by executing func on the 
            // next element of the array
            prevRes = func(prevRes, array[i], i);
        }
    }
    // return prevRes
    return prevRes;
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(...objects) {
    // convert parameters to an array
    let objectArray = arguments;
    let test = objectArray[0];
    // loop through array
    for(let i = 1; i < arguments.length; i++) {
        // take first object and pass ith object into it
        Object.assign(test, objectArray[i]);
    }
    return test;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
