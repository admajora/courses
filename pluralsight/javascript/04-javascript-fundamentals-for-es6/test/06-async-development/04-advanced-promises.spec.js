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

  it( 'should execute after all promises with all', function( done ) {
    var courseIds = [ 1, 2, 3 ];
    var promises  = [];

    for ( let i = 0; i < courseIds.length; i+= 1 ) {
      promises.push( api.getCourse( courseIds[ i ]));
    }

    Promise
      .all( promises )
      .then( function( values ) {
        expect( values.length ).to.equal( 3 );
        done();
      });
  });

  it( 'should resolve after the first promise', function( done ) {
    var courseIds = [ 1, 2, 3 ];
    var promises  = [];

    for ( let i = 0; i < courseIds.length; i+= 1 ) {
      promises.push( api.getCourse( courseIds[ i ]));
    }

    Promise
      .race( promises )
      .then( function( firstValue ) {
        expect( firstValue.name ).to.be.ok;
        done();
      });
  });


});
