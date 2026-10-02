import React, { useState, useEffect } from 'react';

import heroImage1 from '../img/Rev Hero 1-desktop.jpg';
import heroImage2 from '../img/Rev Hero 2-desktop.jpg';


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
        <section id="home" className="relative h-screen min-h-screen flex items-center justify-center overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="relative z-10 flex h-full items-center justify-center px-4 py-8 sm:px-6 md:px-8 md:py-12">
                        <div className="flex h-[calc(100vh-2rem)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:h-[90%] md:min-h-[480px] md:flex-row">
                            <div className="h-[60%] min-h-0 w-full bg-black md:h-full md:w-1/2">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className={`h-full w-full object-contain md:object-cover ${index === 0 ? 'object-[center_20%]' : 'object-[center_15%]'}`}
                                    loading={index === 0 ? 'eager' : 'lazy'}
                                    decoding="async"
                                />
                            </div>

                            <div className="flex h-[40%] w-full flex-col items-center justify-center px-6 py-5 text-center text-navy sm:px-10 sm:py-8 md:h-full md:w-1/2 md:px-12 lg:px-16">
                                <h1 className="mb-3 text-2xl font-bold leading-tight sm:text-3xl md:mb-5 md:text-4xl lg:text-5xl">
                                    {slide.title}
                                </h1>
                                <p className="mb-6 max-w-xl text-sm font-semibold leading-relaxed text-slate-600 sm:text-base md:mb-8 md:text-lg lg:text-xl">
                                    {slide.subtitle}
                                </p>
                                <a
                                    href="#contact"
                                    className="inline-block rounded-lg px-5 py-2 text-sm font-bold text-white transition-colors sm:px-6 sm:py-3 sm:text-base"
                                    style={{ backgroundColor: '#0A2540' }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#051a2e'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0A2540'}
                                >
                                    Get in Touch
                                </a>
                            </div>
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
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
}
