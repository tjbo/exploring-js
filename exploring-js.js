t

function equalValueAndEqualType(val1, val2, log_style, msg) {
	var ex = (val1 === val2)
	console.log(typeof (val1) + ': ' + val1 + ' === ' + typeof (val2) + ': ' + val2)
	console.log(ex)

	if (log_style === 'warn') {
		console.warn(msg)

	}
}

var compareStuff = function () {
	console.clear();
	var x
	var arr = []

	equalValue(1, "1", 'warn', 'Above: One value is a string and the other is a number. It returns true because it is not comparing the types.')
	equalValueAndEqualType(1, "1", 'warn', 'Now it is using === and so is returning false, because one is a string and the other is a number. So === compares values and type.')

	// equalValue(arr, {})
	// equalValueAndEqualType(arr, {})

	// equalValue(x, null)
	// equalValueAndEqualType(x, null)

}


// #3: some functions inside an array
var useFunctionFromArray = function () {
	console.clear()
	var arr = ['test1', function () {
		console.log('I\'m a function inside an Array, I\'m being invoked by arr[0]()')
	}, 'test3']

	arr[1]()
}

// #4: add 2 functions together
var add2Functions = function () {
	console.clear()
	var one = function () {
		return 1
	}

	var two = function () {
		return 2
	}
	console.log(one() + two());
}

var subtractFunctions = function () {
	var one = function () {
		return 1
	}

	var two = function () {
		return 2
	}
	console.log(one() < two());
}

// #5: JavaScript functions are converted to strings unless you call them
function pleaseDontCallMe() {
	console.log('I am the same function as above, except this time I was called.')
}

function dontCallMe() {
	console.clear()
	var f = pleaseDontCallMe
	console.log(f)
	pleaseDontCallMe()
}

function addDifferentTypes() {
	console.clear()
	console.log(typeof ('Appolo') + ' + ' + typeof (5))
	console.log('Appolo' + 5)
	printToConsole('^ This should probably return undefined.', 'warn')

	console.log(typeof ('Appolo') + ' + ' + typeof (null) + ' + ' + typeof ('ify'))
	console.log("Apollo5" + null + "ify")
	printToConsole('^ This should probably return undefined.', 'warn')
	console.log(typeof ('strawberry') + ' * ' + typeof (5))
	console.log("strawberry" * 5)
	printToConsole('^ This should probably return undefined.', 'warn')

}

/* Why Named Function Expressions are Better Than Annomous Function Expressions */
//named function expression
//can refer to ourself, useful for recursion, binding, etc.

var test = function bar(test) {
	console.log(bar.something);
}

test.something = '1';

test();

//can be used in objects

var obj = {
	'test': function theTester() {
		console.log('should really always used named function expressions')
	}
}

var nfx = function me() {
	console.log("guess what this is: '" + me.who + " '")
}

// nfx();
nfx.who = "its me";

//better then unamed function expression
var ufx = function () {
	console.log("guess what this is: " + this)

	//returns window
}
ufx();

// lexical scope vs dynamic scope
// js doesnt have it
// bash uses dynamice scope
// lexical scope means complied time scope, the decisions are made by the compiler
// scope can't change, complier knows at complier time
function foo() {
	var bar = "bar";

	function baz() {
		console.log(bar) //lexical scope
	}
	return baz()
}

foo()

// "use strict" runs faster... then non-strict

// ## DONT USE WITH FUNCTIONS

// ## DONT USE EVAL FUNCTIONS

// function is how JS creates scope

var foo = "foo";

//immediate invoked function express
// aka IFIE
//self executing annouymous function
//very popular
// common solution to contain scope
// everything is isolated from global scope
// to name or not to name?
// named will show in stack traces
(function () {
	var foo = "foo2"
	console.log(foo) //foo2
})()

	// var foo = "foo"

	// 	(function (bar) {
	// 		var foo = "foo2"
	// 		console.log(foo) //foo
	// 	})(foo)

	// console.log(foo) // foo

	(function (global) {

		// a good way to remind someone that something is global...

	})(window)

	// a couple functions that are basically teh same
	(function (test) {

	})(something)

	// Is basically the same as:

	(function (test) {

	} (something))

//it's a matter of style and nothing more...

//this doesn't work... which is why you have to do above
// function(test) {

// }

console.log(foo) // foo

	//In NoN Strict Mode Undefined can even be re-assigned.

	(function foo() {
		var bar = "bar"
		for (let i; i < bar.length; i++) {
			i = i
		}
		console.log(i) //reference error
	})()

	//let will hijack it's scope (basically anything between { }, but there are other usecases )
	(function foo() {
		var bar = "bar"
		for (var i = 0; i < bar.length; i++) {
			var i = i
		}
		console.log(i) //logs 3

	})()

