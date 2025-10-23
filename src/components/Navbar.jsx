"use client";
import React, { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

// নেভিগেশন লিঙ্কগুলি সংজ্ঞায়িত করা হলো
const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Fungo-Killer", href: "#fungo" },
    { name: "Krampfadern", href: "#krampfadern" },
    { name: "Simplá 360", href: "#simpla" },
    { name: "Abnehmen", href: "#abnehmen" },
    { name: "Schmerz", href: "#schmerz" },
    { name: "Tee", href: "#tee" },
    { name: "Füße", href: "#fuesse" },
    { name: "Nagelpilz", href: "#nagelpilz" },
];

// এই কম্পোনেন্টটি পুরো অ্যাপ্লিকেশন রুট হিসেবে কাজ করবে
const App = () => {
    // মোবাইল মেনুর স্টেট হ্যান্ডেল করার জন্য
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // ডেভলপমেন্ট পরিবেশে 'lucide-react' আইকন ব্যবহারের জন্য একটি ফলব্যাক
    const Icon = ({ name, className }) => {
        const IconComponent = { Menu, X, Search, ChevronDown }[name];
        if (IconComponent) return <IconComponent className={className} />;
        return <span className={className}>{name}</span>;
    };

    // ডেস্কটপ এবং মোবাইল মেনু উভয় ক্ষেত্রেই লিঙ্ক রেন্ডার করার জন্য একটি ফাংশন
    const NavItem = ({ link, isMore = false, isMobile = false }) => (
        <a
            href={link.href}
            className={`
        relative text-sm font-medium transition-colors hover:text-yellow-400
        ${isMobile ? 'py-3 border-b border-gray-800' : 'px-3 py-4'} 
        /* ডেস্কটপের জন্য অনুভূমিক প্যাডিং (px) কমানো হয়েছে যাতে বেশি লিঙ্ক এক লাইনে ধরে যায় */
      `}
            onClick={isMobile ? toggleMenu : undefined} // মোবাইল মেনু লিঙ্ক ক্লিক করলে বন্ধ হবে
        >
            <span className="flex items-center">
                {link.name}
                {isMore && <Icon name="ChevronDown" className="w-4 h-4 ml-1" />}
            </span>
            {/* অ্যাক্টিভ লিঙ্ক ইন্ডিকেটর (ছবি অনুযায়ী) */}
            {link.name === "Home" && !isMobile && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-10 bg-yellow-500"></span>
            )}
        </a>
    );

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-black shadow-lg sticky top-0 z-50">
                <nav className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* ১. লোগো এরিয়া */}
                        <div className="flex items-center flex-shrink-0">
                            {/* লোগো আইকনের জন্য একটি প্লেসহোল্ডার */}
                            <div className="w-8 h-8 rounded-full border-2 border-yellow-500 bg-gray-900 flex items-center justify-center mr-3">
                                <span className="text-sm font-bold text-yellow-500">F</span>
                            </div>
                            <span className="text-xl md:text-2xl font-extrabold tracking-wider text-white">
                                FITNESSBEAUTYCLUB {/* নতুন নাম যোগ করা হয়েছে */}
                            </span>
                        </div>

                        {/* ২. ডেস্কটপ নেভিগেশন লিঙ্কস (বড় ডিভাইসের জন্য) */}
                        <div className="hidden md:flex md:items-center md:space-x-3 lg:space-x-4 text-white h-full">
                            {/* লিঙ্কগুলির মধ্যে স্পেসিং কমানো হয়েছে */}
                            {navLinks.map((link) => (
                                <NavItem key={link.name} link={link} />
                            ))}
                            {/* More মেনু */}
                            <NavItem link={{ name: "More", href: "#more" }} isMore={true} />
                        </div>

                        {/* ৩. সার্চ এবং মোবাইল মেনু টগল */}
                        <div className="flex items-center space-x-4 text-white">
                            <button
                                className="p-2 transition-colors hover:text-yellow-500"
                                aria-label="Search"
                            >
                                <Icon name="Search" className="w-5 h-5" />
                            </button>

                            {/* মোবাইল মেনু বাটন (ছোট ডিভাইসের জন্য) */}
                            <button
                                onClick={toggleMenu}
                                className="md:hidden p-2 transition-colors hover:text-yellow-500"
                                aria-label="Toggle Menu"
                            >
                                {isMenuOpen ? <Icon name="X" className="w-6 h-6" /> : <Icon name="Menu" className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* ৪. মোবাইল স্লাইড-ইন মেনু/ড্রয়ার */}
                <div
                    className={`
            fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-2xl transition-transform duration-300 ease-in-out z-50
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden
          `}
                >
                    {/* মেনু হেডার (ক্লোজ বাটন) */}
                    <div className="flex justify-end p-4 border-b border-gray-800">
                        <button
                            onClick={toggleMenu}
                            className="text-white p-2 transition-colors hover:text-yellow-500"
                            aria-label="Close Menu"
                        >
                            <Icon name="X" className="w-6 h-6" />
                        </button>
                    </div>

                    {/* মোবাইল লিঙ্কস */}
                    <div className="flex flex-col p-4 text-white">
                        {navLinks.map((link) => (
                            <NavItem key={link.name} link={link} isMobile={true} />
                        ))}
                        {/* More মেনু মোবাইল-এ */}
                        <NavItem
                            link={{ name: "More", href: "#more" }}
                            isMore={true}
                            isMobile={true}
                        />
                    </div>
                </div>

                {/* ৫. ওভারলে (মেনু খোলা থাকলে স্ক্রিন ডার্ক করার জন্য) */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        onClick={toggleMenu}
                        aria-hidden="true"
                    ></div>
                )}

            </header>
        </div>
    );
};

export default App;
