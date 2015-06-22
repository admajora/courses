var expect = require( 'chai' ).expect;

describe( 'Sets', function() {

  it( 'should contain zero items when constructed', function() {
    var set = new Set();
    expect( set.size ).to.equal( 0 );
  });

  it( 'should contain 1 item when one item is added', function() {
    var set = new Set();
    set.add( 'somevalue' );
    expect( set.size ).to.equal( 1 );
  });

  it( 'should allow objects as a key', function() {
    var set = new Set();
    var key = {};
    set.add( key );
    expect( set.has( key )).to.be.true;
  });

  it( 'should contain items when given an array in the constructor', function() {
    var set = new Set([ 1, 2, 3 ]);
    expect( set.has( 1 )).to.be.true;
  });

  it( 'should not allow duplicate values', function() {
    var set = new Set();
    var key = {};
    set.add( key );
    set.add( key );
    expect( set.size ).to.equal( 1 );
  });

  it( 'should have no items after clear is called', function() {
    var set = new Set();
    set.add( 1 );
    set.add( 2 );
    set.add( 3 );
    set.clear();
    expect( set.size ).to.equal( 0 );
  });

  it( 'should remove an item when delete is called', function() {
    var set = new Set();
    set.add( 1 );
    set.add( 2 );
    set.delete( 1 );
    expect( set.size ).to.equal( 1 );
  });

  it( 'should support for of iteration', function() {
    var set = new Set([ 1, 2, 3 ]);
    var iterationCount = 0;
    for ( var item of set ) {
      iterationCount += 1;
    }
    expect( iterationCount ).to.equal( 3 );
  });

  it( 'should return an iterator of arrays when entries is called', function() {
    var set = new Set();
    set.add( '1' );

    var entries = set.entries();
    var firstEntry = entries.next().value;

    expect( firstEntry[ 0 ]).to.equal( '1' );
    expect( firstEntry[ 1 ]).to.equal( '1' );
  });

});
