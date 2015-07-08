var expect = require( 'chai' ).expect;
var destroyer = require( '../16-seek-and-destroy' );

describe( '#destroyer()', function() {

  it( 'Should return an array with "undestroyed" values', function() {
    expect( destroyer([ 1, 2, 3, 1, 2, 3 ], 2, 3 )).to.deep.equal([ 1, 1 ]);
  });

  it( 'Should return an array with "undestroyed" values', function() {
    expect( destroyer([ 1, 2, 3, 5, 1, 2, 3 ], 2, 3 )).to.deep.equal([ 1, 5, 1 ]);
  });

});
