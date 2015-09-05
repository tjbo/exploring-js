//exporing JS execution environment
// just a small project to explore the finer points of javascript

//just going to add everything as a global object since it makes for easy viewing in the debugger and this project is standalone...
//just wanted to not here that I know what I'm doing is wrong

// getJS, so I can view CODE examples in HTML
// if project warrants it we can use this to write out the code in browser
function getJS(whatToGet) {
	var t = whatToGet.toString();
	// document.write(t);
}

var printToConsole = function(content, log_style) {
	if(log_style === 'warn') {
		console.warn(content)
	}
	else {
		console.log(content)

	}
}

// example #1
function get_type(thing, definition, log_style) {
	var a = typeof(thing);
	var b = definition;
	var c = 'This is supposed to be a ' + b + ', and is a ' + a + '.'

	printToConsole(c, log_style)

}

var display_types = function() {
	console.clear();
	get_type('adsf', 'string');
	get_type(1, 'number');
	get_type({}, 'object');
	get_type(true, 'boolean');
	get_type(Symbol(), 'symbol');
	get_type(undefined, 'undefined');
	get_type(['red', 'blue', 'green', 'pink'], 'array', 'warn');
	get_type(null, 'null', 'warn');
	get_type(NaN, 'NaN', 'warn');
};

// now lets use a comparison

function equalValue(val1, val2, log_style, msg) {
	var ex = (val1 == val2)
	var content = '' + typeof(val1) + ': ' + val1 + ' == ' + typeof(val2) + ': ' + val2
	console.log(content);
	console.log(ex);

	if(log_style === 'warn') {
		console.warn(msg)

	}
}

function equalValueAndEqualType(val1, val2, log_style, msg) {
	var ex = (val1 === val2)
	console.log(typeof(val1) + ': ' + val1 + ' === ' + typeof(val2) + ': ' + val2)
	console.log(ex)

	if(log_style === 'warn') {
		console.warn(msg)

	}
}

var compareStuff = function() {
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

compareStuff();

// interestingly we can reassign the DOM functions, this works with anything that is loaded into the DOM in a Web Browser, for example window, which I passed to this program in the onload

// JS environment can be modified quite easily
/* lets try it with Alert() */
var alert = function() {
	console.clear();

	console.log('I am alerting you but not in the normal way, because I\'ve re-assigned alert() to my own custom function.');
}

var assignAlert = function() {
	alert();
}

// #3: some functions inside an array
var useFunctionFromArray = function() {
	console.clear()
	var arr = ['test1', function() {
		console.log('I\'m a function inside an Array, I\'m being invoked by arr[0]()')
	}, 'test3']

	arr[1]()
}

// #4: add 2 functions together
var add2Functions = function() {
	console.clear()
	var one = function() {
		return 1
	}

	var two = function() {
		return 2
	}
	console.log(one() + two());
}

var subtractFunctions = function() {
	var one = function() {
		return 1
	}

	var two = function() {
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

	booleans
	3>2
	 true

	 3<2
	false


There are some other situations that cause automatic type conversions to happen. If you add a nonstring value to a string, the value is automatically converted to a string before it is concatenated. If you multiply a number and a string, JavaScript tries to make a number out of the string.

"Apollo" + 5;
! "Apollo5" null + "ify"; ! "nullify" "5" * 5;
! 25 "strawberry" * 5; ! NaN

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

document.addEventListener("DOMContentLoaded", function() {

	//css id / function to call
	var buttons = [
		['get-types', display_types],
		['assign-alert', assignAlert],
		['use-function-from-array', useFunctionFromArray],
		['add-2-Functions', add2Functions],
		['dont-call-me', dontCallMe],
		['compare-stuff', compareStuff]
	]

	for(var e = 0; e < buttons.length; e++) {

		var el = document.getElementById(buttons[e][0])
		el.addEventListener('click', buttons[e][1])

	}

})