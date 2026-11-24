import WisdomNugget from '../../models/wisdomNugget.model.js';

const getNuggets = async (req, res) => {
    try {
        const nuggets = await WisdomNugget.find()
        .sort({ date: -1, createdAt: -1 });

        return res.status(200).json({
        success: true,
        count: nuggets.length,
        nuggets,
        });
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: 'Failed to retrieve Wisdom Nuggets.',
        });
    }
};

export default getNuggets;