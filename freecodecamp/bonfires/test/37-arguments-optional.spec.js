var expect = require( 'chai' ).expect;
var add    = require( '../37-arguments-optional' );

describe( '#add()', function() {

  it( 'Should return a curried function if one argument is passed', function() {
    expect( add( 2, 3 )).to.equal( 5 );
  });

  it( 'Should return a curried function if one argument is passed', function() {
    expect( add( 2 )( 3 )).to.equal( 5 );
  });

  it( 'Should return a curried function if one argument is passed', function() {
    expect( add( 'http://bit.ly/IqT6zt' )).to.be.undefined;
  });

  it( 'Should return a curried function if one argument is passed', function() {
    expect( add( add(2, '3') )).to.be.undefined;
  });

  it( 'Should return a curried function if one argument is passed', function() {
    expect( add( add(2)([3]) )).to.be.undefined;
  });

});
