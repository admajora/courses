var expect = require( 'chai' ).expect;
var mutation = require( '../13-mutation' );

describe( '#mutation()', function() {

  it( 'Should return the result of a comparions of two string', function() {
    expect( mutation([ 'hello', 'hey' ])).to.be.false;
  });

  it( 'Should return the result of a comparions of two string', function() {
    expect( mutation([ 'hello', 'Hello' ])).to.be.true;
  });

  it( 'Should return the result of a comparions of two string', function() {
    expect( mutation([ 'zyxwvutsrqponmlkjihgfedcba', 'qrstu' ])).to.be.true;
  });

  it( 'Should return the result of a comparions of two string', function() {
    expect( mutation([ 'Mary', 'Army' ])).to.be.true;
  });

  it( 'Should return the result of a comparions of two string', function() {
    expect( mutation([ 'Mary', 'Aarmy' ])).to.be.true;
  });

  it( 'Should return the result of a comparions of two string', function() {
    expect( mutation([ 'Alien', 'line' ])).to.be.true;
  });

  it( 'Should return the result of a comparions of two string', function() {
    expect( mutation([ 'floor', 'for' ])).to.be.true;
  });

});
