var expect        = require( 'chai' ).expect;
var reverseString = require( '../02-reverse-string' );

describe( 'Reverse a String', function() {

  it( 'Should return a string', function() {
    expect( reverseString( 'any input' )).to.be.a( 'string' );
  });

  it( 'Should throw an error when passed a non string value', function() {
    expect( reverseString.bind( reverseString, {} )).to.throw( 'A string is expected' );
  });

  it( 'Should revert "hello"', function() {
    expect( reverseString( 'hello' )).to.equal( 'olleh' );
  });

  it( 'Should revert "Howdy"', function() {
    expect( reverseString( 'Howdy' )).to.equal( 'ydwoH' );
  });

  it( 'Should revert "Greetings from Earth"', function() {
    expect( reverseString( 'Greetings from Earth')).to.equal( 'htraE morf sgniteerG' );
  });

});
