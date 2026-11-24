
import ContactMessage from '../../models/contactMessage.model.js';

const updateContactMessageStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['read', 'replied'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Status must be either read or replied.',
            });
        }

        const contactMessage = await ContactMessage.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );

        if (!contactMessage) {
            return res.status(404).json({
                success: false,
                message: 'Contact message not found.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Contact message status updated successfully.',
            contactMessage,
        });

    } catch (error) {
        console.error('Update contact message status error:', error.message);

        return res.status(500).json({
            success: false,
            message: 'Failed to update contact message status.',
        });
    }
};

export default updateContactMessageStatus;