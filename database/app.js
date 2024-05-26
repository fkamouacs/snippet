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

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/quotes', quoteRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
