import React from "react";
import SingleBookDetail from "../../components/BookDetailPage/SingleBookDetail";
import RecommendationSection from "../../components/BookDetailPage/RecommendationSection";
import ReviewSection from "../../components/BookDetailPage/ReviewSection";

const BookDetailPage = () => {
    return (
        <div className="flex flex-col gap-4">
            <SingleBookDetail />
            <RecommendationSection />
            <ReviewSection />
        </div>
    )
}

export default BookDetailPage;