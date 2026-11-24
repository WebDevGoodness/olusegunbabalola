
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.route.js';
import adminRoutes from './routes/admin.route.js';
import wisdomNuggetRoutes from './routes/wisdomNugget.route.js';
import contactRoutes from './routes/contact.routes.js';

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
}));
    
app.use(express.json());
    
app.use('/api/auth', authRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/wisdom-nuggets', wisdomNuggetRoutes);
app.use('/api/contact', contactRoutes);

// Test route
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Backend is running successfully',
    });
});

export default app;
