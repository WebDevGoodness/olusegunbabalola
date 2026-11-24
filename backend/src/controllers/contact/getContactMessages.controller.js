
import ContactMessage from '../../models/contactMessage.model.js';

const getContactMessages = async (req, res) => {
    try {
        const messages = await ContactMessage.find()
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: messages.length,
            messages,
        });

    } catch (error) {
        console.error('Get contact messages error:', error.message);

        return res.status(500).json({
            success: false,
            message: 'Failed to retrieve contact messages.',
        });
    }
};

export default getContactMessages;