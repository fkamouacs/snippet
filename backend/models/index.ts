// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI || '').catch((e: unknown) => {
  console.log((e as Error).message);
});

const db = mongoose.connection;
module.exports = db;
