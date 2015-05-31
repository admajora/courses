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