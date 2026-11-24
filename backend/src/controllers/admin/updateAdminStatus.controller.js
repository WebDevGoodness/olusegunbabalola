import User from '../../models/user.model.js';

const updateAdminStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;

        if (typeof isActive !== 'boolean') {
        return res.status(400).json({
            success: false,
            message: 'isActive must be true or false.',
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

        admin.isActive = isActive;
        await admin.save();

        return res.status(200).json({
        success: true,
        message: isActive
            ? 'Administrator account activated successfully.'
            : 'Administrator account deactivated successfully.',
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
        message: 'Failed to update administrator status.',
        });
    }
};

export default updateAdminStatus;