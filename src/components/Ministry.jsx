import { BookOpen, Users, Heart, Globe } from 'lucide-react';

export function Ministry() {
    const ministryAreas = [
        {
            icon: BookOpen,
            title: 'Biblical Teaching',
            description: 'Expository preaching and in-depth Bible studies to help believers grow in their faith and understanding of Scripture.',
        },
        {
            icon: Users,
            title: 'Pastoral Care',
            description: 'Providing spiritual guidance, counseling, and support for individuals and families during all seasons of life.',
        },
        {
            icon: Heart,
            title: 'Community Outreach',
            description: 'Serving our local community through missions, charity work, and programs that demonstrate God\'s love.',
        },
        {
            icon: Globe,
            title: 'Global Missions',
            description: 'Supporting and participating in missionary work around the world to spread the Gospel to all nations.',
        },
    ];

    return (
        <section id="ministry" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold mb-4" style={{ color: '#0A2540' }}>Ministry Focus</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-xl">
                        Called to Serve, equipped to Lead, committed to making Disciples
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ministryAreas.map((area) => (
                        <div
                            key={area.title}
                            className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer font-base"
                        >
                            <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                                <area.icon className="w-8 h-8" style={{ color: '#D4AF37' }} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3" style={{ color: '#0A2540' }}>{area.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{area.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
