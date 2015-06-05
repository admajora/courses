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

### 2.4 Destructuring

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

### 2.5 Default Parameters

```js
(function() {
  
  'use strict';

  var doWork = function( name = "Eric" ) {
    return name;
  };

  var result = doWork();
  console.log( result ); // "Eric"

})();
```

```js
(function() {
  
  'use strict';

  var doWork = function( a = 1, b = 2, c = 3 ) {
    return [ a, b, c ];
  };

  let [ a, b, c ] = doWork( 5, undefined );
  console.log( a ); // 5
  console.log( b ); // 2
  console.log( c ); // 3

})();
```

```js
(function() {
  
  'use strict';

  let doWork = function( url, { data = 'Eric Douglas', cache = true }) {
    return {
      data  : data,
      cache : true
    };
  };

  let result = doWork( "api/v1/authors" );
  console.log( result ); // 

})();
```

### 2.6 Rest Parameters

```js
(function() {
  
  let doWork = function( name, ...numbers ) {
    
    let result = 0;

    numbers
      .forEach( function( n ) {

        result += n;

      });

      return result;

  };

  let result = doWork( 'Eric', 2, 5, 6 );
  console.log( result );

})();
```

### 2.7 Spread

```js
(function() {

  'use strict';

  let doWork = function( x, y, z ) {
  
    return x + y + z;

  };

  var result = doWork( ...[ 1, 2, 3 ]);
  console.log( result ); // 6

})();
```

```js
(function() {

  'use strict';

  var a = [ 4, 5, 6 ];
  var b = [ 1, 2, 3, ...a, 7, 8 ];

  console.log( b ); // [1,2,3,4,5,6,7,8]

})();
```js

### 2.8 Template Literals

```js
(function() {
  
  'use strict';

  let doWord = function( name ) {

    return `Hello, ${ name }`;

  };

  let result = doWork( 'Eric' );
  console.log( result ); // "Hello, Eric"

}());
```

```js
(function() {
  
  'use strict';

  let category = 'music';
  let id       = 2112;

  let url = `http://apiserver/${ category }/${ id }`;

  console.log( url ); // "http://apiserver/music/2112"

}());
```

```js
(function() {
  
  'use strict';

  let upper = function( strings, ...values ) {

    console.log( strings ); // ["", " + ", " is ", ""]
    console.log( values ); // [1, 3, 4]

    let result = "";

    for ( let i = 0; i < strings.length;  i += 1 ) {

      result += strings[ i ];

      if ( i < values.length ) {

        result += values[ i ];

      }

    }

    return result.toUpperCase();

  };

  var x = 1;
  var y = 3;
  var result = upper `${ x } + ${ y } is ${ x + y }`;

  console.log( result ); 

}());
```

## 3. Classes

### 3.1 Introdcution

### 3.2 Why Classes?

**Class vs Prototype**

Prototype:

```js
var Employee = function() {

};

Employee.prototype = {
  
  doWork : function() {

    return "complete!";
  
  };

};

var e = new Employee();
console.log( e.doWork()); // "complete!"
```

Class:

```js
(function() {
  
  'use strict';

  class Employee {

    doWork() {

      return "complete!";

    }

  }

  var e = new Employee();
  console.log( e.doWork()); // "complete!"

}());
```

### 3.3 Defining a class

```js
(function() {
  
  'use strict';

  class Employee {

    doWork() {

      return "complete!";

    }

    getName() {

      return "Eric";

    }

  }

  let e = new Employee();

  console.log( e.doWork()); // "complete!"
  console.log( e.getName()); // "Eric"

  // class is a syntax sugar for prototype
  console.log( Employee.prototype.doWork.call( e )); // "complete!"

}());
```

### 3.4 constructor

```js
(function() {
  
  'use strict';

  class Employee {

    constructor( name ) {

      this._name = name;

    }

    doWork() {

      return "complete!";

    }

    getName() {

      return this._name;

    }

  }

  let e1 = new Employee( "Eric" );
  let e2 = new Employee( "Douglas" );

  console.log( e1.getName()); // "Eric"
  console.log( e2.getName()); // "Douglas"

}());
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