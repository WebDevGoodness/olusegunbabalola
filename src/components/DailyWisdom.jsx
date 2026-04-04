import { Quote } from 'lucide-react';

export function DailyWisdom() {
    // This could come from an API or a larger list in the future
    const dailyVerse = {
        text: "Your boast becomes a prophecy of a future failure. The higher you lift yourself up in pride, the harder you’ll fall in disgrace. It’s better to be meek and lowly and live among the poor than to live high and mighty among the rich and famous. One skilled in business discovers prosperity, but the one who trusts in God is blessed beyond belief! The one with a wise heart is called “discerning,” and speaking sweetly to others makes your teaching even more convincing. Wisdom is a deep well of understanding opened up within you as a fountain of life for others, but it’s senseless to try to instruct a fool. Winsome words pour from a heart of wisdom, adding value to all you teach. Nothing is more appealing than speaking beautiful, life-giving words. For they release sweetness to our souls and inner healing to our spirits. Before every person there is a path that seems like the right one to take, but it leads straight to hell!",
        reference: "Proverbs 16:18-25 TPT"
    };

    return (
        <section id="daily-wisdom" className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-6xl font-bold text-gray-900 mb-8">WISDOM NUGGET</h2>
                <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                    <div className="absolute top-4 left-4">
                        <Quote className="w-12 h-12 text-blue-100" />
                    </div>
                    <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 relative z-10 pt-8">
                        "{dailyVerse.text}"
                    </blockquote>
                    <cite className="text-blue-600 font-semibold not-italic text-lg">
                        — {dailyVerse.reference}
                    </cite>
                </div>
            </div>
        </section>
    );
}
