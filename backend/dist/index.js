"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
// import { router as userRoutes } from '../routes/userRoutes.ts';
// import { router as quoteRoutes } from '../routes/quoteRoutes.ts';
dotenv_1.default.config();
const PORT = process.env.PORT || 3001;
const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use(express_1.default.json());
// app.use('/api/users', userRoutes);
// app.use('/api/quotes', quoteRoutes);
// const adapter = new MongodbAdapter(
//   db.collection('sessions'),
//   db.collection('users')
// );
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
exports.app.get('/', (req, res) => res.send('Express on Vercel'));
exports.app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=index.js.map