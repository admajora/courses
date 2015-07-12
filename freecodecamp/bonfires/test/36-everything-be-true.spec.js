var expect = require( 'chai' ).expect;
var every  = require( '../36-everything-be-true' );

describe( '#very()', function() {

  it( 'Should return true if the predicade is found in the collection', function() {
    expect( every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex')).to.be.true;
  });

  it( 'Should return true if the predicade is found in the collection', function() {
    expect( every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], {'sex': 'female'})).to.be.false;
  });

});
