var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  hometown: {
    type: Schema.Types.ObjectId,
    ref: 'City'
  },
  image: String
});

module.exports = mongoose.model('User', UserSchema);
