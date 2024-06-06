// models/User.ts
import mongoose, { Document, Model, Schema } from 'mongoose';
import { Lucia } from 'lucia';
import { MongodbAdapter } from '@lucia-auth/adapter-mongodb';

interface IUser extends Document {
  _id: String;
}

const UserSchema: Schema<IUser> = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
  } as const,
  { _id: false }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

const Session = mongoose.model(
  'Session',
  new mongoose.Schema(
    {
      _id: {
        type: String,
        required: true,
      },
      user_id: {
        type: String,
        required: true,
      },
      expires_at: {
        type: Date,
        required: true,
      },
    } as const,
    { _id: false }
  )
);

export const adapter = new MongodbAdapter(
  mongoose.connection.collection('sessions'),
  mongoose.connection.collection('users')
);
