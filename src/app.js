import express from "express";
import morgan from "morgan";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from 'cors';

import authRoutes from "./routes/auth.routes.js";
import postsRoutes from './routes/posts.routes.js'

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5000'
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes)
app.use('/api', postsRoutes)

export default app;