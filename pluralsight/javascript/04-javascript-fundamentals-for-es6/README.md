# [JavaScript Fundamentals for ES6](http://www.pluralsight.com/courses/javascript-fundamentals-es6)

## 2. Variables and Parameters

### 2.1 Introduction

### 2.2 `let`

- let give to us true block scope
- always use `let` within `for` loops

```js
for ( let i = 1; i <= 6; i += 1 ) {
  console.log( 'ECMAScript ' + i );
}
```

### 2.3 `const`

- read-only variable
- if you try to assign a new value to a `const` variable, you'll get a Syntax error

```js
const PI = 3.14159;
```

### 2.4 `Destructuring`

```js
(function() {
  
  'use strict';

  var doWork = function() {
    return [ 1, 3, 2 ];
  };

  let [ , x, y, z ] = doWork();
  
  console.log( x ); // 3
  console.log( y ); // 2
  console.log( z ); // undefined
  
})();
```

```js
(function() {
  
  'use strict';

  let doWork = function() {

    return {
      firstName : 'Eric',
      lastName  : 'Oliveira',
      handles   : {
        twitter : '@ericdouglas_'
      }
    };

  };

  let {
    firstName,
    handles : { twitter }
  } = doWork();
  
  console.log( firstName ); // "Eric"
  console.log( twitter ); // "@ericdouglas_"
  
})();
```

```js
(function() {
  
  'use strict';

  let doWork = function( url, { data, cache }) {

    return { 
      data  : data,
      cache : cache
    };

  };

  let result = doWork(
    "api/v1/books",
    {
      data  : 'JavaScript Books',
      cache : true
    }
  );

  console.log( result ); //  Object { data="JavaScript Books",  cache=true}
  
})();
```

## 9. Using ES6 Today

### 9.1 Introduction

- Methods for using ES6 today
  - Execution Environment
  - Transpiler
  - Polyfills/Shims
- [ECMAScript 6 Tools](https://github.com/addyosmani/es6-tools)

### 9.2 Browsers

- On Chrome: `chrome://flags` -> Enable Experimental JavaScript on Chrome ✔
- New versions of Firefox
- Browsers are:
  - OK for experimentation
  - OK for intranet/extranet
- Will be production-ready in time

### 9.3 Traceur

- transpile ES6 to ES5
- [Traceur Transcoding Demo](https://google.github.io/traceur-compiler/demo/repl.html#%2F%2F%20Options%3A%20--annotations%20--array-comprehension%20--async-functions%20--async-generators%20--comment-callback%20--debug%20--debug-names%20--exponentiation%20--export-from-extended%20--for-on%20--free-variable-checker%20--generator-comprehension%20--input-source-map%20--low-resolution-source-map%20--member-variables%20--proper-tail-calls%20--referrer%20--require%20--script%20--source-maps%20--source-root%20--symbols%20--type-assertion-module%20--type-assertions%20--types%20--validate%20%0Alet%20%3D%20a%3B)
- [Plunker](plnkr.co)

### 5.4 Traceur in production

- Command line
- Third party tool
- Webstorm