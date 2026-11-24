
import ContactMessage from '../../models/contactMessage.model.js';

const deleteContactMessage = async (req, res) => {
    try {
        const { id } = req.params;

        const contactMessage = await ContactMessage.findByIdAndDelete(id);

        if (!contactMessage) {
            return res.status(404).json({
                success: false,
                message: 'Contact message not found.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Contact message deleted successfully.',
        });

    } catch (error) {
        console.error('Delete contact message error:', error.message);

        return res.status(500).json({
            success: false,
            message: 'Failed to delete contact message.',
        });
    }
};

export default deleteContactMessage;