import React from "react";
import { Button } from "../../Shared";
import { allReviewsData } from "../../../utils/MockupData";
import ReviewCard from "../../Shared/ReviewCard";

const ReviewSection = () => {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-base md:text-xl lg:text-2xl uppercase font-medium">readers reviews</h1>
                <Button
                    variant="outlined"
                    size="medium"
                    color="secondaryColor"
                >
                    add review
                </Button>
            </div>
            <div className="flex gap-2 w-full flex-wrap">
                {
                    allReviewsData.map((review, index) => {
                        return (
                            <ReviewCard
                                key={index}
                                image={review.viewer_img}
                                name={review.viewer_name}
                                date={review.date}
                                rating={review.star}
                                description={review.review}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ReviewSection;