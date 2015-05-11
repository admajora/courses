# [Advanced JavaScript](http://www.pluralsight.com/courses/advanced-javascript)

- Recommended books: High Performance JavaScript and JavaScript Patterns
- Author's books : [You Don't Know JS (book series)](https://github.com/getify/You-Dont-Know-JS)
- [MDN](https://developer.mozilla.org/en-US/docs/JavaScript)
- [Idiomatic.js](https://github.com/rwldrn/idiomatic.js)
- [ECMAScript Specification](http://www.ecma-international.org/ecma-262/5.1/)
- [Harmony: proposals](http://wiki.ecmascript.org/doku.php?id=harmony:proposals)

## Scope and execution example:

```js
var some = 'value';

function hello() {
  var some = 'another value';
  
  function changeValues( some ) {
    some = 'Different value';
    help = 'Are you ok?!';
    
    console.log( '1:', some ); // 1: Different value
  }
  
  changeValues();
  console.log( '2:', some ); // 2: another value
  
}

hello();
console.log( some ); // "value"
console.log( help ); // "Are you ok?!
```

## Function declaration, function expressions and block scope

```js
// Function expression 
// Named function could be called in its inner scope
var sayHello = function hello() {
  var some = 'value';

  // Function declaration
  function bye( name ) {
    return 'Bye ' + name;
  }

}

// Function expression
// Anonymous function, couldn't be called in its inner scope
var hello = function( name ) {
  return 'Hi! ' + name;
}
```

- The `catch` block of `try{} catch ( err ){}` is also a type of scope, like the function scope

```js
var some;

try {
  some.length;
} catch( err ) {
  console.log( err ); // TypeError: Cannot read property 'length' of undefined
  var some = 'Value';
}

console.log( err ); // ReferenceError: err is not defined
```

## Cheating lexical scope: eval

- The `strict mode` help us to have a more optimized code
- Avoid `eval` and `with`

## IIFE Pattern

Immediately invoked function expression

```js
var obj = { guitar : 'Ibanez' };

( function() {
  
  var obj = { guitar : 'MusicMan', price : 3100 };

  console.log( obj.guitar ); // MusicMan

}());

console.log( obj.guitar ); // Ibanez
```

- Name IIFEs

- Passing parameters to IIFE

```js
var today = 'now';

( function setDay( global, today ) {
  
  var day = today;  
  console.log( '1', day ); // "1 now"
  
  global.today = new Date();
  day = today;
  console.log( '2', day ); // " 2 now"
  
  day = global.today;
  console.log( '3', day ); // "3 Thu Apr 23 2015 21:41:54"
  
}( window, today ));

console.log( '4', today ); // "3 Thu Apr 23 2015 21:41:54"
```