//let has implicit scope blocks
function foo(bar) {
	if (bar) {

		let baz = bar

		if (baz) {
			let bam = baz
		}
		console.log(bam) //Error
	}
	console.log(baz) //Error
}

// you can put 2 curly braces anywhere in JS, this is valid
(function test() {
	{

	}

})()

//Hositing In JS function Declartions and Variable Declarations are always Hoisted to the top
a;
b;
var a = b;
var b = 2;
b; //2
a; // ?

// this means that the following is how the above is actually compilied, the vars are compilied first (LHS), and the values are then compilied (RHS)
var a;
var b;
a;
b;
a = b;
b = 2;
a;
b;

//functions get hoisted first
//returns foo, because the declarations get over written in compiler

foo();
var foo = 2;

function foo() {
	console.log('bar')
}

function foo() {
	console.log('foo')
}

//MUTUAL RECURSION WOULD BE IMPOSSIBLE WIHTOUT HOISTING BECAUSE ONE OF THE FUNCTIONS WOULD BE DECLARED TOO LATE

a(1);

function a(foo) {
	if (foo > 20) return foo //this stops this functioning from running forever (MAXIMUM CALL STACK)
	return b(foo + 2)
}

function b(foo) {
	return c(foo) + 1
}

function c(foo) {
	return a(foo * 2)
}

// the answers 39

// every function while executing has a reference to it's execution context, called THIS is the DYNAMIC SCOPE

// THIS: Implicit and Default Binding - the only thing that matters with THIS is what does the Call Site look like? Where is it called from? THIS always represents an { OBJECT }

// THIS RULES ORDER OF PRECEDENCE
// 1 : WAS THE FUNCTION CALLED WITH THE NEW KEYWORD

// the new keyword does the following.
// a - brand new obj created out of thin air
// b - ** obj gets linked to another object
// c - obj gets bound as this for that function call
// d - if that function doesn't return anything then it will implicitly insert a return this

function foo() {
	this.baz = "baz"
	console.log(this.bar + " " + baz)
}
var bar = "bar"
var baz = new foo()
baz

// 2: THE EXPLICT BINDING RULE - .call and .apply
function foo() {
	console.log(this.bar)
}

var bar = 'bar1'
var obj = {
	bar: 'bar2'
}

foo() //bar 1
foo.call(obj) // bar2 --- use obj for THIS [explicit]
foo.apply(obj) //bar2 --- use obj for THIS [explicit]
//call and apply in regeards to THIS are one in the same (they differ in behaviour on their args)

//HARD BINDING --- the functions 'bar' is bound through bind
function bind(fn, o) {
	return function () {
		fn.call(o)
	}
}

function foo() {
	console.log(this.bar)
}

var obj = {
	bar: 'bar'
}
var obj2 = {
	bar: 'bar2'
}

foo = bind(foo, obj)

foo() // bar
foo.call(obj2) //bar

//bind2 for es4 (bind is built into es5)

if (!Function.prototype.bind2) {
	Function.prototype.bind2 =
		function (o) {
			var fn = this
			return function () {
				return fn.apply(o, arguments)
			}
		}
}

function foo(baz) {
	console.log(this.bar + " " + baz)
}

var obj = {
	bar: "bar"
}
foo = foo.bind2(obj)

foo("baz") // bar baz

// better polyfill...
if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {
		if (typeof this !== 'function') {
			// closest thing possible to the ECMAScript 5
			// internal IsCallable function
			throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
		}

		var aArgs = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			fNOP = function () { },
			fBound = function () {
				return fToBind.apply(this instanceof fNOP ? this : oThis,
					aArgs.concat(Array.prototype.slice.call(arguments)));
			};

		if (this.prototype) {
			// native functions don't have a prototype
			fNOP.prototype = this.prototype;
		}
		fBound.prototype = new fNOP();

		return fBound;
	};
}

// 3: THE IMPLICT BINDING RULE - the object at the call site (base object, context object, the owning or containing object ) becomes the THIS keyword, o2.foo() in line above

// in JS everything is a reference to an OBJECT, everything is a referecne to a FUNCTION

//THIS EXAMPLE 1
function foo() {
	console.log(this.bar)
}

var bar = 'bar1'

var o2 = {
	bar: 'bar2',
	foo: foo
}
var o3 = {
	bar: 'bar3'
}

foo() //bar1
o2.foo() //bar2
o3.foo() //foo is not a funciton

// 4: STRICT MODE (local strict mode can be isolated from global by using 'use strict' in a function - if in strict mode default the THIS keyword to the undefined value
// 4:  NOT-STRICT MODE- bind this to the Global Object (window in the browser)

foo();

function foo() {
	console.log(this.bar) // bar
	console.log(this) // window
}
var bar = 'bar';

