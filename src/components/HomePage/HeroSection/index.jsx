import React from "react";
import images from '../../../assets/images/images'
import Button from "../../Shared/Button";
const HeroSection = () => {
    return (
        <div>
            <div className="flex mt-7 mb-4 justify-center items-center ">
                <h1 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl  uppercase font-semibold text-textLightBlackColor">reading makes the world huge</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-2 w-full mb-2">

                <div className="flex flex-col gap-4 justify-between w-full md:w-1/2 bg-secondaryColor p-4 sm:p-7 lg:p-9 h-60 xs:h-72 md:h-auto lg:h-72 rounded-xl">
                    <div className="flex flex-col gap-5 w-3/4">
                        <h1 className="text-textSecondaryColor text-base sm:text-2xl md:text-3xl uppercase w-full lg:w-3/4">find something to read</h1>
                        <p className="text-textLightWhiteColor text-sm xs:text-base">Fancy something unusual and unpredictable? Funny or exciting? No problem. Check out the collections we have prepared for you.</p>
                    </div>
                    <div>
                        <Button
                            variant="outlined"
                            size="medium"
                        >
                            Browese
                        </Button>
                    </div>
                </div>

                <div className="relative flex h-60 xs:h-72 md:h-auto lg:h-72 w-full md:w-1/2">
                    <div className="flex w-full">
                        <img src={images.hero_1} alt="hero" className="object-fit w-full h-full rounded-xl" />
                    </div>
                    <div className="absolute top-3 left-3 w-20 h-20 rounded-full">
                        <img src={images.label} alt="" className="" />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;