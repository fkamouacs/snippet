// models/Tag.ts
import mongoose, { Document, Model, Schema } from 'mongoose';

interface ITag extends Document {
  name: string;
}

const TagSchema: Schema<ITag> = new mongoose.Schema({
  name: { type: String, required: true },
});

const Tag: Model<ITag> =
  mongoose.models.Tag || mongoose.model<ITag>('Tag', TagSchema);

export default Tag;
export type { ITag };
