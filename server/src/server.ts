import express, { Express , Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ContactController } from './controllers/contactController';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3005;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controllers
const contactController = new ContactController();

// Routes
app.post('/api/contact', contactController.handleContact);

// Test route
app.get('/api/test', (req: Request, res: Response) => {
  res.json({ message: 'Server is running!' });
});

export default app;

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}