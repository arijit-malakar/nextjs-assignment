const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requied: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

mongoose.models = {};
module.exports = mongoose.model("Users", UsersSchema);
