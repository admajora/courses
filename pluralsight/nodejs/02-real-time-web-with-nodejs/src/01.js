#!/usr/bin/env node

var args = require( 'minimist' )( process.argv.slice( 2 ), { string : "name" });

var name = args.name;

console.log( "Hello", name );
// chmod 700 01.js
// ./01.js --name World
// Hello World
