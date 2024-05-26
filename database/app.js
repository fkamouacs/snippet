require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models/index');
const dotenv = require('dotenv');

const userRoutes = require('./routes/userRoutes');
const quoteRoutes = require('./routes/quoteRoutes');

dotenv.config();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/quotes', quoteRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => res.send('Express on Vercel'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// export the app for vercel serverless functions
module.exports = app;
