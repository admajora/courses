var expect = require( 'chai' ).expect;
var fearNotLetter = require( '../24-missing-letters' );

describe( '#missing letters', function() {

  it( 'Should return the missing letter from a range', function() {
    expect( fearNotLetter( 'abce' )).to.equal( 'd' );
  });

  it( 'Should return the missing letter from a range', function() {
    expect( fearNotLetter( 'bcd' )).to.be.undefined;
  });

  it( 'Should return the missing letter from a range', function() {
    expect( fearNotLetter( 'abcdefghjklmno' )).to.equal( 'i' );
  });

  it( 'Should return the missing letter from a range', function() {
    expect( fearNotLetter( 'yz' )).to.be.undefined;
  });

});
