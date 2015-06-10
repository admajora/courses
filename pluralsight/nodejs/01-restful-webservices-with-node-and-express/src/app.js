var express = require( 'express' );
var mongoose = require( 'mongoose' );
var bodyParser = require( 'body-parser' );

var db;

if ( process.env.ENV === 'Test' ) {
  
  var db = mongoose.connect( 'mongodb://localhost/booksAPI_test' );

} else {

  var db = mongoose.connect( 'mongodb://localhost/booksAPI' );

}

var Book = require( './models/bookModels' );

app  = express();
var port = process.env.PORT || 3000;

app.use( bodyParser.urlencoded({ extended : true }));
app.use( bodyParser.json());

bookRouter = require( './Routes/bookRoutes' )( Book );

app.use( '/api/books', bookRouter );

app.get( '/', function( req, res ) {

  res.send( 'welcome to my API' );

});

app.listen( port, function() {

  console.log( 'Running at port:', port );

});

module.exports = app;
