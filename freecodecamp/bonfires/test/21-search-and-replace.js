var expect = require( 'chai' ).expect;
var replace = require( '../21-search-and-replace' );

describe( '#replace search and replace words', function() {

  it( 'Should replace the given word by another one', function() {
    expect( replace( "Let us go to the store", "store", "mall" )).to.equal( "Let us go to the mall" );
  });

  it( 'Should replace the given word by another one', function() {
    expect( replace( "He is Sleeping on the couch", "Sleeping", "sitting" )).to.equal( "He is Sitting on the couch" );
  });

  it( 'Should replace the given word by another one', function() {
    expect( replace( "This has a spellngi error", "spellngi", "spelling"  )).to.equal( "This has a spelling error" );
  });

  it( 'Should replace the given word by another one', function() {
    expect( replace( "His name is Tom", "Tom", "john" )).to.equal( "His name is John" );
  });

  it( 'Should replace the given word by another one', function() {
    expect( replace( "Let us get back to more Coding", "Coding", "bonfires" )).to.equal( "Let us get back to more Bonfires" );
  });
});
