"use client";
import React, { useState, useEffect } from 'react';
import {
    Menu, X, Search, ChevronDown, ArrowRight,
    CheckCircle, Star, ShieldCheck, Truck, Leaf, ChevronLeft, ChevronRight, Clock
} from 'lucide-react';
const products = [
    {
        id: "fungo",
        title: "Fungo-Killer Pro",
        category: "Nagelpilz Lösung",
        desc: "Befreien Sie Ihre Nägel von Pilz. 100% natürlich und effektiv.",
        price: "€49.90",
        image: "https://images.unsplash.com/photo-1624638761900-732a9cc6d1eb?auto=format&fit=crop&q=80&w=1200",
        rating: 4.8,
        tag: "Bestseller"
    },
    {
        id: "krampfadern",
        title: "VarikoStop Gel",
        category: "Krampfadern",
        desc: "Lindert Schmerzen und reduziert Schwellungen bei Krampfadern sichtbar.",
        price: "€39.90",
        image: "https://images.unsplash.com/photo-1556228552-cab3e70294a7?auto=format&fit=crop&q=80&w=1200",
        rating: 4.9,
        tag: "Neuheit"
    },
    {
        id: "simpla",
        title: "Simplá 360 Serum",
        category: "Anti-Aging Formel",
        desc: "Das Geheimnis jugendlicher Haut. Revolutionäres Lifting-Serum.",
        price: "€59.90",
        image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=1200",
        rating: 4.7,
        tag: "Premium"
    },
    {
        id: "abnehmen",
        title: "SlimFit Burner",
        category: "Gewichtsverlust",
        desc: "Aktivieren Sie Ihren Stoffwechsel und erreichen Sie Ihr Wunschgewicht.",
        price: "€45.00",
        image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&q=80&w=1200",
        rating: 4.6,
        tag: "Beliebt"
    },
    {
        id: "schmerz",
        title: "HondroStrong",
        category: "Gelenkpflege",
        desc: "Schnelle Hilfe bei Gelenkschmerzen und Entzündungen für mehr Mobilität.",
        price: "€55.00",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200",
        rating: 4.9,
        tag: "Top Wahl"
    }
];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="home" className="relative bg-gray-900 h-[600px] lg:h-[700px] overflow-hidden group">

            {products.map((product, index) => (
                <div
                    key={product.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <div className="absolute inset-0">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
                    </div>

                    <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
                        <div className="max-w-2xl animate-fade-in-up">
                            <span className="inline-block py-1 px-3 rounded-full bg-yellow-500 text-black text-xs font-bold mb-4 uppercase tracking-wider">
                                {product.tag}
                            </span>
                            <h2 className="text-yellow-500 font-bold text-xl md:text-2xl mb-2 uppercase tracking-wide">
                                {product.category}
                            </h2>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                                {product.title}
                            </h1>
                            <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed max-w-lg drop-shadow-md">
                                {product.desc}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={`#${product.id}`}
                                    className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all flex items-center justify-center shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1"
                                >
                                    Jetzt Bestellen <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                                <span className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg flex items-center justify-center backdrop-blur-sm">
                                    Preis: {product.price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                {products.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-yellow-500 w-10'
                                : 'bg-white/50 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;