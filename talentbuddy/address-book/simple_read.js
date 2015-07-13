var fs = require( 'fs' );

var options = {
  encoding : 'utf8'
};

fs.readFile( 'data.json', options, printData );

function printData( err, data ) {
  console.log( data );
}
