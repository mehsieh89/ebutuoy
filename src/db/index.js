const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully!!!!');
});

var Schema = mongoose.Schema;

var EbutuoySchema = new Schema({
  name: {type: String, unique: true, dropDups: true},
});

var Ebutuoy = mongoose.model('Ebutuoy', EbutuoySchema);

module.exports = Ebutuoy;
