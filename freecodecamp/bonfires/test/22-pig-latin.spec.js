var expect = require( 'chai' ).expect;
var translate = require( '../22-pig-latin' );

describe( '#translate pig latin', function() {

  it( 'Should translate the word to pig latin', function() {
    expect( translate( 'california' )).to.equal( 'aliforniacay' );
  });

  it( 'Should translate the word to pig latin', function() {
    expect( translate( 'paragraphs' )).to.equal( 'aragraphspay' );
  });

  it( 'Should translate the word to pig latin', function() {
    expect( translate( 'glove' )).to.equal( 'oveglay' );
  });

  it( 'Should translate the word to pig latin', function() {
    expect( translate( 'algorithm' )).to.equal( 'algorithmway' );
  });

  it( 'Should translate the word to pig latin', function() {
    expect( translate( 'eight' )).to.equal( 'eightway' );
  });

});
