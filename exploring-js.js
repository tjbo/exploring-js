//exporing JS execution environment
// just a small project to explore the finer points of javascript

// getJS, so I can view CODE examples in HTML

function getJS(whatToGet) {

}

// example #1
function get_type(thing, definition) {
	var a = typeof(thing);
	var b = definition;
	console.log('This is supposed to be a ' + b + ', and is a ' + a + '.');
}

var display_types = function() {
	console.clear();
	get_type('adsf', 'string');
	get_type(1, 'number');
	get_type({}, 'object');
	get_type(true, 'boolean');
	get_type(Symbol(), 'symbol');
	get_type(undefined, 'undefined');
	get_type(['red', 'blue', 'green', 'pink'], 'array');
	get_type(null, 'null');
	get_type(NaN, 'NaN');
};

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

// some functions inside an array

var useFunctionFromArray = function() {
	console.clear()
	var arr = ['test1', function() {
		console.log('I\'m a function inside an Array, I\'m being invoked by arr[0]()')
	}, 'test3']

	arr[1]()
}

// an interesting thing that js has
// confirm("Shall we, then?");

// not sure why these aren't used more often
// prompt("Tell me everything you know.", "...");

// print("X");

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

different results... frist is true, second is false, because in first one JS is converting types... better to always use === and if you want to compare types use typeof


	console.log(null == undefined);
	true

	console.log(null === undefined);
	false

	console.log(typeof(null) == typeof(undefined));
	this will return false*/

document.addEventListener("DOMContentLoaded", function() {
	//example #1 buttons
	var el = document.getElementById('get-types');
	el.addEventListener("click", display_types);

	//re assign alert function
	var el = document.getElementById('assign-alert');
	el.addEventListener("click", assignAlert);

	var el = document.getElementById('use-function-from-array');
	el.addEventListener("click", useFunctionFromArray);

})