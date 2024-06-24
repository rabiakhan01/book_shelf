import React from "react";
import { ArrowIcon, QuestionMarkIcon } from '../../../assets/icons';
import Button from "../../Shared/Button";
import { useNavigate } from "react-router-dom";
const Recommendation = () => {

    const navigate = useNavigate();

    const handelNavigate = () => {
        navigate('/all-books')
    }
    return (
        <div className="relative flex items-center w-full bg-secondaryColor rounded-xl overflow-hidden small-tab:h-[12rem]">
            <div className="flex flex-col gap-4 lg:gap-0 w-full p-4">
                <div className="">
                    <h1 className="text-textSecondaryColor text-[5vw] small-tab:text-[4vw] sm:text-[3vw] 2xl:text-4xl text-nowrap uppercase -tracking-tight font-medium">Deciding what to read next?</h1>
                </div>
                <div className="flex sm:flex-row justify-between w-full">
                    <div className="w-full pr-4 sm:w-2/3 md:w-1/2">
                        <p className="text-textLightWhiteColor text-xs small-tab:text-sm sm:text-md">You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
                    </div>
                    <div className="z-10 p-1" onClick={handelNavigate}>
                        <Button
                            variant="contained"
                            size="large"
                        >
                            <ArrowIcon />

                        </Button>
                    </div>
                </div>
            </div>

            <div className="">
                <QuestionMarkIcon className="absolute bottom-0 right-10 md:right-20 lg:right-24 sm:h-auto" />
                <div className="flex">
                </div>
            </div>
        </div >
    )
}

export default Recommendation;