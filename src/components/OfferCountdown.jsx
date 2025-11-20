"use client";
import React, { useState, useEffect } from 'react';
import {
    Menu, X, Search, ChevronDown, ArrowRight,
    CheckCircle, Star, ShieldCheck, Truck, Leaf, ChevronLeft, ChevronRight, Clock
} from 'lucide-react';

const OfferCountdown = () => {
    // ৫৬ মিনিট = ৫৬ * ৬০ সেকেন্ড = ৩৩৬০ সেকেন্ড
    const [timeLeft, setTimeLeft] = useState(3360);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // সময় ফরম্যাট করা (MM:SS)
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="bg-red-600 text-white py-2.5 px-4 text-center relative z-[60]">
            <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base font-bold animate-pulse">
                <Clock className="w-5 h-5" />
                <span>
                    ACHTUNG: Das Sonderangebot endet in <span className="bg-white text-red-600 px-2 py-0.5 rounded mx-1 font-mono text-lg">{formatTime(timeLeft)}</span> Minuten! -50% Rabatt
                </span>
            </div>
        </div>
    );
};

export default OfferCountdown;