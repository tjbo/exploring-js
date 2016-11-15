## Exploring JS

Exploring JS is just a place I wanted to create to store everything that I know about JavaScript since the beginning. I have also always enjoyed writing, and lately I feel I have gotten away from this. And so what better way to kill two birds with one stone than to write about what I want to make I retain to memory.

This guide is basically organic and so may change and reorganize over time as I continue to expand on it or fix typos.

Where there is code, with javascript it can generally be copy and pasted into google chrome.

Or if you have node installed you can also just type `node` in a terminal, hit enter, and you will get a prompt where you can execute JavaScript.

I've also put comments in like `// returns 'something'` for each statement that would otherwise get executed. Just in case you do not feel like actually executing it yourself.

## 1. You may notice I'm not using semi-colons

There have been many Semi-Colon debates and controversies over the years.


Personally I believe in taking JavaScript to the hippest level that it can be at. In this hip and dangerous world, I do not use semi-colons.

My JavaScript lives on a semi-colon-less 'nude beach' where it walks around in the morally reprehensible state of going without.

There are actually only a few places you need to use them. Basically if any of the following are true, you need to use them:

```javascript
;-less	// line starts with unary - operator
;+less	// line starts with unary + opeartor
;/less/	// line starts with regexp literal
;[less]	// line starts with array initializer
;(less)	// line starts with grouping operator, such as IIFE
```

It's important to note that the 5th item on this list is actually probably the only line you'd write in a production code base. But honestly, with ES6 I find I barely even write many IIFEs as compared to a few years ago, and so this is not even really true.

Personally I now try to avoid using semi-colons in my own codebase. However at work, other people may be difficult to convince that you don't actually need them, especially developers where JavaScript is not their first language.

Most of the reason behind using semi-colons were laid out by a man named Douglas Crockford. In my opinion, just because someone else has an opinion doesn't mean you should follow it. And alot of other people believe in not using them.

If you are working in a group, it's probably best to come to a consensus, and even better to use a linter.

If you are joining a group that is already a semi-colon group, it's probably best to keep your mouth shut until you get to know them to point out that you don't actually need to use them.

It's also important to point out that JavaScript has something called Automatic Semi-Colon insertion. I want go into the details of that here, but basically JavaScript will inject the semi-colons for you when it runs.

If you really don't know what you are doing, and don't care to find out, my advice to you is to use them.

If this was mind blowing information for you and you want to go deeper on this topic, I'd recommend the following two articles:

[1] http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2] http://mislav.net/2010/05/semicolons/


## 2. You may notice I'am using `` instead of ''.

`` is new in ES6 and denotes a string. In the older version of JavasSciprt (ES5) you'd have to do something weird like this:
```javascript
var something = 'the string'
console.log('it\'s a string named' + something)
```

Whereas nowadays you can use the much more superior string denonator, and your JavaScript will be very hip:

```javascript

const backslash = 'backslash'
console.log(`it's a string, notice I'm not using a ${backslash} character`)
```

## 3. What the hell is an IFFE?

An IFFE (pronoucend ify), is an immediately invoked function expression.

```javascript
(function() {
    console.log(`Help me, for I have become immediately invoked`)
})()
```

The first set of parenthese is what makes it an expression, and the () on the end is what `immediately invokes it` which are fancy words for 'executes it automatically', which are fancier words for `makes it do stuff`. And of course the *function* keyword is what makes it a function.

```javascript
(function() {
    console.log(`Help me, for I have become immediately invoked`)
}())
```

In this example I've moved the second set of parenthesis inside the first set – but it makes no difference.

```javascript
(function(str) {
    console.log(`Help me, for I have become immediately invoked ${str}`)
}(`and just passed another string to myself`))
```

You may also see the above in the wild, where something get's passed into what you are invoking. This is a good pattern if you want to pass things into your scope, but also want keep it protected.

If you are coding in an ES6 codebase you tend to use less of theses than in days gone by. Mostly because an IFFE is a good way to isolate your variables and keep them from being hoisted into the global scope when you don't have modules.

This pattern is often used when trying to avoid polluting the global namespace, because all the variables used inside the IIFE (like in any other normal function) are not visible outside its scope.

```javascript
(function(){
    // all your code here
    var foo = function() {};
    window.onload = foo;
    // ...
})();
// foo is unreachable here (it’s undefined)
```

In the above example, it's important to note that window is accessible. Window since in this case it is the global, is actually accessible at every point in time.

You will often here people talk about not pollutiong the global scope. Almost every program will have one or even a few things in the gobal scope in practice. But what this idea basically means is to not *hoist* everything onto the global scope`. THe reason you avoid this, is because not doing it allows some parts of your code to stay 'private' and modularized.


## 4 More than just Logging

Chrome Dev tools also has other things besides console.log()

Such as:

```javascript
console.warn()
console.error()
console.info()
```

These can come in handy if you actually want to log stuff out. But since you might want to not have console.logs all over the place you could also use my handy isomorphicLogger, which will allow you to use the same logging library on the Frontend as well as the backend.

When I'm testing code I generally use `console`, however, when I do not want to test but I still want some logging, I will generally use a logging script.

```javascript
import log from 'isompohicLogger'
log.log(`I have logged something`)
```




## 5. JavaScript has types just like every other language.

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

