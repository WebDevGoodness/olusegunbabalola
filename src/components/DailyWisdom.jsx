import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { apiRequest } from '../services/api';

export function DailyWisdom() {

    const [nuggets, setNuggets] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const handlePrevious = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    const dailyVerse = nuggets[currentIndex];

    useEffect(() => {
    const fetchDailyWisdom = async () => {
        try {
            const data = await apiRequest('/wisdom-nuggets');

            if (data.nuggets && data.nuggets.length > 0) {
                setNuggets(data.nuggets);
                setCurrentIndex(0);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    fetchDailyWisdom();
}, []);

    // This could come from an API or a larger list in the future
    

    return (
        <section id="daily-wisdom" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-6xl font-bold mb-8" style={{ color: '#0A2540' }}>WISDOM NUGGET</h2>
                <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                    <div className="absolute top-4 left-4">
                        <Quote className="w-12 h-12" style={{ color: 'rgba(212, 175, 55, 0.3)' }} />
                    </div>
                    {loading ? (
                        <p className="text-gray-500 pt-8">
                            Loading wisdom nugget...
                        </p>
                    ) : error ? (
                        <p className="text-red-500 pt-8">
                            Unable to load wisdom nugget.
                        </p>
                    ) : dailyVerse ? (
                        <>
                            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 relative z-10 pt-8">
                                "{dailyVerse.content}"
                            </blockquote>

                            <cite className="font-semibold not-italic text-lg" style={{ color: '#D4AF37' }}>
                                — {dailyVerse.reference}
                            </cite>

                            <p className="text-gray-500 text-sm mt-3">
                                {new Date(dailyVerse.date || dailyVerse.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>

                            <div className="flex justify-center gap-6 mt-6">
                                <button
                                    onClick={handlePrevious}
                                    disabled={currentIndex >= nuggets.length - 1}
                                    className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    ← Previous
                                </button>

                                <button
                                    onClick={handleNext}
                                    disabled={currentIndex === 0}
                                    className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    Next →
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className="text-gray-500 pt-8">
                            No wisdom nugget available at the moment.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
