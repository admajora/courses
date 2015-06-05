var mongoose = require( 'mongoose' );
var Promise  = require( 'bluebird' );

var jobSchema = mongoose.Schema({
  title       : { type : String },
  description : { type : String }
});

var Job = mongoose.model( 'Job', jobSchema );

exports.seedJobs = function() {

  return new Promise( function( resolve, reject ) {

    Job
    .find( {} )
    .exec( function( error, collection ) {

      if ( collection.length === 0 ) {

        Job.create({
          title : 'Sales Person',
          description : 'you will fight dragons'
        });

        Job.create({
          title : 'Accoutant',
          description : 'you will use the keyboard'
        });

        Job.create({
          title : 'Programmer',
          description : 'you will be mindlessly typing for...'
        });

        Job.create({
          title : 'Axe Maker',
          description : 'We need many axes made... so many...'
        }, resolve );

      }

    });

  });

};