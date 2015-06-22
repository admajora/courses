var expect = require( 'chai' ).expect;

describe( 'Sets', function() {

  it( 'should contain zero items when constructed', function() {
    var set = new Set();
    expect( set.size ).to.equal( 0 );
  });

});
