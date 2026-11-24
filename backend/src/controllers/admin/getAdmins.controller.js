import User from '../../models/user.model.js';

const getAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: 'admin' })
        .select('-password')
        .sort({ createdAt: -1 });

        return res.status(200).json({
        success: true,
        count: admins.length,
        admins,
        });
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: 'Failed to retrieve administrators.',
        });
    }
};

export default getAdmins;