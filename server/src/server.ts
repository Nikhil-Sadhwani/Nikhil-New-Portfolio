import express, { Express , Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ContactController } from './controllers/contactController';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3005;

const allowedOrigins = [
  'http://localhost:3000',
  'https://nikhil-new-portfolio.vercel.app',
  'https://www.nikhil-new-portfolio.vercel.app',
  /https:\/\/nikhil-new-portfolio-[a-z0-9-]+\.vercel\.app$/
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    const isAllowed = allowedOrigins.some(allowedOrigin => 
      typeof allowedOrigin === 'string' 
        ? origin === allowedOrigin 
        : allowedOrigin.test(origin)
    );

    if (isAllowed) {
      callback(null, true);
    } else {
      console.warn(`Origin ${origin} not allowed by CORS`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
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