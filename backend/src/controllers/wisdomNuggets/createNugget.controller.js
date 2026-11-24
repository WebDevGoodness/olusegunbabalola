import WisdomNugget from '../../models/wisdomNugget.model.js';

const createNugget = async (req, res) => {
    try {
        const { content, reference, date } = req.body;

        if (!content || !reference || !date) {
            return res.status(400).json({
                success: false,
                message: 'Content, reference and date are required.',
            });
        }

        const validDate = /^\d{4}-\d{2}-\d{2}$/.test(date);

        if (!validDate || Number.isNaN(Date.parse(`${date}T00:00:00.000Z`))) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid date.',
            });
        }

        const newNugget = await WisdomNugget.create({
            content: content.trim(),
            reference: reference.trim(),
            date: new Date(`${date}T00:00:00.000Z`),
        });

        return res.status(201).json({
            success: true,
            message: 'Wisdom Nugget created successfully.',
            nugget: newNugget,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to create Wisdom Nugget.',
        });
    }
};

export default createNugget;