var expect = require( 'chai' ).expect;
var slasher = require( '../12-slasher-flick' );

describe( '#slasher()', function() {

  it( 'Shoudl throw an error if a non array is passed', function() {
    expect( slasher.bind( slasher, 13, 2 )).to.throw( TypeError );
  });
  
  it( 'Should slash an array and return a new one', function() {
    expect( slasher([ 1, 2, 3 ], 2 )).to.deep.equal([ 3 ]);
  });

  it( 'Should slash an array and return a new one', function() {
    expect( slasher([ 1, 2, 3 ], 0 )).to.deep.equal([ 1, 2, 3 ]);
  });

  it( 'Should slash an array and return a new one', function() {
    expect( slasher([ 1, 2, 3 ], 9 )).to.deep.equal( [] );
  });

});
