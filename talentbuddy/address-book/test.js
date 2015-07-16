var Contact = require( './contact' );
var Command = require( './command' );

var name = Contact.parseName( 'John Smith, 604-123-9090' );
var number = Contact.parseNumber( 'John Smith, 604-123-9090' );
var contact = Contact.createContact( 'John Smith, 604-123-9090' );
var contacts = [{ name: "John Smith", number: "604-123-9090" }];
var oneContact = { name: "John Smith 2", number: "605-133-3131" };

/*
console.log( name );
console.log( number );
console.log( contact );

Contact.loadContacts( function( err, data ) {
  console.log( data );
});

Contact.saveContacts( contacts, function( err ) {
  console.log( 'success' );
});

Contact.saveContact( oneContact, function( err ) {
  console.log( 'success' );
});

Contact.findContacts( 'John Smith', function( err, data ) {
  console.log( data );
});

console.log( Command.getOperation() );
console.log( Command.getOperationData() );

Command.add( function( err ) {
  console.log( 'Contact added!' );
});
*/

Command.find( function( err, results ) {
  console.log( 'Find complete!' );
});
