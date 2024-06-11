import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quote' }],
  savedBy: [{ type: mongoose.Schema.Types.ObjectId }],
  ref: 'User',
  createdAt: { type: Date, default: Date.now },
});

const Collection = mongoose.model('Collection', collectionSchema);
export default Collection;
