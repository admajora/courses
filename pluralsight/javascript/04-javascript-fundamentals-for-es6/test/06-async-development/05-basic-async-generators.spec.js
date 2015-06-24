var expect = require( 'chai' ).expect;
var oldPause = require( './../../lib/advanced-promises' ).oldPause;

describe( 'Asynchronous Generators', function() {

  it( 'should be difficult to read with regular async', function() {
    console.log( 'start' );
    oldPause( 500, function() {
      console.log( 'middle' );
      oldPause( 500, function() {
        console.log( 'end' );
      });
    });
  });

});
