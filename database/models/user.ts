import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
  } as const,
  { _id: false }
);

export const User = mongoose.model('User', userSchema);
