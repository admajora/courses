var expect = require( 'chai' ).expect;
var sumPrimes = require( '../30-sum-primes' );

describe( '#sumPrimes', function() {

  it( 'Should sum all prime numbers', function() {
    expect( sumPrimes( 10 )).to.equal( 17 );
  });

  it( 'Should sum all prime numbers', function() {
    expect( sumPrimes( 977 )).to.equal( 73156 );
  });

});
