
import dotenv from 'dotenv';

dotenv.config();

// Load these modules after environment variables
const { default: app } = await import('./src/app.js');
const { default: connectDB } = await import('./src/config/database.js');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();

        await (await import('./src/config/email.js')).default.verify();

        console.log('Email server connected successfully.');

        app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Server startup failed:', error.message);
        process.exit(1);
    }
};

startServer();
