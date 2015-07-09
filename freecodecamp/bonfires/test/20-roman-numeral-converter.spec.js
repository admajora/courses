var expect = require( 'chai' ).expect;
var convert = require( '../20-roman-numeral-converter' );

describe( '#convert() roman numeral converter', function() {

  it( 'Should convert decimal number to roman numeral', function() {
    expect( convert( 12 )).to.equal( 'XII' );
  });

  it( 'Should convert decimal number to roman numeral', function() {
    expect( convert( 5 )).to.equal( 'V' );
  });

  it( 'Should convert decimal number to roman numeral', function() {
    expect( convert( 9 )).to.equal( 'IX' );
  });

  it( 'Should convert decimal number to roman numeral', function() {
    expect( convert( 29 )).to.equal( 'XXIX' );
  });

  it( 'Should convert decimal number to roman numeral', function() {
    expect( convert( 16 )).to.equal( 'XVI' );
  });

});
