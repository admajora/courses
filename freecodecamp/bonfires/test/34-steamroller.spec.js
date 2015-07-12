var expect = require( 'chai' ).expect;
var steamroller = require( '../34-steamroller' );

describe( '#steamroller()', function() {

  it( 'Should return a flattened array', function() {
    expect( steamroller([[['a']], [['b']]])).to.deep.equal(['a', 'b']);
  });

  it( 'Should return a flattened array', function() {
    expect( steamroller([1, [2], [3, [[4]]]])).to.deep.equal([1, 2, 3, 4]);
  });

  it( 'Should return a flattened array', function() {
    expect( steamroller([1, [], [3, [[4]]]])).to.deep.equal([1, 3, 4]);
  });

});
