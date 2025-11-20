"use client";
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, ChevronDown, ArrowRight, 
  CheckCircle, Star, ShieldCheck, Truck, Leaf, ChevronLeft, ChevronRight, Clock 
} from 'lucide-react';

const TestimonialSection = () => {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">Kundenbewertungen</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Julia S.", text: "Fantastische Produkte! Die Lieferung nach Berlin war super schnell.", role: "Berlin" },
                        { name: "Markus W.", text: "Endlich etwas, das wirklich gegen meine Beschwerden hilft. Danke!", role: "München" },
                        { name: "Lena K.", text: "Sehr guter Kundenservice und hochwertige Verpackung. Gerne wieder.", role: "Hamburg" }
                    ].map((review, i) => (
                        <div key={i} className="bg-gray-900 p-8 rounded-xl border border-gray-800 text-left hover:border-yellow-500 transition-colors">
                            <div className="flex text-yellow-500 mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center font-bold text-yellow-500 mr-3 border border-gray-700">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{review.name}</h4>
                                    <span className="text-xs text-gray-500">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;