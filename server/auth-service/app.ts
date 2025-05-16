import express from 'express';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes); // ✅ now using Router, not controller directly

export default app;
