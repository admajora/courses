var Contact = require( './contact' );
var Command = {};

Command.getOperation = function() {
  return process.argv[ 2 ];
};

Command.getOperationData = function() {
  return process.argv[ 3 ];
};

Command.add = function( done ) {
  var data = Command.getOperationData();
  var contact = Contact.createContact( data );

  Contact.saveContact( contact, done );
};

Command.find = function( done ) {
  var data = Command.getOperationData();
  var name = Contact.parseName( data );
  
  Contact.findContacts( name, function( err, filteredData ) {
    if ( err ) {
      return done( err );
    }
    filteredData
      .forEach( function( item ) {
        console.log( item.name, item.number );
      });
    done( err, filteredData );
  });
};

module.exports = Command;
