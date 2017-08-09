'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  text: String,
  userId: String
});

const CitySchema = new Schema({
  name: String,
  imgUrl: String,
  posts: [PostSchema]
});

module.exports = mongoose.model('City', CitySchema);
module.exports = mongoose.model('Post', PostSchema);
