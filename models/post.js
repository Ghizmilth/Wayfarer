'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  text: String,
  userId: String,
  cityId: Number
});

module.exports = mongoose.model('Post', PostSchema);
