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

});
