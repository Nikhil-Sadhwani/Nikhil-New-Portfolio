import express, { Express , Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ContactController } from './controllers/contactController';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3005;

// Middleware
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || "http://localhost:3000",
    'https://nikhil-new-portfolio.vercel.app',
    'https://www.nikhil-new-portfolio.vercel.app'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controllers
const contactController = new ContactController();

// Routes
app.post('/api/contact', contactController.handleContact);

// Test route
app.get('/api/test', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is running!' });
});


if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}
  
export default app;