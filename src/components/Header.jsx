import { useState } from 'react';
import { Menu, X } from 'lucide-react';
// import olusegunImage from '../img/Reverend Olusegun Babalola.jpg';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Wisdom Nugget', href: '#daily-wisdom' },
        { label: 'About', href: '#about' },
        { label: 'Ministry', href: '#ministry' },
        { label: 'Sermons', href: '#sermons' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-3 flex-shrink-0">
                        {/* <img
                            src={olusegunImage}
                            alt="Olusegun Babalola"
                            className="h-10 w-10 rounded-full object-cover"
                        /> */}
                        <span className="text-3xl font-bold text-gray-900">Olusegun Babalola</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-gray-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
