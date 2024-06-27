import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: undefined },
  owner: { type: String, required: true },
  quotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quote', default: [] }],
  savedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] }],
  tags: [{ type: String, default: [] }],
  isPublic: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Collection =
  mongoose.models.Collection || mongoose.model('Collection', collectionSchema);

export default Collection;
