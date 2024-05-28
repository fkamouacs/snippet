// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//const dotenv = require('dotenv');
dotenv.config();

await mongoose.connect(process.env.MONGO_URI || '').catch((e: unknown) => {
  console.log((e as Error).message);
});

export const db = mongoose.connection;
