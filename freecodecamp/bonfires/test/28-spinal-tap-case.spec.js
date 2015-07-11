var expect = require( 'chai' ).expect;
var spinalCase = require( '../28-spinal-tap-case' );

describe( '#spinalCase', function() {

  it( 'Should put all string in lowerCase and replace spaces by dashes', function() {
    expect( spinalCase( 'This Is Spinal Tap' )).to.equal( 'this-is-spinal-tap' );
  });

  it( 'Should put all string in lowerCase and replace spaces by dashes', function() {
    expect( spinalCase( 'thisIsSpinalTap' )).to.equal( 'this-is-spinal-tap' );
  });

  it( 'Should put all string in lowerCase and replace spaces by dashes', function() {
    expect( spinalCase( 'The_Andy_Griffith_Show' )).to.equal( 'the-andy-griffith-show' );
  });

  it( 'Should put all string in lowerCase and replace spaces by dashes', function() {
    expect( spinalCase( 'Teletubbies say Eh-oh' )).to.equal( 'teletubbies-say-eh-oh' );
  });

});
