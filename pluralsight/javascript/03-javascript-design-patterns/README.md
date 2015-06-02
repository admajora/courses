# [JavaScript Design Patterns](http://www.pluralsight.com/courses/javascript-design-patterns)

## 1. Common Object Patterns

### 1.1 Introduction

### 1.2 Function Argument Pattterns

**Magic Arguments**

- Arguments aren't required like .NET languages
- Like all variables in JavaScript, arguments are untyped
- Unspecified arguments become `undefined`
- Arguments are available through the `arguments` object
  - It's *array-like* but not really an array
  
```js
function add() {

  var x = 0;
  
  for ( var i = 0; i < arguments.length; i += 1 ) {
    x += arguments[ i ];
  }
  
  return x; // 6

}

console.log( add( 1, 2, 3 ));

function addFunctional() {
  
  var result = 0;
  var args   = Array.prototype.slice.call( arguments );
  
  args
    .forEach( function( element ) {
    
      result += element;
    
  });
  
  return result;
  
}

console.log( addFunctional( 1, 2, 3 )); // 6
```

### 1.2 Chaining

- Useful for creating fluent API for working agains a mutable object
- Designed around returning the source object
- Popularized by jQuery
- **Return the object you want to chain**
  - The `this`object
  - Capture the `this` object if the caller isn't trusted

Ex:

```js
jQuery( '.foo )
  .addClass( 'bar' )
  .fadeIn( 'slow' )
  .html( 'Hello World' );
```

### 1.3 Observable Properties

- How can you react to a value changing on an object?
- JavaScript properties are really just public fields
  - So how do we address the lack of method body?
  - By using methods-as-properties
    - This is what Knockout.js uses
    
## 1.4 Observable Property Futures

- In ES5 properties can have method bodies
- Only available in current generation browsers

```js
function Book() {

	var name = '';
	
	Object.defineProperty( this, 'name', {
	
		get : function() {
		
		  return name;
		  
		},
		
		set : function( val ) {
		
			console.log( val );
			name = val;
			
		}
	
	});

}
```

**Recap**

- Properties implemented as methods
- Check the incoming value and decide if you want to update
- Return private variable
- Store event handlers in an array
- Utilise return values to abort the updating process

## 2. Timer Patterns

### 2.1 JavaScript Timers

- Two kinds of timers in JavaScript
  - `setTimeout`
  - `setInterval`
- Both take two arguments, a function to invoke and a delay period
- setTimeout will execute the function once
- setInterval will execute continuously with the specified delay between each execution
- delays of **< 4ms** will be bumped to 4ms
- timers won't start until the outer most function is finished

### 2.2 Timer Overview

### 2.3 Asynchronous Execution Pattern

- Browsers are typically single threaded
  - Either updating the UI or executing JavaScript
- Long-running JavaScript blocks the UI
  - Browser is *unresponsive*
- Splitting long-running code over setTimeout blocks releases the thread
  - while processing a loop limit the scope to a small time window
  - ensure that there is enough of a gap between timeouts restarting
  
### 2.4 Demo: Asynchronous Execution Pattern

### 2.4 Recap

- Using a setTimeout of < 4ms will become 4ms
- Long running functions will block the UI
	- spli them over setTimeout calls
- Using too short timeout won't release to the UI either
- Pattern most useful on low powered devices

### 2.5 Recursive setTimeout Pattern

- Periodically running a piece of functionality, related to a duration
  - Most commonly used to query a data source
- Sounds like setInterval
- setInterval has a problem though...
  - JavaScript is asynchronous
  - Once an interval function finishes it is added back to the timer queue
  - But what if that function was waiting for an AJAX response?
    - Function execution can get out of order

**Using setTimeout**

```js
setTimeout( function getFoo() {
  
  $.get( '/foo', function( result ) {

    // do something with results
    setTimeout( getFoo, 1000 );

  });

}, 1000 );
```

### 2.6 DEMO: Recursive setTimeout Pattern

```js
<script>
  $(document).ready( function() {

    var ul    = $( 'ul.log' );
    var index = 0;

    setTimeout( function getDate() {

      var started = new Date();
      var i       = index;

      index += 1;

      $.get( '/home/date', function( date ) {

        var end = new Date();

        ul.append( '<li>Request ' + i + ' started at' + started.getHours() /* ... */ );

        setTimeout( getDate, 5000 );

      });

    }, 5000 );

  });
</script>
```

**Recap**

- setInterval ordering is unpredictable across browsers
  - Recursively invoking setTimeout can ensure order of execution

## 3. Asynchronous Module Definitions (AMDs)

### 3.1 Introduction

- JavaScript lacks any way to have external references
  - No using statement like C#
- How do you specify code blocks that rely on other blocks?
- How do you prevent scope leakage?
- JavaScript is blocking, only one file can be processed at any given time
  - Browsers will only download one at a time
- What about Node.js?
  - It doesn't need to download files like a browser

**CommonJS**

- An attempt to standardize common JavaScript patterns
- Most patterns have several proposals
- Attempts to be generic for all JavaScript run times (browsers, server-side, etc)
- Has a definition for Modules, currently at version 1.1.1
  - Very similar to modules in Node.js

### 3.2 Demo - Creating a Node.js module

### 3.3 RequireJS

- A module framework in the browser
- Doesn't implement CommonJS's module pattern
  - There's a problem for browsers, JavaScript is blocking so how can you do `require('some-module')`
- More browser-friendly API
  - Supports Node.js as well
- Defines a structure as to how you should layout your files
  - Uses conventions to perform lookups for depencies
  - Caution: this can be problematic with combination & minification of depencies

### 3.4 Demo - Creating a AMD with RequireJS

### 3.5 Future of JavaScript Modules

- Modules proposed for Harmony
- New keywords and new syntax
  - Won't be backwards compatible

```js
module math {
  export function sum( x, y ) { return x + y; }
  export var pi = 3.131593;
}

// usage
import { sum, pi } from math;

alert( "2π = " + sum( pi, pi ));
```

**Recap**

- Modules bring structure to JavaScript development
- Node.js uses CommonJS pattern
  - require('foo') to load a module
  - module.exports to expose functionality
- Require.js for browser-based modules
  - slightly different from CommonJS
  - `require` takes an array of depencies and a callback
  - `define` takes an array of depencies and exposes an API
- ECMAScript 6 is bringing language support

## 4. Pub/Sub

### 4.1 Introduction

- Lots of browser-level JavaScript relies on events
  - clicks, change, blur, etc
- What about JavaScript logic?
  - pub/sub bridges this gap
- A piece of code will raise an event
- N number of pieces will react to it
- Allows for disconnected communication between functions

### 4.2 Demo - Traditional communication

### 4.3 Introducing Pub/Sub

- To introduce Pub/Sub we need to:
  - refactor each logical part out
  - identify overlapping functionality
  - use messages to connect the components

### 4.4 Creating a Pub/Sub Library

## 5. Promises and Deferred

### 5.1 Introduction

- If everything is asynchronous how do we link operations?
- I want to know when one or more operations complete
  - AJAX
  - Animations
  - Etc

** How does it work?**

- A deferred object controls operation
- Progress raised as deferred runs
- Done raised when deferred action completes successfully
- Failure raised when deferred action is unsuccessful
- Future access to the deferred result should not change