/** 
 * Operators
 * 
 * 0. Intro
 * An operator is anything that performs some operation on one or more data values and
 * produces a result. 
 * 
 * 1. Assignment operators
 * Assignment operators are used to assign values to variables. There are six assignment 
 * operators: =, +=, -=, *=, /=, %=. = assigns the value of the variable on the right to 
 * the variable on the left. += first sums up the left and right variable values, then 
 * assigns that sum to the variable on the left. -= first subtracts the right variable 
 * from the left variable, then assigns that value to the left variable. *= first 
 * multiplies the left and right variables together, then assigns this value to the 
 * left variable. /= first divides the left variable by the right variable, then assigns
 * this result to the left variable. %= first divides the left variable by the right 
 * variable, then it assigns the remainder of this division to the left variable. 
 * 
 * 2. Arithmetic operators
 * Arithmetic operators can be used to execute mathematical operations between numeric 
 * data. Arithmetic operators consist of +, -, *, /, %. + is used to add two numbers
 * together. The + operator can also be used to perform concatenation when used with 
 * string data. - is used to subtract the left number from the right number. * is used to
 * multiply two numbers together. / is used to divide the left number by the right 
 * number. % is known as the modulus operator. It divides the left number by the right 
 * number, but it returns the remainder of this division instead of the quotient. 
 * 
 * 3. Comparison operators
 * Comparison operators compare two values and return a boolean value. There are nine 
 * comparison operators: ==, ===, !=, !==, >, <, >=, <=. == is the loose comaprison 
 * operator and it compares if two values are equal without considering type. That is, 2
 * will equal '2' using this operator. === is the strict comparison operator and it 
 * compares if two values are equal while considering type. That is, 2 will not equal 
 * '2'. != is the loose inequality operator and it compares if two values are NOT equal. 
 * When using this operator, two equivalent values will return false as opposed to true. 
 * The loose inequality operator is similar to the loose equality operator in that it does
 * not consider type. Comparing '2' and 2 using the loose inequality operator will return 
 * false. !== is the strict inequality operator. The strict inequality operators 
 * relationship to the loose inequality operator is the same as that of the strict and
 * loose equality operator. > checks to see if the left side value is greater than the 
 * right side value and returns true if so. < checks to see if the left side value is 
 * less than the right side value and returns true if so. >= checks to see if the left
 * side value is greater than or equal to the right side value and returns true if so. 
 * <= checks to see if the left side value is less than or equal to the right side value 
 * and returns true if so. 
 * 
 * 4. Logical operators
 * Logical operators can be used to check for two or more conditions at the same time. 
 * There are three logical operators: &&, ||, !. && is the AND operator. It checks two 
 * values to determine if they are both non-zero. It is important to note that 0, false, 
 * null, undefined, and an empty string all evaluate to 0 when using this operator. || is
 * known as the OR operator. It checks whether any of the two operators are non-zero. ! 
 * is called the NOT operator and it is used to reverse the boolean result of any other 
 * operation. 
 * 
 * 5. Unary operators
 * While the previous operators performed actions on multiple variables, unary operators 
 * perform an action on a single variable. The unary plus operator (+) comes before a 
 * variable and tries to convert it to a number. The unary negation operator (-) 
 * functions the same as the (+) operator, except the returned number will be negative. 
 * the logical not operator (!) converts a variable into its boolean equivalent and then 
 * returns the opposite of that boolean. The increment operator ++ adds one to a variable
 * and returns the result. This operator can be used before or after a variable with 
 * different results, known as prefix and postfix operation. When used before a variable, 
 * it returns the value after incrementing. When used after a variable, it returns the 
 * value before before incrementing. the decrement operator (--) functions like the 
 * increment operator, but it subtracts by one instead of adding. The bitwise not (~) 
 * operator inverts all of the bits in a variable and returns it as a number. Using this
 * operator on a number is the equivalent of saying "-(num + 1). The typeof operator 
 * returns a string that contains the data type of the variable. The delete operator 
 * deletes values. When used on an array, it deletes values at a specific index, while 
 * still keeping that index in the array. When used on an object, it deletes a specific 
 * property of that object. The void operator evaluates an expression, but discards the
 * result of that evaluation, returning undefined. 
 * 
 * 6. Ternary operators
 * ? is the ternary operator. It assigns a value to a variable based on some conditon. 
 * to use the ternary operator, you begin with a conditional expression followed by the ?
 * operator. After the ?, you place a conditon to be executed if the condition was true.
 * This is followed by a :, which is in turn followed by a condition to be executed if 
 * the condition was false. In this way, the ternary operator functions similarly to a 
 * reduced if-else statement.
 */
 
