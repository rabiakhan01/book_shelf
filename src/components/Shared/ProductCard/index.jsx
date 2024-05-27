import React from "react";
import BtnBookMark from "../BtnBookMark";
import icons from "../../../assets/icons/icons";

const ProductCard = ({ image, name, intro, review, rate, views, old_price, new_price, onClick }) => {
    return (
        <div className="flex flex-col w-full extra-small:w-full h-[30.3rem] small-tab:w-[49%] md:w-[32.5%] bg-primaryColor rounded-xl gap-2 p-6 cursor-pointer" onClick={onClick}>

            <div className="relative flex flex-col w-full justify-center items-center">
                <div className="rounded-xl h-72 w-full overflow-hidden">
                    <img src={image} alt="img" className="object-fit sm:object-cover h-full w-full" />
                </div>
                <div className="absolute w-5 h-50 top-4 right-7">
                    <BtnBookMark />
                </div>
            </div>

            <div className="flex flex-col justify-between gap-4 w-full">
                <div className="flex flex-col">
                    <p className="text-base truncate">{name}</p>
                    <p className="font-medium text-xl truncate">{intro}</p>
                </div>
                <div className="flex gap-2">
                    <div className="flex justify-center items-center gap-2 border border-secondaryColor  rounded-full h-7 p-3">
                        <p>{review}</p>
                        <img src={icons.review} alt="" className="object-scale-down" />
                    </div>
                    <div className="flex justify-center items-center gap-2 border border-secondaryColor  rounded-full h-7 p-3">
                        <p>{rate}</p>
                        <img src={icons.star} alt="" />
                        <p>({views})</p>
                    </div>
                </div>
                <div className="flex gap-2 text-xl">
                    {
                        old_price > 0
                        && <p className="text-textGrayColor"><s>${old_price}</s></p>
                    }
                    <p>${new_price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;