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