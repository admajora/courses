var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var standupSchema = new Schema({
  memberName : String,
  project : String,
  workYesterday : String,
  workToday : String,
  impediment : String,
  createdOn : { type : Data, default : Date.now }
});
