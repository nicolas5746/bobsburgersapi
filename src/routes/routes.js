import express from 'express';
import data from '../data/data.js';

// Router
const routes = express.Router();

// Routes
routes.get('/characters', data);

export default routes;