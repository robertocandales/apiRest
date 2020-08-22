const { Schema, model } = require('mongoose');

//Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  register_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('User', UserSchema);
