var expect = require( 'chai' ).expect;
var palindrome = require( '../04-palindrome.js' );

describe( 'Check for palindromes', function() {

  it( 'Should return a boolean', function() {
    expect( palindrome( "freecodecamp" )).to.be.a( 'boolean' );
  });

  it( 'Should return true for "eye"', function() {
    expect( palindrome( "eye" )).to.be.true;
  });

  it( 'Should return true for "race car"', function() {
    expect( palindrome( "race car" )).to.be.true;
  });

  it( 'Should return false for "not a palindrome"', function() {
    expect( palindrome( "not a palindrome" )).to.be.false;
  });

  it( 'Should return true for "A man, a plan, a canal. Panama"', function() {
    expect( palindrome( "A man, a plan, a canal. Panama" )).to.be.true;
  });

  it( 'Should return true for "never odd or even"', function() {
    expect( palindrome( "never odd or even" )).to.be.true;
  });

  it( 'Should return false for "nope"', function() {
    expect( palindrome( "nope" )).to.be.false;
  
  });
});
