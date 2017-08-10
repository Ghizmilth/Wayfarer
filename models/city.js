var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitySchema = new Schema({
  name: String,
  image: String,
  description: String
});

module.exports = mongoose.model('City', CitySchema);
