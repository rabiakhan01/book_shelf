import React from "react";
import icons from '../../../assets/icons/icons';
import Button from "../../Shared/Button";
const Recommendation = () => {
    return (
        <div className="relative flex items-center w-full bg-secondaryColor rounded-xl overflow-hidden small-tab:h-[12rem]">
            <div className="flex flex-col gap-2 lg:gap-0 w-full p-4">
                <div className="">
                    <h1 className="text-textSecondaryColor text-[5vw] small-tab:text-[4vw] sm:text-[3vw] 2xl:text-4xl text-nowrap uppercase -tracking-tight font-medium">Deciding what to read next?</h1>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="w-full pr-4 sm:w-2/3 md:w-1/2">
                        <p className="text-textLightWhiteColor text-sm small-tab:text-base sm:text-md">You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
                    </div>
                    <div className="">
                        <Button
                            variant="contained"
                            size="large"
                        >
                            <img src={icons.arrow} alt="" className="h-5 w-5 small-tab:h-7 small-tab:w-7 sm:h-10 sm:w-10 " />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="">
                <img src={icons.questionMark} alt="" className="absolute bottom-0 right-10 md:right-20 lg:right-24 sm:h-auto" />
                <div className="flex">
                </div>
            </div>
        </div >
    )
}

export default Recommendation;