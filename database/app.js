require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");
const userRoutes = require("./routes/userRoutes");
const quoteRoutes = require("./routes/quoteRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/quotes", quoteRoutes);

const PORT = process.env.PORT || 3001;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
