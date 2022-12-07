const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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


  module.exports = mongoose.model('Comments', commentsSchema);