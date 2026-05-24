import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import geminiRoutes from './routes/gemini.routes.js';

const app = express();
const port = env.port;

app.use(cors());
app.use(express.json());

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Gemini Routes
app.use('/api/ai', geminiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
