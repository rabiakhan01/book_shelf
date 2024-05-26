import React from "react";
import HeroSection from "../../components/HomePage/HeroSection";
import BestSeller from "../../components/HomePage/BestSeller";
import Recommendation from "../../components/HomePage/Recommendation";
import PopularAuthors from "../../components/HomePage/PopularAuthors";
import PromoSection from "../../components/HomePage/PromoSection";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-4">
            <HeroSection />
            <BestSeller />
            <Recommendation />
            <PopularAuthors />
            <PromoSection />
        </div>
    );
}

export default HomePage;