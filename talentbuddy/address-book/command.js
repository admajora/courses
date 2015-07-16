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

module.exports = Command;
