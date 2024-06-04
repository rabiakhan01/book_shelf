import React from "react";

const PromoCard = ({ children, text, size }) => {

    return (
        <div className={`relative overflow-hidden ${size ? size : 'w-1/2'} rounded-xl h-32 sm:h-[11rem] flex justify-center items-center text-center bg-secondaryColor`}>
            <div className=" text-textLightWhiteColor text-[3.5vw] small-tab:text-[3vw] md:text-[2.6vw] xl:text-3xl font-medium uppercase">
                {text}
            </div>
            {children}
        </div>
    )
}

export default PromoCard;