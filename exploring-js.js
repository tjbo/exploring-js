window.onload = function() { // just a small project to explore the finer points of javascript
	// basic types of values
	var _string = 'some string';
	var _num = 1;
	var _obj = {
		'key 1': 'value 1',
		'key 2': 'value 2',
	};
	var _null = null;
	var _bool = true;
	var _symbol = Symbol();
	var _undefined = undefined;
	var _arr = ['red', 'blue', 'green', 'pink'];


	function get_type(thing, definition) {
		var a = typeof(thing);
		var b = definition;
		console.log(b + ' is type ' + a + '.');

	}

	var display_types = function() {
		console.log('The first response is what it should be, the second is what it returns as. Notice how null is returned as an object.');
		get_type(_string, 'string');
		get_type(_num, 'number');
		get_type(_obj, 'object');
		get_type(_arr, 'array');
		get_type(_null, 'null');
		get_type(_bool, 'boolean');
		get_type(_symbol, 'symbol');
		get_type(_undefined, 'undefined');
	};

	var el = document.getElementById('get-types');
	el.addEventListener("click", display_types);


};
