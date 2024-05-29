"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const quoteRoutes = require('../routes/quoteRoutes');
const db = require('../models/index');
const adapter_mongodb_1 = require("@lucia-auth/adapter-mongodb");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use('/api/quotes', quoteRoutes);
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const adapter = new adapter_mongodb_1.MongodbAdapter(db.collection('sessions'), db.collection('users'));
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map