//THIS IN STRICT MODE - same for UFX and NFX and IFIE
foo();

function foo() {
	'use strict'
	console.log(this) // undefined
	// console.log(this.bar) // ERROR
}
var bar = 'bar';

//CLOSURE
// closuer is when a function remembers it's lexical scope even when a function is executing outside of that lexical scope

function test() {
	var bar = 'bar'

	setTimeout(function () {
		console.log(bar)
	}, 100)
}
test()

function test() {

	for (var i = 0; i < 5; i++) {
		setTimeout(function () {
			console.log(i)
		}, i * 100)
	}
}
test()
// prints out 5,5,5,5,5

// Functions create scope
function test() {

	for (var i = 0; i < 5; i++) {
		(function (i) {
			setTimeout(function () {
				console.log(i)
			}, i * 100)
		} (i))
	}
}

test()
//1,2,3,4

// but let has scope in JS6

function test() {
	'use strict'

	for (let i = 0; i < 5; i++) {

		setTimeout(function () {
			console.log(i)
		}, i * 100)
	}
}

test()

//oolo delegation pattern
function Foo(who) {
	this.me = who;
}

Foo.prototype.identify = function () {
	return "I am " + this.me;
};

function Bar(who) {
	Foo.call(this, "Bar:" + who);
}

Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.constructor = Bar; // "fixes" the delegated `constructor` reference

