var express  = require( 'express' );
var jobModel = require( './models/Job' );
var config   = require( './config.json' );
var jobsData = require( './jobs-data' );

var app = express();

require( './jobs-service.js' )( jobsData, app );

app.set( 'views', __dirname );
app.set( 'view engine', 'jade' );

app.use( express.static( __dirname + '/public' ));

jobsData.connectDB( config.mongolab )
  .then( function() {

    console.log( 'connected to mongodb successfully' );

  });

app.listen( process.env.PORT || 3000 );