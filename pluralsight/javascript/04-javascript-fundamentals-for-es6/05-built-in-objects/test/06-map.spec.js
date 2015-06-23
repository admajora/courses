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

});
