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
  var jsonfile = require( 'jsonfile' );
  var file     = 'data.json';
  jsonfile.readFile( file, done );
};

module.exports = Contact;
