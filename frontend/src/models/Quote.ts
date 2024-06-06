// models/Quote.ts
import mongoose, { Document, Model, Schema } from 'mongoose';

interface IQuote extends Document {
  text: string;
  author: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const QuoteSchema: Schema<IQuote> = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  tags: [{ type: String, default: [] }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Quote: Model<IQuote> =
  mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);

export default Quote;
export type { IQuote };
