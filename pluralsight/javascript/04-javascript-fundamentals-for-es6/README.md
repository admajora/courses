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
  
  console.log( x ); 
  // 3
  console.log( y ); 
  // 2
  console.log( z ); 
  // undefined
  
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
  
  console.log( firstName ); 
  // "Eric"
  console.log( twitter ); 
  // "@ericdouglas_"
  
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

  console.log( result ); 
  //  Object { data="JavaScript Books",  cache=true}
  
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
  console.log( result ); 
  // "Eric"

})();
```

```js
(function() {
  
  'use strict';

  var doWork = function( a = 1, b = 2, c = 3 ) {
    return [ a, b, c ];
  };

  let [ a, b, c ] = doWork( 5, undefined );
  console.log( a ); 
  // 5
  console.log( b ); 
  // 2
  console.log( c ); 
  // 3

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
  console.log( result ); 
  // 

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
  console.log( result ); 
  // 6

})();
```

```js
(function() {

  'use strict';

  var a = [ 4, 5, 6 ];
  var b = [ 1, 2, 3, ...a, 7, 8 ];

  console.log( b ); 
  // [1,2,3,4,5,6,7,8]

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
  console.log( result ); 
  // "Hello, Eric"

}());
```

```js
(function() {
  
  'use strict';

  let category = 'music';
  let id       = 2112;

  let url = `http://apiserver/${ category }/${ id }`;

  console.log( url ); 
  // "http://apiserver/music/2112"

}());
```

```js
(function() {
  
  'use strict';

  let upper = function( strings, ...values ) {

    console.log( strings ); 
    // ["", " + ", " is ", ""]
    console.log( values ); 
    // [1, 3, 4]

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
console.log( e.doWork()); 
// "complete!"
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
  console.log( e.doWork()); 
  // "complete!"

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

  console.log( e.doWork()); 
  // "complete!"
  console.log( e.getName()); 
  // "Eric"

  // class is a syntax sugar for prototype
  console.log( Employee.prototype.doWork.call( e )); 
  // "complete!"

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

  console.log( e1.getName()); 
  // "Eric"
  console.log( e2.getName()); 
  // "Douglas"

}());
```

### 3.5 get and set

```js
(function() {

  'use strict';

  class Employee {

    constructor( name ) {

      this._name = name;

    }

    doWork() {

      return 'complete!';

    }

    get name() {

      return this._name.toUpperCase();

    }

    set name( newValue ) {

      this._name = newValue;

    }

  }

  let e1 = new Employee( 'Eric' );
  let e2 = new Employee( 'Douglas' );

  console.log( e1.name ); 
  // ERIC
  console.log( e2.name ); 
  // DOUGLAS

  e1.name = "Eric Douglas";
  console.log( e1.name );
  // "ERIC DOUGLAS"

}());
```

### 3.6 Inheritance

```js
(function() {
  
  'use strict';

  class Person {

    constructor( name ) {

      this._name = name;

    }

    get name() {

      return this._name;

    }

    set name( newValue ) {

      if ( newValue ) {
        this._name = newValue;
      }

    }

  }

  class Employee extends Person {

    doWork() {

      return `${ this._name } is working`;

    }

  }

  let p1 = new Person( "Eric" );
  let e1 = new Employee( "Eric Douglas" );

  console.log( p1.name );
  // "Eric"
  console.log( e1.name );
  // "Eric Douglas"
  console.log( e1.doWork());
  // "Eric Douglas is working"

}());
```

Inheritance

> Person > Employee (is a person) > Manager (is an employee) > Executive (is a manager)

### 3.7 super

```js
(function() {
  
  'use strict';

  class Person {

    constructor( name ) {

      this._name = name;

    }

    get name() {

      return this._name;

    }

    set name( newValue ) {

      if ( newValue ) {
        this._name = newValue;
      }

    }

  }

  class Employee extends Person {

    constructor( title, name ) {

      super( name );
      this._title = title;

    }

    get title() {

      return this._title;

    }

    doWork() {

      // super();
      return `${ this._name } is working`;

    }

  }

  let e1 = new Employee( "Software Engineer", "Eric Douglas" );

  console.log( e1.name );
  // "Eric Douglas"
  console.log( e1.title);
  // "Software Engineer"

}());
```

### 3.8 Overrides

## 4. Functional JavaScript

### 4.1 Introduction

### 4.2 Arrows

```js
(function() {
  
  'use strict';

  let add    = ( x, y ) => x + y;
  let square = x => x * x;
  let three  = () => 3;

  console.log( square( add( 2, three())));
  // 25

}());
```

```js
(function() {
  
  'use strict';

  var numbers = [ 1, 2, 3, 4 ];
  var sum = 0;

  numbers
    .forEach( n => sum += n );

  console.log( sum );
  // 10

}());
```

```js
(function() {
  
  'use strict';

  var numbers = [ 1, 2, 3, 4 ];
  
  var doubled = numbers.map( n => n * 2 );
  console.log( doubled );
  // [ 2, 4, 6, 8 ]

}());
```

### 4.3 Arrows and Asynch

```js
// lexically binds to 'this'
(function() {
  
  'use strict';

  this.name = "Eric";

  setTimeout( () => {

    console.log( this.name );
    // "Eric"

  });

}());
```

### 4.4 Iterators

```js
(function() {
  
  'use strict';

  var sum     = 0;
  var numbers = [ 1, 2, 3, 4 ];

  // iterator
  let iterator = numbers.values();
  console.log( 'it', iterator );
  // it {}
  
  let next = iterator.next();
  console.log( 'n1', next );
  // n1 {"value":1,"done":false}

  while ( !next.done ) {

    sum += next.value;
    next = iterator.next();
    
    console.log( 'nn', next );
    // n1 {"value":1,"done":false}
    // nn {"value":2,"done":false}
    // nn {"value":3,"done":false}
    // nn {"value":4,"done":false}
    // nn {"done":true}

  }

  console.log( sum );
  // 10

}());
```

### 4.5 for of

```js
(function() {
  
  'use strict';

  let sum = 0;
  let numbers = [ 1, 2, 3, 4 ];

  for ( let n of numbers ) {

    sum += n;

  }

  console.log( sum );
  // 10

}());
```

### 4.6 Build your own iterable

```js
(function() {
  
  'use strict';

  class Company {

    constructor() {

      this.employees = [];

    }

    addEmployees( ...names ) {
    
      this.employees = this.employees.concat( names );
    
    }

    [ Symbol.iterator ]() {
    
      return new ArrayIterator( this.employees );
    
    }

  }

  class ArrayIterator {
  
    constructor( array ) {
    
      this.array = array;
      this.index = 0;

    }

    next() {
    
      var result = { value : undefined, done : true };

      if ( this.index < this.array.length ) {

        result.value = this.array[ this.index ];
        result.done  = false;
      
        this.index += 1;
      
      }

      return result;
    
    }
  
  }

  let count = 0;
  let company = new Company();

  company.addEmployees( 'Eric', 'Douglas', 'John', 'Tobi' );

  for ( let employee of company ) {
  
    count += 1;

  }

  console.log( count );
  // 4

}());
```

### 4.7 Generators

```js
(function() {

  'use strict';

  // can build an iterable
  let numbers = function *( start, end ) {
  
    for ( let i = start; i <= end; i += 1 ) {
    
      console.log( i );
      yield i ;
    
    }
  
  };

  let sum = 0;
  let iterator = numbers( 1, 4 );
  console.log( 'next' );
  let next = iterator.next();

  while ( !next.done ) {
  
    sum += next.value;
    next = iterator.next();
  
  }

  console.log( sum );
  // 10

}());
```

```js
(function() {

  'use strict';

  // can build an iterable
  let numbers = function *( start, end ) {
  
    for ( let i = start; i <= end; i += 1 ) {
    
      console.log( i );
      yield i;
    
    }
  
  };

  let sum = 0;
  console.log( 'next' );

  for ( let n of numbers( 1, 5 )) {
  
    sum += n;
    console.log( 'next' );
  
  }

  console.log( sum );
  // 15

}());
```

### 4.8 Putting it together

```js
(function() {

  'use strict';

  class Company {

    constructor() {
      this.employees = [];
    }

    addEmployees( ...names ) {
      this.employees = this.employees.concat( names );
    }

    *[ Symbol.iterator ]() {
      for ( let e of this.employees ) {
        console.log( e );
        yield e;
      }
    }
  
  }

  let count = 0;
  let company = new Company();

  company.addEmployees( 'Eric', 'Douglas', 'John', 'Tobi' );

  for ( let employee of company ) {
    count += 1;
  }

  console.log( count );
  // 4

}());
```

**Lazy Evaluation**

```js
(function() {

  'use strict';

  class Company {

    constructor() {
      this.employees = [];
    }

    addEmployees( ...names ) {
      this.employees = this.employees.concat( names );
    }

    *[ Symbol.iterator ]() {
      for ( let e of this.employees ) {
        console.log( e );
        yield e;
      }
    }
  
  }

  let filter = function *( items, predicate ) {
    for ( let item of items ) {
      console.log( 'filter', item );
      if ( predicate( item )) {
        yield item;
      }
    }
  };

  let count = 0;
  let company = new Company();

  company.addEmployees( 'Eric', 'Douglas', 'John', 'Tobi' );

  for ( let employee of filter( company, e => e[ 0 ] === 'T' )) {
    count += 1;
  }

  console.log( count );
  // 1

  // final log
  // "Tobias"
  // "filter Tobias"
  // 1

}());
```

**take and filter**

```js
(function() {

  'use strict';

  class Company {

    constructor() {
      this.employees = [];
    }

    addEmployees( ...names ) {
      this.employees = this.employees.concat( names );
    }

    *[ Symbol.iterator ]() {
      for ( let e of this.employees ) {
        console.log( e );
        yield e;
      }
    }
  
  }

  let filter = function *( items, predicate ) {
    for ( let item of items ) {
      console.log( 'filter', item );
      if ( predicate( item )) {
        yield item;
      }
    }
  };

  let take = function *( items, number ) {
    let count = 0;

    if ( number < 1 ) {
      return;
    }

    for ( let item of items ) {
      console.log( 'take', item );
      yield item;
      count += 1;

      if ( count >= number ) {
        return;
      }
    }
  };

  let count = 0;
  let company = new Company();

  company.addEmployees( 'Tobias', 'Eric', 'Douglas', 'John', 'Tobi' );

  for ( let employee of take( filter( company, e => e[ 0 ] === 'T' ), 1 )) {
    count += 1;
  }

  console.log( count );
  // 1

}());
```

### 4.9 Calling next

```js
(function() {

  'use strict';

  /* can take a parameter from next( param ) */

  let range = function *( start, end ) {
    let current = start;

    while ( current <= end ) {
      let delta = yield current;
      current += delta || 1;
    }
  }

  let result = [];
  let iterator = range( 1, 10 );
  let next = iterator.next();

  while ( !next.done ) {
    result.push( next.value );
    next = iterator.next( 2 );
  }

  console.log( result );
  // [1,3,5,7,9]

}());
```

```js
(function() {

  'use strict';

  /* can take a parameter from next( param ) */

  let range = function ( start, end ) {
    let current = start;
    let first   = true;

    return {
      next( delta = 1 ) {
        let result = { value : undefined, done : true };

        if ( !first ) {
          current += delta;
        }

        if ( current <= end ) {
          result.value = current;
          result.done  = false;
        }

        first = false;
        return result;
      }
    };
  }

  let result = [];
  let iterator = range( 1, 10 );
  let next = iterator.next();

  while ( !next.done ) {
    result.push( next.value );
    next = iterator.next( 2 );
  }

  console.log( result );
  // [1,3,5,7,9]

}());
```

### 4.10 Comprehensions

Equivalents:

```js
(function() {

  'use strict';

  var numbers = [ for ( n of [ 1, 2, 3 ]) n * n ];
  console.log( numbers );
  // [1,4,9]

})();
```
```js
(function() {

  'use strict';

  let numbers = [];
  for ( let n of [ 1, 2, 3 ]) {
    numbers.push( n * n );
  }
  console.log( numbers );
  // [1,4,9]

})();
```

**More examples**

Array comprehension
```js
(function() {

  'use strict';

  var numbers = [ for ( n of [ 1, 2, 3 ]) if ( n > 1 ) n * n ];
  console.log( numbers );
  // [4,9]

})();
```

Generator comprehension
```js
(function() {

  'use strict';

  var numbers = ( for ( n of [ 1, 2, 3 ]) n * n );
  console.log( Array.from( numbers ));
  // 1,4,9

})();
```

**PRO TIP**
```js
yield [ for ( item of items ) item ]
// yield ["Tim", "Sue", "Joy", "Tom"]

yield* [ for ( item of items ) item ]
// yield "Tim"
// yield "Sue"
// yield "Joy"
// yield "Tom"
```

Company Refactor...

```js
(function() {

  'use strict';

  class Company {
    constructor() {
      this.employees = [];
    }

    addEmployees( ...name ) {
      this.employees = this.employees.concat( names );
    }

    *[Symbol.iterator]() {
      for ( let e of this.employees ) {
        console.log( 'yield', e );
        yield e;
      }
    }
  }

  let filter = function *( items, predicate ) {

    // array comprehension - not lazy - iterate through all the array
    yield* [ for ( item of items ) if ( predicate( item )) item ]; 
    
    // generator comprehension - lazy
    yield ( for ( item of items ) if ( predicate( item )) item );
    // for ( let item of items ) {
    //   if ( predicate( item )) {
    //     yield item;
    //   }
    // }
  };

  let take = function *( items, number ) {
    let count = 0;
    if ( number < 1 ) return;
    for ( let item of items ) {
      yield item;
      count += 1;
      if ( count >= number ) {
        return;
      }
    }
  };

  let count = 0;
  let company = new Company();
  let found = undefined;
  
  company
    .addEmployees( 'Tim', 'Sue', Joy', 'Tom' );

  for ( let employee of take( filter( company, e => e[ 0 ] === 'S' ), 1 )) {
    count += 1;
    found = employee;
    console.log( 'got', employee );
  }

})();
```

## 5. Built-in objects

### 5.1 Introduction



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

