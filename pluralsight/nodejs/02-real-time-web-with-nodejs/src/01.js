//#!/usr/bin/env node
function printHelp() {
  console.log( "01.js (c) Eric Douglas" );
  console.log( "" );
  console.log( "usage:" );
  console.log( "--help          print this help" );
  console.log( "--name          say hello to {NAME}" );
  console.log( "" );
}

var args = require( 'minimist' )( process.argv.slice( 2 ), { string : "name" });

if ( args.help || !args.name ) {
  printHelp();
  process.exit( 1 );
}

var name = args.name;

console.log( "Hello", name );
// chmod 700 01.js
// ./01.js --name World
// Hello World