/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                            1. Assignment operators 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

var x = 5;
// declares a variable named x and assigns a value of 5 to x

console.log(x);
// prints => 5

x += 5;
// adds 5 to x, then assigns this value to x

console.log(x);
// prints => 10

x -= 8;
// subtracts 8 from x, then assigns this value to x

console.log(x);
// prints => 2

x *= 20;
// multiples 20 by x, then assigns this value to x

console.log(x);
// prints => 40

x /= 4;
// divides x by 4, then assigns this value to x

console.log(x);
// prints => 10

x %= 3;
// divides x by 3, then assigns the remainder of this operation to x.

console.log(x);
// prints => 1

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                               2. Arithmetic operators
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

console.log(10 + 10);
// prints => 20;

console.log(20 - 10);
// prints => 10;

console.log(10 * 10);
// prints => 100;

console.log(100 / 20);
// prints => 5;

console.log(13 % 10);
// prints => 3;

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                              3. Comparison operators 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

console.log(10 == 10);
console.log('10' == 10);
console.log('cat' == 'cat');
console.log(true == true);
// prints => true;

console.log(10 == 11);
console.log('ten' == 10);
console.log(10 == 'cat');
console.log('cat' == 'Cat');
console.log(true == false);
// prints => false

console.log(10 === 10);
// prints => true

console.log('10' === 10);
// prints => false

console.log(10 != 10);
console.log(10 != '10');
console.log('cat' != 'cat');
console.log(true != true);
// prints => false

console.log(10 != 15);
console.log(10 != 'ten');
console.log(10 != 'cat');
console.log('cat' != 'Cat');
console.log(true != false);
// prints => true

console.log(10 !== 10);
// prints => false

console.log(10 !== '10');
console.log(10 !== 15);
console.log(10 !== 'cat');
// prints => true

console.log(10 > 5);
// prints => true

console.log(10 > 15);
console.log(10 > 10);
console.log(10 > 'five');
// prints => false

console.log(10 < 15);
// prints => true

console.log(10 < 5);
console.log(10 < 10);
console.log(10 < 'five');
// prints => false

console.log(10 >= 5);
console.log(10 >= 10);
// prints => true

console.log(10 >= 15);
// prints => false

console.log(10 <= 15);
console.log(10 <= 10);
// prints => true

console.log(10 <= 5);
// prints => false

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                 4. Logical operators 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

console.log(10 > 5 && 20 > 10);
console.log(true == true && false == false);
console.log('cat' == 'cat' && 'dog' == 'dog');
// prints => true

console.log(10 > 5 && 20 > 30);
console.log(true == true && false == true);
console.log('cat' == 'cat' && 'dog' == 'cat');
// prints => false

console.log(10 > 5 || 20 > 10);
console.log(10 > 5 || 20 > 30);
console.log(true == true || false == false);
console.log(true == true || false == true);
console.log('cat' == 'cat' || 'dog' == 'dog');
console.log('cat' == 'cat' || 'dog' == 'cat');
// prints => true

console.log(10 > 20 || 20 > 30);
console.log(true == false || false == true);
console.log('cat' == 'dog' || 'dog' == 'cat');
// prints => false
 
console.log(!(10 > 5));
console.log(!(10 > 5 || 20 > 10));
// prints => false

