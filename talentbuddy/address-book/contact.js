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

Contact.saveContact = function( contact, done ) {
  var that = this;
  that.loadContacts( function( err, data ) {
    if ( err ) {
      console.log( err );
    }
    var contacts = data;
    contacts.push( contact );
    that.saveContacts( contacts, done );
  });
};

Contact.findContacts = function( name, done ) {
  this.loadContacts( function( err, data ) {
    if ( err ) {
      return done( err );
    }
    var filteredData =  data.filter( function( item ) {
      if ( item.name === name ) {
        return true;
      }

      return false;
    });

    return done( null, filteredData );
  });
};

module.exports = Contact;
