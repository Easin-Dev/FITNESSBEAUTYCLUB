"use client";
import React from 'react';

const Hero_section = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Hero Section Start */}
            <section
                className="relative h-screen bg-cover bg-center flex items-center justify-center p-4 md:p-8"
                style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/beautiful-young-asian-woman-exercising-workout-gym-fitness-personal-trainer-coach-concept_78610-1845.jpg?w=1380&t=st=1720516664~exp=1720517264~hmac=a4b86c2ef6a877d9e4878a87900b9576c2534f31c071d3744747c3fb5e52ae64)' }}
            >
                {/* ব্যাকগ্রাউন্ড ওভারলে */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* কনটেন্ট কন্টেইনার */}
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
                    {/* বিজনেস নেম এবং ট্যাগলাইন */}
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
                        FitnessBeautyClub.com
                        <span className="block text-2xl md:text-4xl font-semibold text-yellow-400 mt-2">
                            Your Complete Health & Beauty Destination
                        </span>
                    </h1>

                    {/* ডেসক্রিপশন */}
                    <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto animate-fade-in-up">
                        Welcome to FitnessBeautyClub.com, your one-stop online destination for health, fitness, and natural beauty solutions. We bring you a wide range of high-quality and effective products designed to help you stay fit, healthy, and confident every day.
                    </p>

                    {/* কল-টু-অ্যাকশন বাটন */}
                    <div className="animate-fade-in-up animation-delay-500">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg md:text-xl transition duration-300 transform hover:scale-105 shadow-lg">
                            Explore Our Products
                        </button>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}

            {/* অন্যান্য সেকশনের জন্য প্লেসহোল্ডার */}
            <section className="bg-white py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800">More Content Below</h2>
                <p className="text-gray-600 mt-4">This is where your other website sections will go.</p>
                <div className="mt-8 h-64 bg-gray-200 flex items-center justify-center rounded-lg max-w-6xl mx-auto">
                    <p className="text-gray-500">Product Categories, Testimonials, Blog, etc.</p>
                </div>
            </section>
        </div>
    );
};

export default Hero_section;
