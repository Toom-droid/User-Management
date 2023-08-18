const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  email: String,
  phone: String,
  userId: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
