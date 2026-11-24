
const parseSender = (from) => {
    const match = from.match(/^(.*?)\s*<([^<>]+)>$/);

    if (match) {
        return {
            name: match[1].replace(/^["']|["']$/g, ''),
            email: match[2],
        };
    }

    return { email: from };
};

const emailService = {
    verify: async () => {
        if (!process.env.BREVO_API_KEY) {
            throw new Error('BREVO_API_KEY is missing.');
        }

        return true;
    },

    sendMail: async (options) => {
        const response = await fetch(
            'https://api.brevo.com/v3/smtp/email',
            {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'api-key': process.env.BREVO_API_KEY,
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    sender: parseSender(
                        options.from || process.env.SMTP_FROM
                    ),
                    to: [{ email: options.to }],
                    ...(options.replyTo && {
                        replyTo: { email: options.replyTo },
                    }),
                    subject: options.subject,
                    textContent: options.text,
                }),
            }
        );

        if (!response.ok) {
            const errorDetails = await response.text();

            throw new Error(
                `Brevo API error (${response.status}): ${errorDetails}`
            );
        }

        return await response.json();
    },
};

export default emailService;
