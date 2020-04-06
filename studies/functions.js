/**
 * Function
 * 
 * 0. Intro 
 * Functions are reusable blocks of code that accept inputs, process those inputs, and 
 * then return a new data value.
 * 
 * 1. The two phases of using a function
 * To use a function, it must first be declared. Declaring a function is the act of 
 * 'creating' it. That is, you give it a name, tell it what kind of parameters to accept, 
 * and tell it what to do with those parameters. Functions are declared using the following 
 * syntax:
 * 
 * function name(parameter) {
 * functionBody
 * return statment
 * }
 * 
 * After a function has been declared, you are then free to call it or invoke it as much as 
 * needed. Calling a function is the act of feeding parameters into a declared function and 
 * getting a new data value returned out of the function.
 * 
 * 2. Parameters vs passed arguments
 * A functions parameters are named while it is being declared. The names of these 
 * parameters are used later in the function body as stand-ins for the arguments that will
 * be passed to it. That is, if a function accepts a parameter named num1, and you pass a 
 * variable named exVar to the function in place of the num1 parameter, then the value of 
 * exVar will used in the function body everywhere that the parameter of num1 is seen. 
 * 
 * 3. Named funtion syntax
 * An anonymous function is one that does not have a name. That is, the name property is an
 * empty string. in the syntax listed in 1., if the name that proceeds (parameter) is left 
 * blank, you are left with an anonymous function. By giving the function a name, typically
 * one that describes its action, you can more easily trace a problem in your code if it 
 * originates from said function. 
 * 
 * 4. Assigning a function to a variable
 * a function can be assigned to a variable. This gives that variable the properties of the
 * function that has been assigned to it. This function can be either anonymour or named. 
 * there are several ways to do this. You can either define the function after the = 
 * operator in a variable initialization, or you can assign a named function to a variable 
 * in a seperate initialization after the function has already been declared.
 * 
 * 5. Specifying inputs and outputs
 * A function accepts inputs that are fed to it using the parameters field, but a function 
 * can also be programmed to run without any inputs. Leaving the () after the NAME portion 
 * of a function assignment blank results in a function that will run when invoked without 
 * any inputs. Similarly, a function does not have to output anything. A return statement 
 * at the end of a function body is necessary to allow a function to return a value back to 
 * the parent scope.
 * 
 * 6. Scope
 * A variable that has been declared outside of a function is globally scoped. It can be 
 * accessed from anywhere in your code, including inside of functions. A variable that is 
 * declared inside of a function is locally scoped. A locally scoped variable is only 
 * available inside of the function it was created it and any nested functions of that 
 * function. This allows variables of the same name to be used in different functions. 
 * 
 * 7. Closures
 * A closure is the act of bundling a function together with its references to its 
 * surrounding states. This is a way to get access to an outer function's scope from an 
 * inner function. In other words, this is the act of creating a variable inside a function
 * and calling that variable in a nested function. this variable is only available inside 
 * of those two functions and cannot be called from the global environment
 */
 
 /* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       1. Declaring and Invoking a function
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function hello() {
// declares a function named hello that doesnt require any parameters
 console.log('Hello there!');
 // each time this functio is invoked, prints => Hello there!
}

hello();
// invokes the hello function and prints => Hello there!

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                     2. Parameters vs passed arguments
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

var a = 10, b = 20;
// initializes two variables, a with a value of 10 and b with a value of 20

function mult(num1, num2) {
// declares a funtion named mult that accepts two parameters, num1 and num2
 console.log(num1 * num2);
 // when this function is invoked, it will print the product of its two parameters
}

mult(a, b);
// invokes the mult function passing the variables a and b into the function as the 
// functions parameters
// prints => 200
 
/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       3. Named function syntax
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
 
function myFunction(value) {
// declares a functio NAMED myFunction that accepts one parameter
 console.log('the password is ' + value);
 // when this function is invoked, it will print 'the password is ' followed by it's 
 // passed parameter
}
 
 myFunction('paprika');
// prints => the password is paprika
 
/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       4. Assigning a function to a variable
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/ 

var remain = function(param1, param2) {
// initializes a variable called remain that evaluates to a function that accepts two 
// parameters
 console.log(param1 % param2);
 // when two parameters are passed to the remain variable, it will print the remainder of 
 // the first parameter divided by the second parameter
}

remain(20, 6);
// prints => 2

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       5. Specifying inputs and outputs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function noParam() {
// declares a function called noParam that does not require any inputs
 console.log('I ran with no inputs');
 // when this function is invoked, it prints => I ran with no inputs
}

noParam();
// prints => I ran with no inputs

function hasParam(param1) {
// declares a function called hasParam that accepts one input
 console.log('I accepted an input of ' + param1);
  // when this function is invoked, it prints 'I accepted an input of ' + param1
}

hasParam('kitty');
// invokes the hasParam function with kitty as its input 
// prints => I accepted an input of kitty

var test = 5;
// intializes a variable named test to a value of 5

function noReturn(param) {
// declares a function named noReturn that accepts one parameter as input
 test + param;
 // adds the test variable to param
}

console.log(noReturn(8));
// no return statement means that we cannot access the result of invoking this function 
// outside of the function.
// prints => undefined

function yesReturn(param) {
// declares a function named yesReturn that accepts one parameter as input
 return(test + param);
 // returns the sum of test and param outside of the function
}

console.log(yesReturn(8));
// because the yesReturn function had a return statement, we can access its output 
// outside of the function.
// prints => 13

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                              6. Scope
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

var isGlobal = 'my parameter is: ';
// initializes a variable called isGlobal that is in the global scope
// this variable will be available to call anywhere, including in functions

function aFunction(var1) {
// declares a function called aFunction that accepts one parameter
 console.log(isGlobal + var1);
 // prints => 'my parameter is: ' and var1
 // function is able to access this variable because it is globally scoped
 var isNotGlobal = 10;
 // creates a variable called isNotGlobal that is locally-scoped
 // we can't call this variable anywhere outside of this function or any functions nested 
 // within this function
}

aFunction('waffle');
// prints => my parameter is: waffle

 
/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                            7. Closures
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/ 

function topFunc() {
// declares a function named topFunc that requires no parameters
 var closure = 'passed through';
 // creates a locally-scoped variable named closure
 function nestedFunc() {
 // declares a nested function named nestedFunc that requires no parameters
  console.log(closure);
  // prints the value of the variable closure to the console
 }
 return nestedFunc;
 // returns the results of nestedFunc outside of the function
}

var someFunc = topFunc();
// creates a variable named someFunc and assigns it the function topFunc
// the someFunc variable is a closure

someFunc();
// invokes the topFunc function