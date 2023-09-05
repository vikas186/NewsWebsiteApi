const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  title: {
    type: String,
    default: null,
  },
  isStatus: {
    type: Boolean,
    default: null,
  },
  content: {
    type: String,
    default: null,
  },
  categoryID: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag',
  }],
  like: {
    type: Number,
    default: 0,
  },
  share: {
    type: Number,
    default: 0,
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'userLoginSignup ',
  },
  image: {
    type: String,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const news = mongoose.model('News', schema);
module.exports = news;