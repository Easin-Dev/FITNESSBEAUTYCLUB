"use client";
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, ChevronDown, ArrowRight, 
  CheckCircle, Star, ShieldCheck, Truck, Leaf, ChevronLeft, ChevronRight, Clock 
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-extrabold tracking-wider text-white block mb-4">
                            FITNESS<span className="text-yellow-500">BEAUTY</span>CLUB
                        </span>
                        <p className="text-gray-400 max-w-xs">
                            Ihr Partner für Gesundheit und Schönheit. Wir bieten nur die besten Produkte für den deutschen Markt.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-yellow-500">Schnellzugriff</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors">Produkte</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">Über uns</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-yellow-500">Rechtliches</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Widerruf</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} FitnessBeautyClub. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;