
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/user.model.js';

dotenv.config();

const createSuperAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const existingSuperAdmin = await User.findOne({
            role: 'superadmin',
        });

        if (existingSuperAdmin) {
            console.log('A superadmin account already exists.');
            return;
        }

        const username = process.env.SUPERADMIN_USERNAME?.trim().toLowerCase();
        const password = process.env.SUPERADMIN_PASSWORD;

        if (!username || !password || password.length < 12) {
            throw new Error(
                'Provide a username and a password of at least 12 characters in .env'
            );
        }

        const superAdmin = await User.create({
            username,
            password,
            role: 'superadmin',
        });

        console.log(`Superadmin created successfully: ${superAdmin.username}`);
    } catch (error) {
        console.error('Superadmin creation failed:', error.message);
    } finally {
        await mongoose.disconnect();
    }
};

createSuperAdmin();
