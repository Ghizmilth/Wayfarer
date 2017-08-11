'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: String,
  imageURL: String,
});

module.exports = mongoose.model('City', CitySchema);
