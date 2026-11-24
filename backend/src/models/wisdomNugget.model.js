import mongoose from 'mongoose';

const wisdomNuggetSchema = new mongoose.Schema(
    {
        content: {
        type: String,
        required: true,
        trim: true,
        },

        reference: {
        type: String,
        required: true,
        trim: true,
        },
        date: {
        type: Date,
        required: true,
        default: Date.now,
        },
    },
    {
        timestamps: true,
    }
    );

    const WisdomNugget = mongoose.model(
    'WisdomNugget',
    wisdomNuggetSchema
);

export default WisdomNugget;