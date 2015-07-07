var expect = require( 'chai' );
var bouncer = require( '../14-falsey-bouncer' );

describe( '#bouncer()', function() {

  it( 'Should remove all falsy values from the array', function() {
    expect( bouncer([ 7, 'ate', '', false, 9 ])).to.deep.equal([ 7, 'ate', 9 ]);
  });

  it( 'Should remove all falsy values from the array', function() {
    expect( bouncer([ 'a', 'b', 'c' ])).to.deep.equal([ 'a', 'b', 'c' ]);
  });

  it( 'Should remove all falsy values from the array', function() {
    expect( bouncer([ false, null, 0 ])).to.deep.equal( [] );
  });

});
