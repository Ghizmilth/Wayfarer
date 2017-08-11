var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  text: String,
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _city: {
    type: Schema.Types.ObjectId,
    ref: 'City'
  }
});

module.exports = mongoose.model('Post', PostSchema);
