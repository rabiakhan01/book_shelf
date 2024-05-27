import React from "react";
import { Button } from "../../Shared";
import { allReviewsData } from "../../../utils/MockupData";
import ReviewCard from "../../Shared/ReviewCard";

const ReviewSection = () => {
    return (
        <div>
            <div>
                <h1>readers reviews</h1>
                <Button
                    variant="outlined"
                    size="medium"
                >
                    add review
                </Button>
            </div>
            <div>
                {
                    allReviewsData.map((review, index) => {
                        return (
                            <ReviewCard
                                key={review.id}
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