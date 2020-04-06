/**
 * VARIABLES:
 *
 * 0. Introduction
 * To hold things in memory during the life-cycle of a program, we can use variables. 
 * Variables are named identifiers that can point to values of a particular type, like a 
 * Number, String, Boolean, Array, Object or another data-type. Variables are called so 
 * because once created, we can CHANGE the value (and type of value) to which they point. 
 * They can be thought of as containers for storing data values.
 *
 * 1. Declaration
 * In Javascript, the act of creating a variable is known as "declaring" a variable. To 
 * create a variable we use the keyword, var, followed by a name (id or alias) for our 
 * variable. Variables that have not been assigned a value are undefined. You can also 
 * declare multiple variables in the same line.
 *
 * 2. Initialization (Assignment) 
 * There are 2 phases of using variables: declaration and initialization (or assignment). 
 * An equal sign is used to assign a value to the variable. Variables can also be assigned 
 * a value upon creation. Just like declaration, multiple variables can be created and 
 * initialized at the same time. Re-declaring a variable that has already been assigned 
 * will not cause it to lose its value.
 * 
 * 3. Re-assignment
 * Variables that have already been assigned can be reassigned. This is not possible with 
 * constants. The 'var' keyword can be used when reassigning a variable that has already 
 * been created, but it is not necessary.
 * 
 */

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                    1. Declaration 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

var myName; 
// creates a variable called myName

console.log(myName); 
// prints => undefined

var hisName, herName, theirNames; 
// creates a hisName variable, a herName variable, and a theirNames variable

console.log(hisName); 
// prints => undefined

console.log(herName, theirNames); 
// prints => undefined undefined

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                            2. Initialization or assignment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

myName = 'john'; 
// assigns the value 'john' to the myName variable

console.log(myName); 
// prints => john

var yourName = 'katie'; 
// creates a variable called yourName and assigns it the value of 'katie'.

console.log(yourName); 
// prints => katie

var catName = 'fluffy', dogName = 'spot';
// creates a variable called catName and assigns it the value of 'fluffy' and creates a 
// variable called dogName and assigns it the value of 'spot'.

console.log(catName, dogName);
// prints => fluffy spot

catName = 'whiskers', dogName = 'rex';
// assigns the value of 'whiskers' to the catName variable and the value of 'rex' to the 
// dogName variable.

console.log(catName, dogName);
// prints => whiskers rex

var yourName; 
// attempts to declare a variable that has already been declared.

console.log(yourName); 
// prints => katie

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                    3. Re-assignment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

myName = 'bob'; 
// reassigns the myName variable the value of 'bob'

console.log(myName); 
// prints => bob

var myVariable = 1; 
// creates a variable called myVariable and assigns it a value of 1

console.log(myVariable); 
// prints => 1

myVariable = true; 
// reassigns the myVariable variable the value of true

console.log(myVariable); 
// prints => true

myVariable = "someString"; 
// reassigns the myVariable variable the value of "someString".

console.log(myVariable); 
// prints => someString