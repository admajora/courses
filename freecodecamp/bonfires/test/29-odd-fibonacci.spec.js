var expect = require( 'chai' ).expect;
var sumFibs = require( '../29-odd-fibonacci' );

describe( '#sumFibs()', function() {

  it( 'Should return the sum of all odd fibonacci numbers', function() {
    expect( sumFibs( 1000 )).to.equal( 1785 );
  });

  it( 'Should return the sum of all odd fibonacci numbers', function() {
    expect( sumFibs( 4000000 )).to.equal( 4613732 );
  });

  it( 'Should return the sum of all odd fibonacci numbers', function() {
    expect( sumFibs( 4 )).to.equal( 5 );
  });

  it( 'Should return the sum of all odd fibonacci numbers', function() {
    expect( sumFibs( 75024 )).to.equal( 60696 );
  });

  it( 'Should return the sum of all odd fibonacci numbers', function() {
    expect( sumFibs( 75025 )).to.equal( 135721 );
  });

});
