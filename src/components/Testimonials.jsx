import { Quote } from 'lucide-react';

export function Testimonials() {
    const testimonials = [
        {
            name: 'Sarah Mitchell',
            role: 'Church Member',
            text: 'Pastor John\'s teaching has transformed my understanding of Scripture. His compassionate leadership and genuine care for our congregation has made our church feel like family.',
        },
        {
            name: 'Michael Chen',
            role: 'Ministry Volunteer',
            text: 'The biblical wisdom and practical guidance I\'ve received has helped me navigate difficult seasons. Pastor John truly lives out the principles he teaches.',
        },
        {
            name: 'Rebecca Torres',
            role: 'Small Group Leader',
            text: 'His passion for God\'s Word is contagious. The way he breaks down complex theological concepts makes the Bible accessible and relevant to everyday life.',
        },
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-6xl mb-4 font-bold text-gray-900">Testimonials</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-xl">
                        Lives transformed by God's grace
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <Quote className="w-8 h-8 text-blue-600 mb-4" />
                            <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                            <div>
                                <div className="text-gray-900">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