Bar.prototype.speak = function () {
	alert("Hello, " + this.identify() + ".");
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak(); // alerts: "Hello, I am Bar:b1."
b2.speak(); // alerts: "Hello, I am Bar:b2."

// some type introspection
b1 instanceof Bar; // true
b2 instanceof Bar; // true
b1 instanceof Foo; // true
b2 instanceof Foo; // true
Bar.prototype instanceof Foo; // true
Bar.prototype.isPrototypeOf(b1); // true
Bar.prototype.isPrototypeOf(b2); // true
Foo.prototype.isPrototypeOf(b1); // true
Foo.prototype.isPrototypeOf(b2); // true
Foo.prototype.isPrototypeOf(Bar.prototype); // true
Object.getPrototypeOf(b1) === Bar.prototype; // true
Object.getPrototypeOf(b2) === Bar.prototype; // true
Object.getPrototypeOf(Bar.prototype) === Foo.prototype; // true

//better way of writing this
var Foo = {
	init: function (who) {
		this.me = who;
	},
	identity: function () {
		return 'I am ' + this.me
	}
}

var Bar = Object.create(Foo)

Bar.speak = function () {
	alert('hello. ' + this.identity() + '.')
}

var b1 = Object.create(Bar)

b1.init('b1')
b1.speak()

var b2 = Object.create(Bar)
b2.init('b2')
b2.speak()

// There are some other situations that cause automatic type conversions to happen. If you add a nonstring value to a string, the value is automatically converted to a string before it is concatenated. If you multiply a number and a string, JavaScript tries to make a number out of the string.

// "Apollo" + 5;
// ! "Apollo5" null + "ify"; ! "nullify" "5" * 5;
// ! 25 "strawberry" * 5; ! NaN

/*
	All operators
	Unary Operators
	- typeof
	- !



	|| has the lowest precedence, then comes &&, then the comparison opera- tors (>, ==, and so on), and then the rest.

	ther similar operators are >= (“is greater than or equal to”), <= (“is less than or equal to”), == (“is equal to”), and != (“is not equal to”).
	false || true
	true

	false || false
	false

modulus
% operator
+
+=
*=

counter++






	Operators and Booleans can also be used on strings
	"Aardvark" < "Zoroaster"
	true


	Uppercase letters are always “less” than lowercase ones, so "Z" < "a" is true, and nonalphabetic characters (!, @, and so on) are also included in the ordering. The actual way in which the comparison is done is based on the Unicode standard. This stan- dard assigns a number to virtually every character one would ever need, in- cluding characters from Greek, Arabic, Japanese, Tamil, and so on. Having such numbers is practical for storing strings inside a computer—you can rep- resent them as a sequence of numbers. When comparing strings, JavaScript goes over them from left to right, comparing the numeric codes of the char- acters one by one.



A very similar control structure is the do loop. It differs only on one point from a while loop: it will execute its body at least once, and only then start testing whether it should stop. To reflect this, the test is writen below the body of the loop:

	*/

// do {
// 	var input = prompt("Who are you?");
// } while (!input);

// var print = function(msg) {
// 	console.log(msg);
// };

// var currentNumber = 0;
// while (currentNumber <= 12) {
// 	print(currentNumber);
// 	currentNumber = currentNumber + 2;
// }

// 	Breaking Out of a Loop
// When a loop does not always have to go all the way through to its end, the break keyword can be useful. It is a statement that immediately jumps out of the current loop, continuing after it. This program finds the first number that is greater than 20 and divisible by 7:
// for (var current = 20; ; current++) {
//   if (current % 7 == 0)
// break; }
// current;
// ! 21

// For counter += 1 and counter -= 1, there are even shorter versions: counter++ and counter--.
// Once again, the example becomes a little shorter:
// var result = 1;
// for (var counter = 0; counter < 10; counter++)
// result *= 2;

/*	// There is also a similar value, null, whose meaning is “this value is de- fined, but it does not have a value.” The difference in meaning between undefined and null is mostly academic and usually not very interesting. In practical programs, it is often necessary to check whether something “has a value.” In these cases, the expression something == undefined may be used, because even though they are not exactly the same value, the expression null == undefined will produce true.
	￼￼￼￼￼￼
*/

/*

Atomatic type conversion
false == 0;
! true "" == 0; ! true "5" == 5; ! true



null === undefined;
! false false === 0; ! false
"" === 0;
! false
"5" === 5; ! false




	*/

document.addEventListener("DOMContentLoaded", function () {

	//css id / function to call
	var buttons = [
		['get-types', display_types],
		['assign-alert', assignAlert],
		['use-function-from-array', useFunctionFromArray],
		['add-2-Functions', add2Functions],
		['dont-call-me', dontCallMe],
		['compare-stuff', compareStuff],
		['add-different-types', addDifferentTypes]
	]

	for (var e = 0; e < buttons.length; e++) {

		var el = document.getElementById(buttons[e][0])
		el.addEventListener('click', buttons[e][1])

	}

})

// when does this change?

//this is equivelant in all of these

// console.log('first this: ' + this);

// function adsf() {
// console.log('second this: ' + this);
// }
// adsf();

// var test = (function adsfda() {
// console.log('third this: ' + this);
// })();

// can use a function before its defined because of how JS compiler works
//Hoisting...
// b();

// function b() {
// 	console.log('this is b')

// }

//this however won't work
a();

var a = function () {
	console.log('this is a')

}

// scope chain - the execution context that a child functaion has is dependent on where it's created
function b() {
	console.log(myVar);

}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

//what will a log?
// a will log 1 since B execution context is the global

// Event Queue, JS

function waitThreeSeconds() {
	var ms = 3000 + new Date().getTime();

	while (new Date() < ms) { }
	console.log("finsihed funciotn");
}

function clickHandler() {
	console.log("click event")

}

//listen for the event
document.addEventListener("click", clickHandler);

waitThreeSeconds();
console.log('finsihed execution');

//JavaScript processes events in the order in which they happen

// the execution context

//when the stack is empty, Ja1vaScript periodically looks at event queue and waits for somethign to be there, if something is there, it sees the event and runs it

// creates an execution context... event is processed... next item in queue moves up
// the event queue wont be accessed until the execution stack is empty

///divide up each thing into it's own pages, then make a series of things called like 101 interesting things about JavaScript... (slide type presentation)

//Javascript uses dynamic typing, meaning you don't tell the JS engine what type of data a variable holds
// The engine figures our what the data type is when it is run

// you could reassing undefined... if you so wanted...
// null is better to use when it has no value,
//leave undefined for the engine

//js only has one number type, floating point numbers... that can make math weird...

//ES6 has symbol...

//operators are basically functions that you pass 2 parameters too

//which operator function gets precendence in JS
//functions are called in order of precendence
// associativity, when operator functions have the same precendenc ewhat order do they get called if they are the same
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

var a = 1,
	b = 2,
	c = 3;

a = b = c;

console.log(a)
console.log(b)
console.log(c)

// ressult is always 4, because of associativity, which works from right to left in this case

//COERCION IN JS
var a = 1 + "2"; // is 12, js used coercion

// console.log(3 < 2 < 1); returns true
// its executed from left to right which means this gets executed from left side first
// ie false < 1
// both true and false coerce to Numbers when used like:
//console.log(false) // 0
//console.log(true) // 1

//coercion is not always obvious

//Number(undefined)// NaN
//Number(null) // 0

// null does not equal undefined

//false == 0 // returns as true
// null == 0 // returns false

//undefined == null // returns true

// "" == 0 // true
// null < 1 //true
//"" == false // true

//=== avoids coercion

//Boolean(undefined) // false
//Boolean(null) /// false
// Boolean("") // false

// a = 0
// if (a) { console.log('test'); } // wont return since a is nothing...since 0 converts to false

//console.log(1 < 2 < 3); retuns true

// by refernce vs by value

a = 3
b = a;

// (b is a copy)

var a = {}

b = a;

// b is a reference, because it is an object or function which always get referecnes not copies... (not a copy)