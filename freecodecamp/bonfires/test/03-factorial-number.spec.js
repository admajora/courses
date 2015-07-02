var expect       = require( 'chai' ).expect;
var factorialize = require( '../03-factorial-number' );

describe( 'Factorialize a number', function() {

  it( 'Should always return a number', function() {
    expect( factorialize( '13' )).to.be.a( 'number' );
  });

  it( 'Should return the factorial of 5', function() {
    expect( factorialize( 5 )).to.equal( 120 );
  });

  it( 'Should return the factorial of 10', function() {
    expect( factorialize( 10 )).to.equal( 3628800 );
  });

  it( 'Should return the factorial of 20', function() {
    expect( factorialize( 20 )).to.equal( 2432902008176640000 );
  });

});
