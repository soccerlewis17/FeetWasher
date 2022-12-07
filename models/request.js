const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// embed the comments onto a request since the comments will always belong to one request
const commentsSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    avatar: String,
    userName: {type: String, required: true},
    content: {type: String, required: true},
  },
  {
    timestamps: true,
  }
);

const requestsSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  avatar: String,
  userName: {type: String, required: true}, 
  requestType: {type: String, required: true},
  date: Date,
  hoursEstimate: String,
  content: {type: String, required: true},
  comments: [commentsSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Request', requestsSchema);