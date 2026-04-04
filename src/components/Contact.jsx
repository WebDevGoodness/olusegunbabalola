import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 text-gray-900">Get in Touch</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-xl">
                        Whether you need prayer, counseling, or have questions about faith, I'm here to help
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center">Contact Information</h2>
                    <h2 className="text-3xl font-bold text-gray-900 text-center">Send me a Message</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center">
                        <div className="space-y-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl mb-2 text-gray-900 font-bold">Email</h3>
                                        <p className="text-lg text-gray-600">info@thegladtidingsbaptist.org</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl mb-2 text-gray-900 font-bold">Phone</h3>
                                        <p className="text-lg text-gray-600">(+234) 08033797256</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-blue-600 " />
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
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm mb-2 text-gray-700 font-bold">
                                    Name *
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
                                <label htmlFor="email" className="block text-sm mb-2 text-gray-700 font-bold">
                                    Email *
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
                                <label htmlFor="subject" className="block text-sm mb-2 text-gray-700 font-bold">
                                    Subject *
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
                                <label htmlFor="message" className="block text-sm mb-2 text-gray-700 font-bold">
                                    Message/Prayer Request *
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
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
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