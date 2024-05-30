import express from 'express';
const cors = require('cors');

const quoteRoutes = require('../routes/quoteRoutes');
const db = require('../models/index');

const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
  origin: '*',
  credentials: true,
  'Access-Control-Allow-Origin': '*',
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
