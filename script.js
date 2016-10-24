/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
    console.log('This is...', this);
    console.log('a = ', a);
    console.log('b = ', b);
};

var inAnObject = {
    name: 'inAnObject',
    test1: whatIsThis,
    anotherObject: {
        name: 'anotherObject',
        test2: whatIsThis
    }
};

var inAFunction = function(a, b) {
    this.name = 'Sally';
    whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
};

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

/* Instructions:
   You are a scientist who has just discovered a *mysterious* new element in your lab. Since creativity isn't your strong suit, you name the element `this`. Your job is to figure out the properties of this new element as well as how it interacts with its environment. Run through each of the examples in whatIsThis.js, one by one (commenting out the previous example and uncomment the current example as necessary). In the comments section below each example fill in what `this` is referencing inside of the whatIsThis function. Why? If it throws an error, why is it throwing an error?

   Create an index.html and link this file.  Open index.html in your browser and view your console to get started.
*/

// * Problem 1
 // whatIsThis('hello', 'world');
/*
- "this" is ...the Window object.

- because ...he function was declared globally, so it automatically became part of the window object.

The window object is supported by all browsers. It represents the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object. Global variables are properties of the window object. Global functions are methods of the window object.

The JavaScript Window Object is the highest level JavaScript object which corresponds to the web browser window.
*/




// * Problem 2
// window.whatIsThis('hello', 'world');
/*
- "this" is ...a property of the window object. Since it is a function it is a method on the window object.

- because ...the .appends it to the window object

*/




// * Problem 3
// inAnObject.test1('face', 'book');
/*
- "this" is ...an object

- because ...if you have a function(ie test1), what preceeds it with the . will be an object.

*/
// var c = ['a', 'b', 'c', 'd']
//
// function iterate () {
//   var jArr = []
//
//   for (i = 0; i < c.length; i++) {
//     jArr.push(c[i])
//     console.log(jArr);
//   }
// }
//
// iterate(c)



// // * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
/*
- "this" is ...not a function

- because ... .test1 is a property of the object "inAnObject" and "anotherObject" is a property of "inAnObject."  They are both on the same level.  There is not however any .test1 that is a property of "anotherObject"
*/




// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
/*
- "this" is ...'twitter' and 'book'.  the result of a function call

- because ...the computer looks and finds inAnObject, then it finds anotherObject, then it finds the property test2, whose value references an anonymous function.  The function then console.logs the parameters.

*/

// * Problem 6
// whatIsThis.call();
/*
- "this" is ...window

- because ...the .call is a property of the whatIsThis variable.  The variable is set to an anonymous function. .function is a property of the window object.  So when we pass in nothing into the .call, and it comes back as undefined it will search up the chain to see if it can find it, which is why it is showing window.

*/




// * Problem 7
// whatIsThis.call(trickyTricky);
/*
- "this" is ...an object

- because ...trickyTricky is a variable that is set to an object.  When you pass it in it returns the object and the corresponding properties.

*/




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
/*
- "this" is ...an object

- because ...trickyTricky is still an object, so it shows as an object.  the other two are passed in as parameters and so show up as "a" and "b".  Now not sure why trickyTricky isn't a parameter.  .call seems to have a characeristic where the first parameter refers to the this, so since trickyTricky was first it didn't get passed in

*/




// * Problem 9
// whatIsThis.call(confusing);
/*
- "this" is ...an object

- because ...same reason the others were objects

*/




// * Problem 10
// whatIsThis.call(confusing, 'hello');
/*
- "this" is ...and object with a parameter and an undefined

- because ...see the reasoning for problem 8

*/




// * Problem 11
// whatIsThis.apply(trickyTricky);
/*
- "this" is ...object

- because ...passing an object into apply

*/




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
/*
- "this" is ...an object

- because ...same reason as before. This time we put nice and job in as parameters and they showed up.  It must be passing the array in as a parameter in whatIsThis, and then they get separated since they have a comma.

*/




// // * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
/*
- "this" is ...uncaught type error

- because ...The TypeError object represents an error when a value is not of the expected type.

The apply() method calls a function with a given THIS value and arguments provided as an array (or an array-like object).

SO....since the 'nice' and the 'job' were not in an array it threw an error because it wasn't passing an array as an argument

*/




// * Problem 14
// inAFunction('what will', 'happen?');
/*
- "this" is ...Window

- because ...inAFunction is called, which part of the function calls the function whatIsThis.  It then passes the two variables into whatIsThis and returns their values.

*/




// * Problem 15
// inAFunction.test3('A', 'B');
/*
- "this" is ...not a function

- because ...the value of this in a function is still the window object?

*/




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
/*
- "this" is ...window object

- because ...inAFunction takes the parameters 'what will' and 'happen?' and when it calls the whatIsThis function it passes them in.  This is not defined in that function, so it looks for a level higher and finds the window object.

*/




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
/*
- "this" is ...two things.

- because ...It is in the inAFunction because inAFunction is being initialized with the new constructor.  The .test3 again calls the original whatIsThis function, and that is where it finds the window object

*/




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
/*
- "this" is ...object

- because ... this references the object and face and book are passed in as parameters

*/




// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
/*
- "this" is ...object

- because ...same as above.
