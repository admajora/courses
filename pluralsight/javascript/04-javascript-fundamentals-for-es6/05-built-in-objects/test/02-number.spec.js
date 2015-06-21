var expect = require( 'chai' ).expect;

describe( 'Numbers', function() {

  it.skip( 'should easily mistake numbers with leading zeroes', function() {
    //var octal = 071; // error in strict mode
    console.log(typeof parseInt(octal));
    expect( parseInt( octal )).to.equal( 57 );
  });

  it( 'should support octal literals', function() {
    var octal = 0o71;
    expect( octal ).to.equal( 57 );
  });

});
