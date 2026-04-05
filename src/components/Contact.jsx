import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4" style={{ color: '#0A2540' }}>Get in Touch</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-xl">
                        Whether you need prayer, counseling, or have questions about faith, I'm here to help
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-center md:text-left" style={{ color: '#0A2540' }}>Contact Information</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center">
                        <div className="space-y-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                                        <Mail className="w-6 h-6" style={{ color: '#D4AF37' }} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl mb-2 font-bold" style={{ color: '#0A2540' }}>Email</h3>
                                        <p className="text-lg text-gray-600">info@thegladtidingsbaptist.org</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                                        <Phone className="w-6 h-6" style={{ color: '#D4AF37' }} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl mb-2 text-gray-900 font-bold">Phone</h3>
                                        <p className="text-lg text-gray-600">(+234) 08033797256</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                                        <MapPin className="w-6 h-6" style={{ color: '#D4AF37' }} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl mb-2 text-gray-900 font-bold">Location</h3>
                                        <p className="text-lg text-gray-600">The Glad Tidings Baptist Church<br />Papa Araromi,Randa Area<br />Ogbomoso, Oyo State, Nigeria</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-3xl font-bold mb-8" style={{ color: '#0A2540' }}>Send me a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm mb-2 text-gray-700 font-bold">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none transition-all"
                                    placeholder="Your name"
                                    style={{ borderColor: '#D4AF37' }}
                                    onFocus={(e) => e.target.style.borderColor = '#0A2540'}
                                    onBlur={(e) => e.target.style.borderColor = '#D4AF37'}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm mb-2 text-gray-700 font-bold">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none transition-all"
                                    placeholder="your.email@example.com"
                                    style={{ borderColor: '#D4AF37' }}
                                    onFocus={(e) => e.target.style.borderColor = '#0A2540'}
                                    onBlur={(e) => e.target.style.borderColor = '#D4AF37'}
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm mb-2 text-gray-700 font-bold">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none transition-all"
                                    placeholder="How can I help?"
                                    style={{ borderColor: '#D4AF37' }}
                                    onFocus={(e) => e.target.style.borderColor = '#0A2540'}
                                    onBlur={(e) => e.target.style.borderColor = '#D4AF37'}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm mb-2 text-gray-700 font-bold">
                                    Message/Prayer Request *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none transition-all resize-none"
                                    placeholder="Share your thoughts or prayer requests..."
                                    style={{ borderColor: '#D4AF37' }}
                                    onFocus={(e) => e.target.style.borderColor = '#0A2540'}
                                    onBlur={(e) => e.target.style.borderColor = '#D4AF37'}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white py-3 rounded-lg transition-colors font-bold"
                                style={{ backgroundColor: '#0A2540' }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#051a2e'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#0A2540'}
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