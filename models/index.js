var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Wayfarer');

module.exports.City = require('./city.js');
module.exports.Post = require('./post.js');
module.exports.User = require('./user.js');
