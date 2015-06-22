var expect = require( 'chai' ).expect;

describe( 'Arrays', function() {

  it( 'should return the first matching element using find', function() {
    var ary = [ 1, 5, 10 ];
    var match = ary.find( item => item > 8 );

      expect( match ).to.equal( 10 );
  });

  it( 'should return the first matching index using findIndex', function() {
    var match = [ 1, 5, 10 ].findIndex( item => item > 3 );
    expect( match ).to.equal( 1 );
  });

  it( 'should fill in the entire array when fill is called', function() {
    var a = [ 1, 2, 3, 4, 5 ];
    a.fill( 'a' ); // [ 'a', 'a', 'a', 'a', 'a' ]
    expect( a[ 3 ]).to.equal( 'a' );
  });

  it( 'should fill in some of the array when fill is called with args', function() {
    var a = [ 1, 2, 3, 4, 5 ];
    a.fill( 'a', 2, 3 );
    expect( a[ 2 ]).to.equal( 'a' );
    expect( a[ 3 ]).to.equal( 4 ); 
  });
  
  it( 'should copy elements with copyWithin', function() {
    var a = [ 1, 2, 3, 4 ];
    a.copyWithin( 0, -2 ); // [3,4,3,4]

    expect( a[ 0 ]).to.equal( 3 );
    expect( a[ 1 ]).to.equal( 4 );
  });

  it( 'should create a new array with 1 arg when given 1 arg when of is called', function() {
    var a   = new Array( 3 );
    var ofA = Array.of( 3 );

    expect( a.length ).to.equal( 3 );
    expect( ofA.length ).to.equal( 1 );
  });

  it( 'should create a new array from an array-like object when from is called', function() {
    var arrayLike = arguments;
    expect( arrayLike.forEach ).to.equal( undefined );

    var fromArray = Array.from( arrayLike );
    expect( fromArray.forEach ).to.be.ok;
  });

  it( 'should return entries from the entries function', function() {
    var a = [ 'Joe', 'Jim', 'John' ];
    var entries = a.entries();
    var firstEntry = entries.next().value;
    
    expect( firstEntry[ 0 ]).to.equal( 0 );
    expect( firstEntry[ 1 ]).to.equal( 'Joe' );
  });

});
