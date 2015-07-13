var jsonfile = require( 'jsonfile' );
var file     = 'data.json';

var Contact = {};

Contact.parseName = function( str ) {
  var name = str.split( ',' )[ 0 ].trim();

  return name;
};

Contact.parseNumber = function( str ) {
  var number = str.split( ',' )[ 1 ].trim();
  
  return number;
};

Contact.createContact = function( str ) {
  return {
    name   : this.parseName( str ),
    number : this.parseNumber( str )
  };
};

Contact.loadContacts = function( done ) {
  jsonfile.readFile( file, done );
};

Contact.saveContacts = function( contacts, done ) {
  jsonfile.writeFile( file, contacts, done );
};

module.exports = Contact;
