var expect = require( 'chai' ).expect;
var truncate = require( '../10-truncate-string' );

describe( '#truncate()', function() {

  it( 'Should return a truncated string...', function() {
    expect( truncate( 'A-tisket a-tasket A green and yellow basket', 11 )).to.equal( 'A-tisket...' );
  });

  it( 'Should return a truncated string...', function() {
    expect( truncate( 'A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length )).to.equal( 'A-tisket a-tasket A green and yellow basket' );
  });

  it( 'Should return a truncated string...', function() {
    expect( truncate( 'A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2 )).to.equal( 'A-tisket a-tasket A green and yellow basket' );
  });

  it( 'Should return a truncated string...', function() {
    expect( truncate.bind( truncate, 13, 3 )).to.throw( TypeError );
  });

});
