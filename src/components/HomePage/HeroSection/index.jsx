import React from "react";
import images from '../../../assets/images/images';
import icons from '../../../assets/icons/icons';
import Button from "../../Shared/Button";
const HeroSection = () => {
    return (
        <div>
            <div className="flex justify-center items-center mb-2 md:mb-0 lg:mt-2">
                <h1 className="text-[5.8vw] 2xl:text-[4.8rem] text-nowrap uppercase font-semibold text-textLightBlackColor">reading makes the world huge</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-2 w-full">

                <div className="relative flex flex-col gap-4 justify-between w-full md:w-1/2 bg-secondaryColor p-4 small-tab:h-56 md:h-auto sm:h-64 rounded-xl">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-textSecondaryColor text-base small-tab:text-xl sm:text-2xl md:text-3xl uppercase w-full lg:w-3/4">find something to read</h1>
                        <p className="text-textLightWhiteColor text-sm small-tab:text-base sm:text-lg w-2/3 xl:w-1/2">Fancy something unusual and unpredictable? Funny or exciting? No problem. Check out the collections we have prepared for you and I want to be a fantastic book keeper.</p>
                    </div>
                    <div>
                        <Button
                            variant="outlined"
                            size="medium"
                        >
                            Browese Now
                        </Button>
                    </div>
                    <img src={icons.blackSearch} alt="" className="absolute right-0 bottom-0 h-44 w-44 small-tab:h-52 small-tab:w-52 md:h-48 md:w-48 lg:h-60 lg:w-60" />
                </div>

                <div className="relative -mb-2 flex h-56 small-tab:h-56 sm:h-64 md:w-1/2 md:h-auto lg:h-[300px] md:mb-[0.5px]">
                    <div className="flex w-full">
                        <img src={images.hero_1} alt="hero" className="object-cover w-full h-full rounded-xl" />
                    </div>
                    <div className="absolute top-3 left-3 w-20 h-20 rounded-full">
                        <img src={images.label} alt="" />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;