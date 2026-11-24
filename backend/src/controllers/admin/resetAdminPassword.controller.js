import User from '../../models/user.model.js';

const resetAdminPassword = async (req, res) => {
    try {
        const { id } = req.params;
        const { newPassword } = req.body;

        if (!newPassword) {
        return res.status(400).json({
            success: false,
            message: 'New password is required.',
        });
        }

        if (newPassword.length < 12) {
        return res.status(400).json({
            success: false,
            message: 'Password must contain at least 12 characters.',
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

        admin.password = newPassword;
        await admin.save();

        return res.status(200).json({
        success: true,
        message: 'Administrator password reset successfully.',
        });
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: 'Failed to reset administrator password.',
        });
    }
};

export default resetAdminPassword;