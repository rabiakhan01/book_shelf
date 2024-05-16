import React from "react";
import icons from '../../../assets/icons/icons';
import Button from "../../Shared/Button";
const Recommendation = () => {
    return (
        <div className="flex w-full bg-secondaryColor rounded-xl">
            <div className="flex flex-col gap-4 xl:gap-6 sm:w-1/2 p-4">
                <h1 className="text-textSecondaryColor text-base small-tab:text-xl sm:text-2xl md:text-4xl uppercase -tracking-tight">Deciding what to read next?</h1>
                <p className="text-textLightWhiteColor text-sm small-tab:text-base sm:text-lg ">You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>

            </div>

            <div className="relative justify-end items-center flex w-1/2 p-4 h-auto">
                <img src={icons.questionMark} alt="" className="absolute bottom-0 right-10 md:right-20 lg:right-4 xl:right-0 sm:h-full sm:w-full" />
                <div className="flex">
                    <Button
                        variant="contained"
                        size="large"
                    >
                        <img src={icons.arrow} alt="" className="h-10 w-10 sm:w-auto sm:h-auto" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Recommendation;