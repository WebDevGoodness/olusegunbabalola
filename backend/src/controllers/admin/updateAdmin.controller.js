import User from '../../models/user.model.js';

const updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { username } = req.body;

        if (!username || !username.trim()) {
        return res.status(400).json({
            success: false,
            message: 'A valid username is required.',
        });
        }

        const normalizedUsername = username.trim().toLowerCase();

        if (normalizedUsername.length < 3) {
        return res.status(400).json({
            success: false,
            message: 'Username must contain at least 3 characters.',
        });
        }

        const admin = await User.findOne({
        _id: id,
        role: 'admin',
        });

        if (!admin) {
        return res.status(404).json({
            success: false,
            message: 'Administrator not found.',
        });
        }

        const existingAdmin = await User.findOne({
        username: normalizedUsername,
        _id: { $ne: id },
        });

        if (existingAdmin) {
        return res.status(409).json({
            success: false,
            message: 'This username is already taken.',
        });
        }

        admin.username = normalizedUsername;
        await admin.save();

        return res.status(200).json({
        success: true,
        message: 'Administrator username updated successfully.',
        admin: {
            id: admin._id,
            username: admin.username,
            role: admin.role,
            isActive: admin.isActive,
        },
        });
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: 'Failed to update administrator.',
        });
    }
};

export default updateAdmin;