
import express from 'express';
import loginUser from '../controllers/auth/login.controller.js';

const router = express.Router();

// Admin login
router.post('/login', loginUser);

export default router;
