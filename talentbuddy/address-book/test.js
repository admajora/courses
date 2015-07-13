var Contact = require( './contact' );

var name = Contact.parseName( 'John Smith, 604-123-9090' );
var number = Contact.parseNumber( 'John Smith, 604-123-9090' );
var contact = Contact.createContact( 'John Smith, 604-123-9090' );
var contacts = [{ name: "John Smith", number: "604-123-9090" }];

console.log( name );
console.log( number );
console.log( contact );

Contact.loadContacts( function( err, data ) {
  console.log( data );
});

Contact.saveContacts( contacts, function( err ) {
  console.log( 'success' );
});
