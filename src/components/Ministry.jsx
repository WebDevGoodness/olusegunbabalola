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
                    <h2 className="text-4xl mb-4 text-gray-900">Ministry Focus</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Called to serve, equipped to lead, committed to making disciples
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ministryAreas.map((area) => (
                        <div
                            key={area.title}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <area.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl mb-3 text-gray-900">{area.title}</h3>
                            <p className="text-gray-600">{area.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
