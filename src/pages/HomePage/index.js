import React from "react";
import HeroSection from "../../components/HomePage/HeroSection";
import BestSeller from "../../components/HomePage/BestSeller";
import Recommendation from "../../components/HomePage/Recommendation";
import PopularAuthors from "../../components/HomePage/PopularAuthors";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-4">
            <HeroSection />
            <BestSeller />
            <Recommendation />
            <PopularAuthors />
        </div>
    );
}

export default HomePage;