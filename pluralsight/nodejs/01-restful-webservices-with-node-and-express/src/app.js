var express = require( 'express' );
var mongoose = require( 'mongoose' );
var bodyParser = require( 'body-parser' );

var db = mongoose.connect( 'mongodb://localhost/booksAPI' );

var Book = require( './models/bookModels' );

app  = express();
var port = process.env.PORT || 3000;

app.use( bodyParser.urlencoded({ extended : true }));
app.use( bodyParser.json());

var bookRouter = express.Router();

bookRouter.route( '/books' )
  .post( function( req, res ) {
  
    var book = new Book( req.body );

    // console.log( book );
    res.send( book );
  
  })
  .get( function( req, res ) {

    var query = {};
    if ( req.query.genre ) {
      query.genre = req.query.genre;
    }
    
    Book.find( query, function( err, books ) {
      if ( err ) {
        res.status( 500 ).send( err )
      } else {
        res.json( books );
      }
    });
      
  });

bookRouter.route( '/books/:bookId' )
  .get( function( req, res ) {
  
    Book.findById( req.params.bookId, function( err, book ) {
    
      if ( err ) {
        res.status( 500 ).send( err );
      } else {
        res.json( book );
      }

    });

  });

app.use( '/api', bookRouter );

app.get( '/', function( req, res ) {

  res.send( 'welcome to my API' );

});

app.listen( port, function() {

  console.log( 'Running at port:', port );

});