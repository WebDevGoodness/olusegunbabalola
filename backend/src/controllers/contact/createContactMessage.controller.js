
import ContactMessage from '../../models/contactMessage.model.js';
import transporter from '../../config/email.js';

const createContactMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields.',
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.trim())) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address.',
            });
        }

        const newMessage = await ContactMessage.create({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            subject: subject.trim(),
            message: message.trim(),
        });

        try {
            await transporter.sendMail({
                from: process.env.SMTP_FROM,
                to: process.env.CONTACT_EMAIL,
                replyTo: email.trim(),
                subject: `New Contact Message: ${subject}`,
                text: `
            Name: ${name}
            Email: ${email}
            Subject: ${subject}

            Message:
            ${message}
                    `,
            });
        } catch (emailError) {
            console.error('Email notification failed:', emailError.message);
        }

        

        try {
            await transporter.sendMail({
                from: process.env.SMTP_FROM,
                to: email.trim(),
                subject: 'We Have Received Your Message',
                text: `
        Dear ${name},

        Thank you for reaching out to Olusegun Babalola.

        We have successfully received your message and sincerely appreciate you taking the time to contact us.

        Our team will review your message and get back to you as soon as possible.

        God bless you!

        O.B Babalola
                `,
            });
        } catch (autoReplyError) {
            console.error('Auto-reply email failed:', autoReplyError.message);
        }

        return res.status(201).json({
            success: true,
            message: 'Your message has been submitted successfully.',
            contactMessage: newMessage,
        });

    } catch (error) {
        console.error('Contact message error:', error.message);

        return res.status(500).json({
            success: false,
            message: 'Failed to submit your message.',
        });
    }
};

export default createContactMessage;
