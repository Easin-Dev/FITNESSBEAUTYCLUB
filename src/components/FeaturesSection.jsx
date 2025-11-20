"use client";
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, ChevronDown, ArrowRight, 
  CheckCircle, Star, ShieldCheck, Truck, Leaf, ChevronLeft, ChevronRight, Clock 
} from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        { icon: Leaf, title: "100% Natürlich", desc: "Nur natürliche Inhaltsstoffe ohne Chemie." },
        { icon: ShieldCheck, title: "Geprüfte Qualität", desc: "Zertifizierte Produkte nach EU-Standards." },
        { icon: Truck, title: "Schneller Versand", desc: "Kostenloser Versand innerhalb Deutschlands." },
    ];

    return (
        <section className="py-16 bg-white relative z-20 -mt-10 lg:-mt-16 rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] max-w-7xl mx-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feat, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 hover:bg-yellow-50 transition-colors rounded-xl group">
                            <div className="p-4 bg-yellow-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                                <feat.icon className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feat.title}</h3>
                            <p className="text-gray-600">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;