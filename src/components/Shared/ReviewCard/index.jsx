import React from "react";
import icons from "../../../assets/icons/icons";

const ReviewCard = ({ image, name, date, rating, description }) => {
    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <div>
                        <img src={image} alt="viewer_image" />
                    </div>
                    <div>
                        <p>{name}</p>
                    </div>
                </div>
                <div>
                    <p>{date}</p>
                </div>
            </div>
            <div>
                <img src={icons.star} alt="star" />
                <p>{rating}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ReviewCard;