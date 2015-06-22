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

});
