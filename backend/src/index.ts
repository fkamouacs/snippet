// import dotenv from 'dotenv';
import express from 'express';
// import type { Request, Response } from 'express';
import dotenv from 'dotenv';
// const express = require('express');
import type { Request, Response } from 'express';
import cors from 'cors';
// const cors = require('cors');
export const app = express();

import { db } from '../models/index.ts';
//const db = require('../models/index.ts');
//const dotenv = require('dotenv');
//const lucia = require('lucia');
import { Lucia } from 'lucia';
import { MongodbAdapter } from '@lucia-auth/adapter-mongodb';
// const MongodbAdapter = require('@lucia-auth/adapter-mongodb');

import { router as userRoutes } from '../routes/userRoutes.ts';

// const userRoutes = require('../routes/userRoutes');
import { router as quoteRoutes } from '../routes/quoteRoutes.ts';
// const quoteRoutes = require('../routes/quoteRoutes');

dotenv.config();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/quotes', quoteRoutes);

const adapter = new MongodbAdapter(
  db.collection('sessions'),
  db.collection('users')
);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req: Request, res: Response) => res.send('Express on Vercel'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
