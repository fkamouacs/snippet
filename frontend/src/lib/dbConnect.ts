// lib/dbConnect.js
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    if (MONGO_URI) {
      cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => {
        return mongoose;
      });
    }
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
