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

  it( 'should support binary literals', function() {
    var bin = 0b1101;
    expect( bin ).to.equal( 13 );
  });

  it.skip( 'should parse octal values with Number function', function() {
    var octNum = Number( '0o71' );
    expect( octNum ).to.equal( 57 );
  });

  it.skip( 'should parse binary values with Number function', function() {
    var binNum = Number( '0b101' );
    expect( binNum ).to.equal( 5 );
  });

});
