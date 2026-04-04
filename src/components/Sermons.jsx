import { Calendar, Clock } from 'lucide-react';

export function Sermons() {
    const sermons = [
        {
            title: 'Walking in Faith, Not Fear',
            series: 'Foundations of Faith',
            date: 'December 24, 2024',
            duration: '42 min',
            description: 'Discovering how to trust God in uncertain times and overcome anxiety through biblical truth.',
        },
        {
            title: 'The Power of Prayer',
            series: 'Spiritual Disciplines',
            date: 'December 17, 2024',
            duration: '38 min',
            description: 'Exploring the transformative impact of prayer and developing a deeper prayer life.',
        },
        {
            title: 'Love in Action',
            series: '1 John Series',
            date: 'December 10, 2024',
            duration: '45 min',
            description: 'Understanding how genuine faith expresses itself through love for God and others.',
        },
        {
            title: 'Finding Purpose in Christ',
            series: 'Identity in Christ',
            date: 'December 3, 2024',
            duration: '40 min',
            description: 'Discovering your God-given purpose and living a life that honors Him.',
        },
    ];

    return (
        <section id="sermons" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold mb-4 text-gray-900">Recent Sermons</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-xl">
                        Messages from God's Word to encourage, challenge, and inspire
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {sermons.map((sermon) => (
                        <div
                            key={sermon.title}
                            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="text-sm text-blue-600 mb-2">{sermon.series}</div>
                            <h3 className="text-2xl mb-3 text-gray-900">{sermon.title}</h3>
                            <p className="text-gray-600 mb-4">{sermon.description}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{sermon.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{sermon.duration}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://www.youtube.com/@tgtbcogbomoso"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                    >
                        View More Sermons on YouTube
                    </a>
                </div>
            </div>
        </section>
    );
}
