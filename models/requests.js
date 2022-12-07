const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestsSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  avatar: String,
  userName: {type: String, required: true}, 
  requestType: {type: String, required: true},
  date: Date,
  hoursEstimate: Number,
  content: {type: String, required: true},
}, {
  timestamps: true
});

module.exports = mongoose.model('Requests', requestsSchema);