/**
 * Datatypes
 * 
 * 0. Introduction
 * Variables can hold many different types of data. Javascript is "dynamically typed", which 
 * means that although data types exist, a single varialbe is not bound to any of them. 
 * 
 * 1. Number
 * Data that is of the number type is composed of either integer or floating-point numbers. 
 * Math operations such as addition and multiplication can be carried out on data of this 
 * type.
 * 
 * 2. String
 * Data that is meant to be stored as text is typically stored as string data. All string 
 * data must be surround be quotes, either "double" or 'single'. There isn't any real 
 * difference between the two, but usage must be consistant in the same variable. A third 
 * type of quotation mark used to denote strings is the `backtick` (typically found on the 
 * tilde key). Backticks are considered extended functionality quotes, meaning that they let
 * us embed other variables and expressions into a string by wrapping them in ${}. Backticks 
 * can also be used to let strings span multiple lines, which normal quotes can not do.
 * 
 * 3. Boolean
 * Data that is of the boolean type can only be one of two values: true or false. Boolean 
 * values can be thought of as denoting "yes/no" or "on/off" comparisons. Comparison 
 * operations also return booleans as the result.
 * 
 * 4. Array
 * Arrays are a special type of object that can be used to store multiple values in a single 
 * variable. These values can be any of the other data types, even other arrays. Arrays are 
 * denoted brackets after a var statement, known as an array literal. Values, also known as 
 * elements, stored in arrays are referenced using an index number, which starts at 0. That 
 * is, the first element in an array has an index number of 0, the second element has an 
 * index number of 1, so on and so forth. These index numbers can be referencedusing 
 * bracket notation to return a specific element from the array or createa new variable 
 * using specific elements from an array. You can use this same kind of notation to change a
 * specific element in an array. Elements can also be added to arrays using push() and 
 * unshift() methods. The push() method adds an element to the end of an array, while the 
 * unshift() method adds an element to the beginning of an array. Similar to push and 
 * unshift, pop() and shift() methods can be used to remove elements from the end and 
 * beginning of an array, respectively. The pop() and shift() methods return the values of 
 * the elements that were removed from the array, so they can be used to create new 
 * variables from elements of an array.
 * 
 * 5. Object
 * A type of variable that can contain many values. Objects are created using the var 
 * keyword and an object literal {}. Spacing and line breaks do not influence the 
 * values of an object. The values that are contained within objects are then written using 
 * key:value pairs. That is, each value consists of a key, such as "animals" and a value, 
 * such as "cat". Each key can only have one value, but that value can be an array, a 
 * number, a function, a boolean, or even another object. Key value pairs are added using 
 * the format key:value. Each key:value pair must be seperated by a comma. Each pairing of 
 * a key and its value is known as a property. That is, our "animals" property has a 
 * property values of 'cat'. These properties can be accessed using the same bracket 
 * notation we use to access elements of an array, or by using dot notation. If using 
 * bracket notation, the name of the key you're trying to call must be enclosed in brackets 
 * AND quotes. If using dot notation, the name of the key with no quotes must be used. This 
 * logic can be chained indefinitely to access objects within objects and combined with 
 * bracket notation to access arrays within objects. Both bracket and dot notation can also 
 * be used to add properties to an object. The .hasOwnProperty command checks to see if a 
 * property exists in an object, while the Object.keys() command lists all of the keys in 
 * an object. The delete keyword can be used to delete a property from an object.
 * 
 * 6. Function
 * A function is a block of code that performs a particular task. Functions are reusable. 
 * They accept an input, process that input, and return a new data value. It is good 
 * practice to list as much information as possible about a function before defining that 
 * function, typically seen as an IOCE comment block. This block of text, which is 
 * commented out, lists a functions inputs, outputs, constraints, and edge cases. A 
 * function declaration consists of a name, a parameter(s), the function body, and a return 
 * statement. The parameters are surrounded by parentheses () and the body and return 
 * statement are surrounded by curly brackets {}. A function is called using its name, 
 * followed by the parameters in parentheses. This invokes the code in the function body. 
 * Note that defining a function and calling a function are two different things. A 
 * function must be defined before it is called. Functions can take parameters, but they 
 * also do not have to have parameters to run. Parameters are placeholders for arguments 
 * that are later 'passed' or given to the function when it is called. A function must have 
 * a return statement to return a value to the parent scope. 
 * 
 * 7. undefined
 * A variable that has not yet been assigned a value is undefined. A function will also 
 * return undefined if a return statement is not used to return any actions to parent 
 * scope. Undefined is considered a falsy value and will evaluate to false if encountered 
 * in a boolean context.
 * 
 * 8. null
 * Represents an empty or non-existent value similar to undefined, but the null value must 
 * be assigned. Null is considered a falsy value and will evaluate to false if encountered
 * in a boolean context. Null will loosely equal undefined, but will not strictly equal
 * undefined. When checked using the typeof statement, null will return a value of 
 * 'object'. Null can also be used to empty an object by setting that object to null.
 * 
 * 9. NaN
 * This value is the result of an incorrect or undefined mathematical operation and can be 
 * thought of as a computational error. This data type is considered 'sticky', which means
 * that any further operation on NaN will only return NaN.
 * 
 * 10. Infinity and -Infinity
 * Infinity represents the mathematical concept of infinity. This is a "special" value that
 * is greater than any number. To get infinity, we can either divide by zero or we can 
 * reference it directly. When referenced directly, Infinity must be capitalized. -Infinity 
 * represents a value that is less than any other number. To get -Infinity, we can either 
 * divide a negative number by zero or we can reference it directly. When referenced 
 * directly, -Infinity must be capitalized.
 * 
 * 11. Simple and complex data types
 * There are six data types that are considered primitive, or simple. Those are:undefined,
 * boolean, number, string, BigInt, and symbol. There is only one type of complex data, and 
 * that is objects. The array and null data type are both considered objects. A primitive 
 * variable stores the actual value in the variable. This means that when you manipulate a 
 * primitive variable, you are manipulating the actual value stored in the variable. 
 * Complex data types store data using a reference value. When you manipulate complex data, 
 * you are not manipulating the object, but a reference to that object. You can use the 
 * typeof operator to determine what type of data you are working with. 
 * 
 * 12. Passing by copy vs passing by reference
 * When assigning primitive variables to other primitive variables, the value of the 
 * variable that is copied is just that: copied. The two variables are not related to each 
 * other after this act of copying occurs. Objects behave differently, however. When 
 * assigning reference values from one variable to another, the value stored in the first 
 * variable is still copied to the second. The difference is that both of these variables 
 * now point to the same reference location. These variables are now linked by this. 
 * Changes to this reference location will result in changes to both variables.
 */
 
 /* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                  1. Number
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

var myNumber = 10, yourNumber = 59.824; 
// initializes a variable called myNumber to the value of 10 and a variable called 
// yourNumber to the value of 59.824
 
console.log(myNumber, yourNumber);
// prints => 10 59.824
 
var ourNumber = myNumber + yourNumber;
// initializes a variable called ourNumber to the value of myNumber plus yourNumber
 
console.log(ourNumber);
// prints => 69.824
 
var smallNumber = ourNumber / 120;
// initializes a variable called smallNumber to the value of ourNumbder divided by 120.
 
console.log(smallNumber);
// prints => 0.5818666666666666
 
 /* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                        2. String
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
 
var myString = 'Hello there!';
// initializes a variable called myString to the value of 'Hello there!'.
 
console.log(myString);
// prints => Hello there!
 
var extString = `My favorite number is ${myNumber}`;
// initializes a variable called extString to the value of 'My favorite number is 
// myNumber'.
 
console.log(extString);
// prints => My favorite number is 10
 
 
 /* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                         3. Boolean
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
 
var myBool = true, yourBool = false;
// initializes a variable called myBool to the value of true and a variable called 
// yourBool to the value of false
 
console.log(myBool, yourBool);
// prints => true false
 
console.log(10 > 5);
// prints => true
 
console.log(5 > 10);
// prints => false
 
 /* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                  4. Array
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
 
var myArray = ['heres', 'an', 'array'];
// initializes an array variable called myArray and assigns it the values of 'heres', 
// 'an', 'array'.
 
console.log(myArray);
// prints => [ 'heres', 'an', 'array' ]
 
console.log(myArray[1]);
// prints => an

var fromArray = myArray[2];
// initializes a variable called fromArray that contains the value stored in first 
// element of the myArray variable.

console.log(fromArray);
// prints => array
 
myArray[1] = 'the';
// assigns a value of 'the' to the second element of myArray.

console.log(myArray);
// prints => [ 'heres', 'the', 'array' ]
 
myArray.push(12);
// assigns a value of 12 to the last element of myArray.
 
console.log(myArray);
// prints => [ 'heres', 'the', 'array', 12 ]
 
myArray.unshift(true);
// assigns a value of true to the first element of myArray.
 
console.log(myArray);
// prints => [ true, 'heres', 'the', 'array', 12 ]
 
myArray.pop();
// removes the value from the final element of myArray
 
console.log(myArray);
// prints => [ true, 'heres', 'the', 'array' ]
 
myArray.shift();
// removes the value from the first element of myArray

console.log(myArray);
// prints => [ 'heres', 'the', 'array' ]

var poppedEle = myArray.pop();
// initializes a variable called poppedEle, removes the value from the final element of 
// myArray and stores it in the poppedEle variable.

console.log(poppedEle);
// prints => array

var shiftedEle = myArray.shift();
// initializes a variable called shiftedEle, removes the value from the first element of 
// myArray and stores it in the shiftedEle variable.

console.log(shiftedEle);
// prints => heres

console.log(myArray);
// prints => [ 'the' ]

 /* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                          5. Objects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

var myObject = {
// initialies an object variable called myObject    
    name: 'sarah',
    // assigns myObject a name key with a value of 'sarah'
    parents: ['brad', 'amanda'],
    // assigns myObject a parents key with a value of ['brad', 'amanda'].
    age: 25,
    // assigns myObject an age key with a value of 25
    inCollege: false,
    // assigns myObject an age key with a value of false
    car: {
        make: 'volkswagen',
        model: 'jetta',
        year: 2018
    }
    // assigns myObject a car key that contains another object as its value.
    
}; 

console.log(myObject);
// prints => { name: 'sarah',
//           parents: [ 'brad', 'amanda' ],
//           age: 25,
//           inCollege: false,
//           car: { make: 'volkswagen', model: 'jetta', year: 2018 } }

console.log(myObject['parents']);
console.log(myObject.parents);
// prints => [ 'brad', 'amanda' ]

console.log(myObject.parents[1]);
// prints => amanda

console.log(myObject.car.model);
// prints => jetta

myObject.hair = 'brown';
// assigns myObject a hair property that has a value of 'brown'

console.log(myObject.hair);
// prints => brown

myObject['heightInInches'] = 68;
// assigns myObject a heightInInches property that has a value of 68

console.log(myObject['heightInInches']);
// prints => 68

console.log(myObject.hasOwnProperty('name'));
// prints => true

console.log(Object.keys(myObject));
// prints =>  [ 'name',
//              'parents',
//              'age',
//              'inCollege',
//              'car',
//              'hair',
//              'heightInInches' ]

delete myObject.heightInInches;
// deletes the heightInInches property from the myObject object

console.log(myObject.hasOwnProperty('heightInInches'));
// prints => false

 /* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                  6. Functions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
 
// Inputs: num1, num2
// Outputs: product of num1 and num2
// Constraints: N/A
// Edge cases: N/A
function mult(num1, num2) {
// creates a function named mult that accepts two inputs, num1 and num2
    var prod = num1 * num2;
    // creates a variable named prod that is the result of num1 times num2
    return prod;
    // returns the variable prod to the parent scope so that it can be accessed outside 
    // of the function
}

console.log(mult(5,10));
// prints => 50

// Inputs: num1, num2
// Outputs: product of num1 and num2
// Constraints: N/A
// Edge cases: N/A
function multNoReturn(num1, num2) {
// creates a function named multNoReturn that accepts two inputs, num1 and num2
    var prod = num1 * num2;
    // creates a variable named prod that is the result of num1 times num2
}

console.log(multNoReturn(5, 10));
// because return is never used, prod cannot be accessed
// prints => undefined

var prodOf = mult(6, 5);
// creates a variable named prodOf that is the result of calling the mult function with
// the parameters 6 and 5

console.log(prodOf);
// prints => 30

var prodOfNoReturn = multNoReturn(6, 5);
// creates a variable named prodOfNoReturn that is the result of calling the 
// multNoReturn function with the parameters 6 and 5

console.log(prodOfNoReturn);
// because the multNoReturn function has no return statement, nothing can be fed back to 
// the variable initialization, resulting in an undefined variable
// prints => undefined

// Inputs: N/A
// Outputs: 'wash your hands'
// Constraints: N/A
// Edge cases: N/A
function clean() {
// creates a function called clean that accepts no inputs
    console.log('wash your hands');
    // prints 'wash your hands' to the console when this function is invoked
}

clean();
// prints => wash your hands

 /* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                     7. Undefined
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
 
var und;
// Declares a variable called und, but does not initialize it
 
console.log(und);
// returns => undefined

console.log(multNoReturn(5, 10));
// returns => undefined

/*
*  8. null
*/
 
