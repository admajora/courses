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

});
