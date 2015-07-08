var expect = require( 'chai' ).expect;
var sumAll = require( '../18-sum-numbers' );

describe( '#sumAll numbers in a range', function() {

  it( 'Should return the sum of a range', function() {
    expect( sumAll([ 1, 4 ])).to.equal( 10 );
  });

  it( 'Should return the sum of a range', function() {
    expect( sumAll([ 4, 1 ])).to.equal( 10 );
  });

  it( 'Should return the sum of a range', function() {
    expect( sumAll([ 5, 10 ])).to.equal( 45 );
  });

  it( 'Should return the sum of a range', function() {
    expect( sumAll([ 10, 5 ])).to.equal( 45 );
  });

});