var isNull = null;
// initializes a variable called isNull to a value of null.

console.log(isNull);
// prints => null

var nulObj = {
    oneKey: 'one value'
};
// creates an object variable named nulObj that contains a oneKey key with a value of 
// 'one value'.

console.log(nulObj);
// returns => { oneKey: 'one value' }

nulObj = null; 
// reinitializes the object variable nullObj to the value of null

console.log(nulObj);
// returns => null 

/* 
*  9. NaN 
*/
var badMath = ("mike" / 10);
// initializes a variable called badMath to the value of ("mike"/10);
 
console.log(badMath);
// prints => NaN
 
var moreBadMath = badMath + 27;
// initializes a variable called moreBadMath to the value of badMath + 27
 
console.log(moreBadMath);
// prints => NaN
 
 /* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                  10. Infinity and -Infinity
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
var infVar = (1/0), infAlt = Infinity;
// initializes a variable called infVar to the value of infinity and a variable called 
// infAlt to the value of infinity.
 
console.log(infVar, infAlt);
// prints => Infinity Infinity

console.log(infVar > 1000000000);
// prints => true

var negInfVar = (-1/0), negInfAlt = -Infinity;
// initializes a variable called negInfVar to the value of -infinity and a variable 
// called negInfAlt to the value of -infinity.
 
console.log(negInfVar, negInfAlt);
// prints => -Infinity -Infinity

console.log(-infVar < 1000000000);
// prints => true

 /* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                  11. Simple and Complex Data Types
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

var isUndef;
// declares a variable called isUndef

console.log(typeof isUndef);
// prints => undefined

var isBool = true;
// initializes a variable called isBool to a value of true

console.log(typeof isBool);
// prints => boolean

var isNum = 15;
// initializes a variable called isNum to a value of 15

console.log(typeof isNum);
// prints => number

var isString = 'words';
// initializes a variable called isString to a value of 'words'

console.log(typeof isString);
// prints => string

var isArray = ['an', 'array'];
// initializes an array variable called isArray with two elements.

console.log(typeof isArray);
// prints => object

var isObject = {
    firstKey: 1,
    secondKey: 2,
};
// initializes an object variable called isObject with two properties

console.log(typeof isObject);
// prints => object

console.log(typeof isNull);
// prints => object

 /* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                            12. Passing by copy vs passing by reference
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

var firstVar = 20;
// initializes a variable called firstVar to a value of 20

var secondVar = firstVar; 
// initializes a variable called secondVar to a value of firstVar

console.log(firstVar, secondVar);
// prints => 20 20

secondVar = 40; 
// re-initializes secondVar to have a value of 40

console.log(firstVar, secondVar);
// prints => 20 40

var thirdVar = {
    name: 'john'
};
// initializes an object variable called thirdVar with one property

var fourthVar = thirdVar; 
// initializes an object variable called fourthVar to equal thirdVar

console.log(thirdVar, fourthVar);
// returns => { name: 'john' } { name: 'john' }

fourthVar.name = 'mike';
// initializes an object variable called thirdVar with one property

console.log(thirdVar, fourthVar);
// returns => { name: 'mike' } { name: 'mike' }