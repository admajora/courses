var Contact = {};

Contact.parseName = function( str ) {
  var name = str.split( ',' )[ 0 ].trim();

  return name;
};

module.exports = Contact;
