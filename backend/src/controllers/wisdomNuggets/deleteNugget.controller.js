import WisdomNugget from '../../models/wisdomNugget.model.js';

const deleteNugget = async (req, res) => {
    try {
        const { id } = req.params;

        const nugget = await WisdomNugget.findByIdAndDelete(id);

        if (!nugget) {
        return res.status(404).json({
            success: false,
            message: 'Wisdom Nugget not found.',
        });
        }

        return res.status(200).json({
        success: true,
        message: 'Wisdom Nugget deleted successfully.',
        });
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: 'Failed to delete Wisdom Nugget.',
        });
    }
};

export default deleteNugget;