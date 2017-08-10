var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Wayfarer");

module.exports.Post = require("./post.js");
