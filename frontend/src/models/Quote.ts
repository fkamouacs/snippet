// models/Quote.ts
import mongoose, { Document, Model, Schema } from 'mongoose';

interface IQuote extends Document {
  text: string;
  author: string;
  tags: string[];
  creator: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const QuoteSchema: Schema<IQuote> = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  tags: [{ type: String, default: [] }],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Quote: Model<IQuote> =
  mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);

export default Quote;
export type { IQuote };
