var expect = require( 'chai' ).expect;
var end    = require( '../08-confirm-end' );

describe( '#end()', function() {

  it( 'Should return true if target is equal the end of the string', function() {
    expect( end( "Bastian", "n" )).to.be.true;
  });

  it( 'Should return false if target is different the end of the string', function() {
    expect( end( "Connor", "n" )).to.be.false;
  });

  it( 'Should return false if target is different the end of the string', function() {
    expect( end( "Walking on water and developing software from a specification are easy if both are frozen.", "specification" )).to.be.false;
  });

  it( 'Should return true if target is equal the end of the string', function() {
    expect( end( "He has to give me a new name", "name" )).to.be.true;
  });

  it( 'Should return false if target is different the end of the string', function() {
    expect( end( "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain" )).to.be.false;
  });

  it( 'Should throw an error if one of the arguments are a non string value', function() {
    expect( end.bind( end, 13, 'some value' )).to.throw( TypeError );
  });

});
