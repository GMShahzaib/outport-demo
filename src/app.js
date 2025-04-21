import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import outport from './config/outportConfig.js';

const app = express();

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional route: explicitly send index.html for "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API routes
app.get('/test', (req, res) => {
  res.status(200).send({ message: 'success', status: 200 });
});

app.use('/login', authRoutes);
app.use('/users', userRoutes);

// Outport documentation route
app.use('/docs', outport.serve());

export default app;
