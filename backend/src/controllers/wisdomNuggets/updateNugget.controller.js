import WisdomNugget from '../../models/wisdomNugget.model.js';

const updateNugget = async (req, res) => {
    try {
        const { id } = req.params;
        const { content, reference, date } = req.body;

        if (
            (content !== undefined && !content.trim()) ||
            (reference !== undefined && !reference.trim())
        ) {
            return res.status(400).json({
                success: false,
                message: 'Content and reference cannot be empty.',
            });
        }

        if (
            content === undefined &&
            reference === undefined &&
            date === undefined
        ) {
            return res.status(400).json({
                success: false,
                message: 'Provide content, reference or date to update.',
            });
        }

        if (date !== undefined) {
            const validDate = /^\d{4}-\d{2}-\d{2}$/.test(date);
            const parsedDate = new Date(`${date}T00:00:00.000Z`);

            if (
                !validDate ||
                Number.isNaN(parsedDate.getTime()) ||
                parsedDate.toISOString().slice(0, 10) !== date
            ) {
                return res.status(400).json({
                    success: false,
                    message: 'Please provide a valid date.',
                });
            }
        }

        const nugget = await WisdomNugget.findById(id);

        if (!nugget) {
            return res.status(404).json({
                success: false,
                message: 'Wisdom Nugget not found.',
            });
        }

        if (content !== undefined) {
            nugget.content = content.trim();
        }

        if (reference !== undefined) {
            nugget.reference = reference.trim();
        }

        if (date !== undefined) {
            nugget.date = new Date(`${date}T00:00:00.000Z`);
        }

        await nugget.save();

        return res.status(200).json({
            success: true,
            message: 'Wisdom Nugget updated successfully.',
            nugget,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to update Wisdom Nugget.',
        });
    }
};

export default updateNugget;