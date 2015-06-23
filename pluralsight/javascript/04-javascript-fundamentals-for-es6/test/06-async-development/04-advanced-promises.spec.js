var expect = require( 'chai' ).expect;
var api    = require( '../../lib/advanced-promises.js' );

describe( 'Advanced Promises', function() {

  it( 'should chain sequentially using then', function( done ) {
    api.getOrder( 3 )
      .then( function( order ) {
        return api.getUser( order.userId );
      })
      .then( function( user ) {
        return api.getCompany( user.companyId );
      })
      .then( function( company ) {
        expect( company.name ).to.equal( 'Pluralsight' );
        done();
      })
      .catch( function( error ) {
        // handle error
      });
  });

});
