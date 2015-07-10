var expect = require( 'chai' ).expect;
var pair   = require( '../23-dna-pairing' );

describe( '#pair DNA Pairing', function() {

  it( 'Should return the pair of the given dna', function() {
    expect( 'ATCGA' ).to.deep.equal([['A','T'],['T','A'],['C','G'],['G','C'],['A','T']]);
  });

  it( 'Should return the pair of the given dna', function() {
    expect( 'TTGAG' ).to.deep.equal([['T','A'],['T','A'],['G','C'],['A','T'],['G','C']]);
  });

  it( 'Should return the pair of the given dna', function() {
    expect( 'CTCTA' ).to.deep.equal([['C','G'],['T','A'],['C','G'],['T','A'],['A','T']]);
  });

});
