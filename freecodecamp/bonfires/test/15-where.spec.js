var expect = require( 'chai' ).expect;
var where  = require( '../15-where' );

describe( '#where()', function() {

  it( 'Should return an array with objects that has equivalent properties', function() {
    expect( where([
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' }
    ], { last: 'Capulet' })).to.deep.equal([{ first: 'Tybalt', last: 'Capulet' }]);
  });

  it( 'Should return an array with objects that has equivalent properties', function() {
    expect( where([
      { 'a': 1 },
      { 'a': 1 },
      { 'a': 1, 'b': 2 }
    ], { 'a': 1 })).to.deep.equal([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }]);
  });

});
