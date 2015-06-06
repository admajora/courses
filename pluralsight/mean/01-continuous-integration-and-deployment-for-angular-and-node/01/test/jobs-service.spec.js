var express = require( 'express' );
var app     = express();
var expect  = require( 'chai' ).expect;
var request = require( 'supertest' );

describe( 'save jobs', function() {

  it( "should validate that title is greater than 4 characters" );
  it( "should validate that title is less than 40 characters" );
  it( "should validate that description is greater than 4 characters" );
  it( "should validate that description is less than 250 characters" );

  var dataSavedJob;
  var newJob = {
    title : 'Programmer',
    description : 'you will be mindlessly typing for...'
  };

  it( "should pass the job to the database save", function( done ) {

    request( app )
      .post( '/api/jobs' )
      .send( newJob )
      .end( function( err, res ) {

        expect( dataSaved ).to.deep.equal( new Job );

      });

  });
  it( "should return a status of 200 to the front end if the database saved" );
  it( "should return a job with an id" );
  it( "should return an error if the database failed" );

});