var expect = require( 'chai' ).expect;
var largestNumber = require( '../07-largest-number-in-array' );

describe( '#largestNumber()', function() {

  it( 'Should return an array with the largest number of all sub-arrays', function() {
    expect( largestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).to.deep.equal([5,27,39,1001]);
  });

  it( 'Should return an array with the largest number of all sub-arrays', function() {
    expect( largestNumber([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])).to.deep.equal([9,35,97,1000000]);
  });

})
