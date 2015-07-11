var expect = require( 'chai' ).expect;
var unite  = require( '../26-sorted-union' );

describe( '#unite Sorted Union', function() {

  it( 'Should return an unified array without repeat equal items', function() {
    expect( unite([1, 3, 2], [5, 2, 1, 4], [2, 1])).to.deep.equal([1, 3, 2, 5, 4]);
  });

  it( 'Should return an unified array without repeat equal items', function() {
    expect( unite([1, 3, 2], [1, [5]], [2, [4]])).to.deep.equal([1, 3, 2, [5], [4]]);
  });

});
