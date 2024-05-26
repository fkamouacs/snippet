const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Quote', quoteSchema);
