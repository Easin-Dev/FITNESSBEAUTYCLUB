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

const ProductSection = () => {
    return (
        <section id="products" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Detaillierte Beschreibung</h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Wählen Sie das beste Produkt für Ihre Bedürfnisse</p>
                </div>

                <div className="space-y-20">
                    {products.map((product, index) => (
                        <div 
                            key={product.id} 
                            id={product.id} 
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center bg-white rounded-3xl p-6 lg:p-12 shadow-lg border border-gray-100 scroll-mt-28`}
                        >
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                                    <img 
                                        src={product.image} 
                                        alt={product.title} 
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                        <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            Original aus Deutschland
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="flex items-center space-x-2">
                                    <span className="text-yellow-600 font-semibold uppercase tracking-wide text-sm">{product.category}</span>
                                    <span className="text-gray-300">|</span>
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{product.title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {product.desc} Entwickelt von Experten, um Ihnen maximale Ergebnisse zu liefern. Starten Sie noch heute in ein gesünderes Leben.
                                </p>
                                
                                <ul className="space-y-3">
                                    {["Klinisch getestet", "100% Zufriedenheitsgarantie", "Express Lieferung"].map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-700 font-medium">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-6 flex items-center gap-6">
                                    <div>
                                        <span className="block text-sm text-gray-400 line-through">€{parseFloat(product.price.replace('€','')) + 20}</span>
                                        <span className="text-4xl font-bold text-gray-900">{product.price}</span>
                                    </div>
                                    <button className="flex-1 bg-yellow-500 text-black font-bold py-4 px-8 rounded-xl hover:bg-yellow-400 transition-all shadow-lg hover:shadow-yellow-500/30 text-lg text-center transform hover:-translate-y-1">
                                        In den Warenkorb
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;