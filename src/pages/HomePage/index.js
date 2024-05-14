import React from "react";
import HeroSection from "../../components/HomePage/HeroSection";
import BestSeller from "../../components/HomePage/BestSeller";
const HomePage = () => {
    return (
        <div className="flex flex-col gap-4">
            <HeroSection />
            <BestSeller />
        </div>
    );
}

export default HomePage;