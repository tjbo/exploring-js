# Exploring JS

Just a little guide to summarize the finer points of JavaScript on a deeper level and to have a place to put little things over time what I've learned about the language. You can copy and paste any of this code into Google Chrome tools to see the results, otherwise results are commented below each return.

## 1. You may notice I'm not using semi-colons

explain here...


## 2. You may notice I'am using `` instead of ''.

`` is new in ES6 and denotes a string. In the older version of JavasSciprt (es5) you'd have to do something weird like this:
```javascript
console.log('it\'s a string')
```

Whereas nowadays you can use:

```javascript

const backslash = 'dasfdafs'
console.log(`it's a string, notice I'm not using a ${backslash} character`)

```

## 3

Chrome Dev tools also has other things besides console.log()

Such as console.warn()
console.error()
console.info()

These can come in handy if you actually want to log stuff out. But since you might want to not have console.logs all over the place you could also use my handy isomorphicLogger, which will allow you to use the same logging library on teh Frontend as well as the backend.



## 1. JavaScript has types just like every other language.

```javascript
let a
typeof a
//returns 'undefined'

a = 'test'
typeof a
//returns 'string'

a = 42
type of a
//returns 'number'

a = true
typeof a
//returns 'boolean'

a = { b: 'b'}
typeof a
//returns 'object'

a = Symbol()
type of a
//return Symbol
```
 But not everything is as it seems:
```javascript
a = NaN

typeof a
//returns 'number

a = null
typeof a
//returns object (bug that will never be fixed as it has been in the language since the beginning)

a = ['a', 'b', 'c']
typeof a
//returns 'object', (an array is a subtype of an object)

a = function() {
    console.log('do stuff');
}
typeof a
//returns 'function', subtype of object, all functions in JS are objects
```

And since all functions in JavaScript are objects they can be used to create new objects:

```javascript
b = new a()
typeof b
 //returns 'object'
```

## 2. JavaScript exists in an 'Environment'
It's importnat to note that every JS enviroment comes with built in globals. Even though Node and a Web browser may share the V8 engine they may have very different global variables

For example:

```javascript
alert(`this is an alert message`)
```

You could reassign this global to something else. For example if you paste this into Chrome dev tools:

```javascript
window.alert = function() {
    console.warn(`I am alerting you in a much different way than you'd expect`)
}
```

And then call alert(), you will get something much different than the native implementation.



## 3. Arrays, Objects, Maps

An array can contain anything, where as an object or a map can only contain key, value pairs, the values in an object howerver can contain anything.


TODO:
- add a button that will log shit in chrome...
- finsih going through exploring JS doc... and move all stuff here

