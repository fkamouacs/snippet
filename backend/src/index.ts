import express from 'express';
import cors from 'cors';

const quoteRoutes = require('../routes/quoteRoutes');
const db = require('../models/index');

const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/quotes', quoteRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (_req, res) => {
  return res.send('Express Typescript on Vercel');
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