console.log(!(10 > 15));
console.log(!(10 > 20 || 20 > 30));
// prints => true

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                 5. Unary operators 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

console.log(+3);
console.log(+'3');
// prints => 3

console.log(+true);
// prints => 1

console.log(+false);
// prints => 0

console.log(+'Infinity');
// prints => Infinity

console.log(+'cat');
// prints => NaN

console.log(-3);
console.log(-'3');
// prints => -3

console.log(-true);
// prints => -1

console.log(-false);
// prints => -0

console.log(-'Infinity');
// prints => -Infinity

console.log(-'cat');
// prints => NaN

console.log(!true);
// prints => false

console.log(!false);
console.log(!0);
console.log(!null);
console.log(!undefined);
// prints => true

var pre = 10, post = 10;
// initializes two variables, pre and post, and sets them both equal to 10

console.log(pre, post);
// prints => 10 10

var newPre = ++pre;
// adds one to pre, initializes newPre, and sets newPre equal pre + 1

var newPost = post++;
// initializes newPost, sets newPost equal to post, adds one to post

console.log(newPre, newPost);
// prints => 11 10

console.log(pre, post);
// prints => 11 11

pre = 10, post = 10;
// re-initializes two variables, pre and post, and sets them both equal to 10

console.log(pre, post);
// prints => 10 10

newPre = --pre;
// adds one to pre, re-initializes newPre, and sets newPre equal to pre - 1

newPost = post--;
// re-initializes newPost, sets newPost equal to post, subtracts one from post

console.log(newPre, newPost);
// prints => 9 10

console.log(pre, post);
// prints => 9 9

console.log(~5);
console.log(~'5');
// prints => -6

console.log(~-5);
console.log(~'-5');
// prints => 4;

console.log(~true);
// prints => -2;

console.log(~false);
// prints => -1

console.log(typeof 8);
console.log(typeof NaN);
// prints => number

console.log(typeof 'cat');
// prints => string

console.log(typeof true);
// prints => boolean

console.log(typeof ['an', 'array']);
console.log(typeof {aKey: 'a value'});
console.log(typeof null);
// prints => object

console.log(typeof function(a){return a});
// prints => function

console.log(typeof undefined);
// prints => undefined

var myArray = [1, 2, 3, 4, 5];
// initilizes an array variable with 5 elements

console.log(myArray, myArray.length);
// prints => [ 1, 2, 3, 4, 5 ] 5

delete myArray[2];
// deletes the value stored in the third element of myArray

console.log(myArray, myArray.length);
// prints => [ 1, 2, <1 empty item>, 4, 5 ] 5

var myObject = {
  firstName: 'Mike',
  lastName: 'Conner'
};
// initializes myObject with two properties

console.log(myObject);
// prints => { firstName: 'Mike', lastName: 'Conner' }

delete myObject.lastName;
// deletes the lastName property from myObject

console.log(myObject);
// prints => { firstName: 'Mike' }

console.log(myObject.lastName);
// prints => undefined

console.log(void 15, void 'cat', void true, void ['an', 'array']);
// prints => undefined undefined undefined undefined

var voidExample = 5;
// initializes voidExample with a value of 5

console.log(voidExample);
// prints => 5

console.log(void voidExample);
// prints => undefined

console.log(voidExample);
// prints => 5

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                    6. Ternary operators 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

var first = 100, second = 50;
// initializes two variables, first with a value of 100 and second with a value of 50

var firstTest = first > second? 'first is higher' : 'first is not higher';
// tests if first is greater than second. 
// if true, initializes firstTest to a value of 'first is higher'.
// if false, initializes firstTest to a value of 'first is not higher'.
console.log(firstTest);
// prints => first is higher

var secondTest = first < second? 'first is lower' : 'first is not lower';
// tests if first is less than second. 
// if true, initializes secondTest to a value of 'first is lower'. 
// if false, initializes secondTest to a value of 'first is not lower'.
console.log(secondTest);
// prints => first is not lower
