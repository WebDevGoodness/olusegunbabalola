
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const verifyToken = async (req, res, next) => {
    try {
        // Get token from request headers
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: 'Authentication required. Please log in.',
        });
        }

        const token = authHeader.split(' ')[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the administrator in the database
        const user = await User.findById(decoded.id);

        if (!user) {
        return res.status(401).json({
            success: false,
            message: 'Administrator account not found.',
        });
        }

        // Check whether account is active
        if (!user.isActive) {
        return res.status(403).json({
            success: false,
            message: 'Your account has been deactivated.',
        });
        }

        // Attach administrator information to request
        req.user = user;

        next();

    } catch (error) {
            return res.status(401).json({
            success: false,
            message: 'Invalid or expired authentication token.',
            });
        }
};

export default verifyToken;
