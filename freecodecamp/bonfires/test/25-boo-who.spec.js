var expect = require( 'chai' ).expect;
var boo = require( '../25-boo-who' );

describe( '#boo Boo Who', function() {

  it( 'Should return true if a value passed is a boolean primitive', function() {
    expect( boo( true )).to.be.true;
  });

  it( 'Should return true if a value passed is a boolean primitive', function() {
    expect( boo( false )).to.be.true;
  });

  it( 'Should return true if a value passed is a boolean primitive', function() {
    expect( boo([ 1, 2, 3 ])).to.be.false;
  });

  it( 'Should return true if a value passed is a boolean primitive', function() {
    expect( boo( [].slice )).to.be.false;
  });

  it( 'Should return true if a value passed is a boolean primitive', function() {
    expect( boo({ a : 1 })).to.be.false;
  });

  it( 'Should return true if a value passed is a boolean primitive', function() {
    expect( boo( 1 )).to.be.false;
  });

  it( 'Should return true if a value passed is a boolean primitive', function() {
    expect( boo( NaN )).to.be.false;
  });

  it( 'Should return true if a value passed is a boolean primitive', function() {
    expect( boo( 'a' )).to.be.false;
  });

});
