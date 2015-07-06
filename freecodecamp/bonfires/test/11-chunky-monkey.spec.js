var expect = require( 'chai' ).expect;
var chunk = require( '../11-chunky-monkey' );

describe( '#chunky()', function() {

  it( 'Should return an multi-dimensional array', function() {
    expect( chunk( ['a', 'b', 'c', 'd'], 2 )).to.deep.equal( [['a', 'b'], ['c', 'd']] );
  });

  it( 'Should return an multi-dimensional array', function() {
    expect( chunk( [0, 1, 2, 3, 4, 5], 3 )).to.deep.equal( [[0, 1, 2], [3, 4, 5]] );
  });

  it( 'Should return an multi-dimensional array', function() {
    expect( chunk( [0, 1, 2, 3, 4, 5], 2 )).to.deep.equal( [[0, 1], [2, 3], [4, 5]] );
  });

  it( 'Should return an multi-dimensional array', function() {
    expect( chunk( [0, 1, 2, 3, 4, 5], 4 )).to.deep.equal( [[0, 1, 2, 3], [4, 5]] );
  });
});
