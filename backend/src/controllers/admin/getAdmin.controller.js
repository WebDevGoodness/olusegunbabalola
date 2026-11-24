import User from '../../models/user.model.js';

const getAdmin = async (req, res) => {
    try {
        const { id } = req.params;

        const admin = await User.findOne({
        _id: id,
        role: 'admin',
        }).select('-password');

        if (!admin) {
        return res.status(404).json({
            success: false,
            message: 'Administrator not found.',
        });
        }

        return res.status(200).json({
        success: true,
        admin,
        });
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: 'Failed to retrieve administrator.',
        });
    }
};

export default getAdmin;