import { Calendar, Clock, Play } from 'lucide-react';

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
            duration: '37 min',
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
                    <h2 className="text-6xl font-bold mb-4" style={{ color: '#0A2540' }}>Recent Sermons</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-xl">
                        Messages from God's Word to encourage, challenge, and inspire
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {sermons.map((sermon) => (
                        <a
                            key={sermon.title}
                            href="https://www.youtube.com/@tgtbcogbomoso"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer group"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-sm font-semibold text-white px-3 py-1 rounded-full" style={{ backgroundColor: '#D4AF37', color: '#0A2540' }}>{sermon.series}</span>
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:opacity-80 transition-opacity" style={{ backgroundColor: '#0A2540' }}>
                                        <Play className="w-6 h-6 text-white fill-white" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:opacity-70 transition-opacity" style={{ color: '#0A2540' }}>{sermon.title}</h3>
                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{sermon.description}</p>
                                <div className="flex items-center gap-6 text-sm text-gray-500 border-t pt-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" style={{ color: '#D4AF37' }} />
                                        <span className="font-medium">{sermon.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" style={{ color: '#D4AF37' }} />
                                        <span className="font-medium">{sermon.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://www.youtube.com/@tgtbcogbomoso"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white px-8 py-3 rounded-lg transition-colors font-semibold text-lg"
                        style={{ backgroundColor: '#0A2540' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#051a2e'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#0A2540'}
                    >
                        View More Sermons on YouTube
                    </a>
                </div>
            </div>
        </section>
    );
}
