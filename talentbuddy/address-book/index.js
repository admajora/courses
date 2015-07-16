#!/usr/bin/env node

var Command = require( './command' );

var arg = Command.getOperation();

if ( Command[ arg ]) {
  Command[ arg ]( handleResult );
} else {
  console.log( 'Unknown command!' );
}

function handleResult( err ) {
  if ( err ) {
    console.log( 'Error' );
  } else {
    console.log( 'Ok! Command ran successfully!');
  }
}
