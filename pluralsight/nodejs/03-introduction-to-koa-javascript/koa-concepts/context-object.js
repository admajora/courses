var app   = require( 'koa' )();
var parse = require( 'co-body' );

var port = process.env.PORT || 3000;

app
  .use( function *() {
  
    var bodyParser = yield parse( this );

    if ( this.method === 'POST' ) {
    
      this.body = 'You posted: ' + bodyParser.name;
    
    }

    if ( this.method === 'GET' ) {
    
      this.body = 'The path was: ' + this.path;
    
    }

    this.status = 200;
    this.body += '<br> <h3>Request handled!</h3>'
  
  });

app
  .listen( port );

console.log( 'Running on port', port );
