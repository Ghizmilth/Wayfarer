var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  text: String,
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'City'
  },
  _city: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Post', PostSchema);
