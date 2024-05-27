import React from "react";
import icons from "../../../assets/icons/icons";

const ReviewCard = ({ image, name, date, rating, description }) => {
    return (
        <div className="flex flex-col gap-2 w-[49.6%] p-6 bg-whiteColor rounded-3xl">
            <div className="flex  items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex w-14 h-14 rounded-full overflow-hidden">
                        <img src={image} alt="viewer_image" className="object-cover" />
                    </div>
                    <div className="text-xl font-[440]">
                        <p>{name}</p>
                    </div>
                </div>
                <div>
                    <p>{date}</p>
                </div>
            </div>
            <div className="flex gap-1">
                <img src={icons.star} alt="star" />
                <p className="font-medium">{rating}</p>
            </div>
            <div>
                <p className="line-clamp-5 font-[440]">{description}</p>
            </div>
            <div className="">
                <button className="underline uppercase">read more</button>
            </div>
        </div>
    )
}

export default ReviewCard;