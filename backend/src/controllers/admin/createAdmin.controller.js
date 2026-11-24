
import User from '../../models/user.model.js';

const createAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate required fields
        if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: 'Username and password are required.',
        });
        }

        const normalizedUsername = username.trim().toLowerCase();

        // Validate username
        if (normalizedUsername.length < 3) {
        return res.status(400).json({
            success: false,
            message: 'Username must contain at least 3 characters.',
        });
        }

        // Validate password
        if (password.length < 12) {
        return res.status(400).json({
            success: false,
            message: 'Password must contain at least 12 characters.',
        });
        }

        // Check whether username already exists
        const existingAdmin = await User.findOne({
        username: normalizedUsername,
        });

        if (existingAdmin) {
        return res.status(409).json({
            success: false,
            message: 'This username is already taken.',
        });
        }

        // Create secondary administrator
        const newAdmin = await User.create({
        username: normalizedUsername,
        password,
        role: 'admin',
        });

        return res.status(201).json({
        success: true,
        message: 'Administrator account created successfully.',
        admin: {
            id: newAdmin._id,
            username: newAdmin.username,
            role: newAdmin.role,
            isActive: newAdmin.isActive,
        },
        });

    } catch (error) {
        return res.status(500).json({
        success: false,
        message: 'Failed to create administrator.',
        });
    }
};

export default createAdmin;
