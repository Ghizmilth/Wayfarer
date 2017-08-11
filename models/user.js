var mongoose = require("mongoose");
var Schema = mongoose.Schema;
passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new Schema({
  username: String,
  password: String,
  hometown: {
    type: Schema.Types.ObjectId,
    ref: "City"
  },
  image: String
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", UserSchema);
module.exports = User;
