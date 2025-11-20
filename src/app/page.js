import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Herosection";

import OfferCountdown from "@/components/OfferCountdown";
import ProductSection from "@/components/ProductSection";
import TestimonialSection from "@/components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      
      <HeroSection />
      <FeaturesSection />
      <ProductSection />
      <TestimonialSection />

    </div>
  );
}
