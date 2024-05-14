import React from "react";
import HeroSection from "../../components/HomePage/HeroSection";
import BestSeller from "../../components/HomePage/BestSeller";
import Recommendation from "../../components/HomePage/Recommendation";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-4">
            <HeroSection />
            <BestSeller />
            <Recommendation />
        </div>
    );
}

export default HomePage;