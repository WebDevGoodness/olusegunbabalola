import WisdomNugget from '../../models/wisdomNugget.model.js';

const getNugget = async (req, res) => {
    try {
        const { id } = req.params;

        const nugget = await WisdomNugget.findById(id);

        if (!nugget) {
        return res.status(404).json({
            success: false,
            message: 'Wisdom Nugget not found.',
        });
        }

        return res.status(200).json({
        success: true,
        nugget,
        });
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: 'Failed to retrieve Wisdom Nugget.',
        });
    }
};

export default getNugget;