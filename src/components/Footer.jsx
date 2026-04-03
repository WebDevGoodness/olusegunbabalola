import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl mb-4 font-bold">Olusegun Babalola</h3>
                        <p className="text-gray-400">
                            Serving God's people with faithfulness, teaching His Word with clarity, and leading with love.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl mb-4 font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#daily-wisdom" className="text-gray-400 hover:text-white transition-colors">
                                    Wisdom Nugget
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#ministry" className="text-gray-400 hover:text-white transition-colors">
                                    Ministry
                                </a>
                            </li>
                            <li>
                                <a href="#sermons" className="text-gray-400 hover:text-white transition-colors">
                                    Sermons
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl mb-4 font-bold">Scripture</h3>
                        <blockquote className="text-gray-400 italic">
                            "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."
                            <footer className="text-sm mt-2 not-italic">— Jeremiah 29:11</footer>
                        </blockquote>
                    </div>

                    <div>
                        <h3 className="text-xl mb-4 font-bold">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/TGTBCOgbomoso" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/tgtbc_ogbomoso?igsh=Y24yeTJoY2JrYWF5" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="https://www.youtube.com/@tgtbcogbomoso" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                <Youtube className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400 font-bold">
                    <p>&copy; {currentYear} Olusegun Babalola. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
