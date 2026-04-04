import React, { useState, useEffect } from 'react';

import heroImage1 from '../img/Rev Hero 1.jpg';
import heroImage2 from '../img/Rev Hero 2.jpg';


export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: heroImage2,
            title: "Rev. Olusegun Babalola",
            subtitle: "Senior Pastor | Teacher of God's Word | Servant Leader since 1997"
        },
        {
            image: heroImage1,
            title: "Transforming Lives Through Faith",
            subtitle: "Dedicated to biblical teaching, pastoral care, and building a thriving community rooted in Christ"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="absolute inset-0 z-0">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-min object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>

                    <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                        <div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 font-bold">
                                {slide.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
                                {slide.subtitle}
                            </p>
                            <a
                                href="#contact"
                                className="inline-block bg-blue-600 font-bold text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentSlide}
                    />
                ))}
            </div>
        </section>
    );
}
