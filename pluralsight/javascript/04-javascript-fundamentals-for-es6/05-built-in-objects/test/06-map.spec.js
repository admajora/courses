var expect = require( 'chai' ).expect;

describe( 'Maps', function() {

  it( 'should contain zero items when constructed', function() {
    var map = new Map();
    expect( map.size ).to.equal( 0 );
  });

  it( 'should contain 1 item when one item is added', function() {
    var map = new Map();
    map.set( 'age', 35 );
    expect( map.size ).to.equal( 1 );
  });

  it( 'should allow an object to be the key', function() {
    var ageMap = new Map();
    var ralph = { 'name' : 'Ralph' };
    ageMap.set( ralph, 29 );

    expect( ageMap.get( ralph )).to.equal( 29 );
  });

  it( 'should contain items when given an array in the constructor', function(){
    var map = new Map([[ 'name', 'John' ], [ 'age', 15 ], [ 'weight', '155' ]]);
    expect( map.size ).to.equal( 3 );
  });

  it( 'should find the correct item when has is called', function(){
    var map = new Map([[ 'name', 'John'], [ 'age', '15' ], [ 'weight', '155' ]]);
    expect( map.has( 'age' )).to.be.true;
  });

  it( 'should not allow duplicate keys', function() {
    var map = new Map();
    var key = {};
    map.set( key, 'first' );
    map.set( key, 'second' );

    expect( map.get( key )).to.equal( 'second' );
  });

  it( 'should have no items after clear is called', function() {

    var map = new Map();
    
    map.set( 1, 'a' );
    map.set( 2, 'b' );
    map.set( 3, 'c' );

    map.clear();

    expect( map.size ).to.equal( 0 );
  });

  it( 'should remove an item when delete is called', function() {
    var map = new Map();
    var key1 = {};
    var key2 = {};

    map.set( key1, 100 );
    map.set( key2, 200 );

    map.delete( key2 );

    expect( map.has( key2 )).to.be.false;
  });

  it( 'should call the callback function for each item when forEach is called', function() {
    var map = new Map([[ 'name', 'John' ], [ 'age', 15 ], [ 'weight', '155' ]]);
    var iterationCount = 0;

    map.forEach( function( value, key ) {
      iterationCount++;
    });

    expect( iterationCount ).to.equal( 3 );
  });

  it( 'should support "for of" iteration', function() {
    var map = new Map([[ 'name', 'John' ], [ 'age', 15 ], [ 'weight', '155' ]]);
    var iterationCount = 0;

    for ( var [ key, value ] of map ) {
      // item is an array like [ 'name', John' ]
      iterationCount++;
    }

    expect( iterationCount ).to.equal( 3 );
  });

  it( 'should return an iterator of arrays of key value pairs when entries is called', function(){
    var map = new Map();
    map.set( 'name', 'Joe' );
    var items = map.entries();
    var first = items.next().value;

    expect( first[ 0 ]).to.equal( 'name' );
    expect( first[ 1 ]).to.equal( 'Joe' );
  });

});
