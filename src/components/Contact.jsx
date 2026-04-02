import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl mb-4 text-gray-900">Get in Touch</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Whether you need prayer, counseling, or have questions about faith, I'm here to help
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg mb-1 text-gray-900">Email</h3>
                                    <p className="text-gray-600">pastor.john@gracechurch.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg mb-1 text-gray-900">Phone</h3>
                                    <p className="text-gray-600">(555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg mb-1 text-gray-900">Location</h3>
                                    <p className="text-gray-600">Grace Community Church<br />123 Faith Avenue<br />Springfield, ST 12345</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-64 rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1671275558351-ea067b3e5853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwcmF5ZXIlMjBoYW5kc3xlbnwxfHx8fDE3NjcwODUwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Community prayer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm mb-2 text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                                    placeholder="How can I help?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                                    placeholder="Share your thoughts or prayer requests..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}