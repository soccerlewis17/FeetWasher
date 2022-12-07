const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your User Model
const userSchema = new Schema({
	name: String,
    avatar: String,
    email: String,
	googleId: {
	  type: String,
	  required: true
	},
  }, {
	timestamps: true
  });

module.exports = mongoose.model('User', userSchema);