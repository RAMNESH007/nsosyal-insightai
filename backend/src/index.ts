import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes (placeholders)
// import authRoutes from './routes/auth';
// import feedRoutes from './routes/feed';
// import creatorRoutes from './routes/creator';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/feed', feedRoutes);
// app.use('/api/creator', creatorRoutes);

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'nsosyal-insightai-api' });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
