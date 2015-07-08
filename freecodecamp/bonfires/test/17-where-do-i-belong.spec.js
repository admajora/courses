var expect = require( 'chai' ).expect;
var where  = require( '../17-where-do-i-belong' );

describe( '#whereDoIBelong', function() {

  it( 'Should return the index where the element should be inserted', function() {
    expect( where([ 10, 20, 30, 40, 50 ], 35 )).to.equal( 3 );
  });

  it( 'Should return the index where the element should be inserted', function() {
    expect( where([ 10, 20, 30, 40, 50 ], 30 )).to.equal( 2 );
  });

});
