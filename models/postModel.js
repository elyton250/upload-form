const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  datePosted: {
    type: Date,
    default: Date.now,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: false
  },

  eventDate: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Post', PostSchema);
