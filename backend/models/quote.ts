import mongoose from 'mongoose';
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

export const Quote = mongoose.model('Quote', quoteSchema);
