import React from "react";
import images from '../../../assets/images/images';
import icons from '../../../assets/icons/icons';
import Button from "../../Shared/Button";
const HeroSection = () => {
    return (
        <div>
            <div className="flex mt-7 mb-4 justify-center items-center ">
                <h1 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl  uppercase font-semibold text-textLightBlackColor">reading makes the world huge</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-2 w-full mb-2">

                <div className="relative flex flex-col gap-4 justify-between w-full md:w-1/2 bg-secondaryColor p-5 sm:p-9 h-80 sm:h-[350px] rounded-xl">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-textSecondaryColor text-xl sm:text-2xl md:text-3xl uppercase w-full lg:w-3/4 z-10">find something to read</h1>
                        <p className="text-textLightWhiteColor text-base sm:text-[1.2rem] lg:text-xl z-10 w-11/12 xs:w-2/3 md:w-11/12 xl:w-2/3">Fancy something unusual and unpredictable? Funny or exciting? No problem. Check out the collections we have prepared for you.</p>
                    </div>
                    <div>
                        <Button
                            variant="outlined"
                            size="medium"
                        >
                            Browese Now
                        </Button>
                    </div>
                    <img src={icons.blackSearch} alt="" className="absolute right-0 bottom-0 h-52 w-5h-52 xs:h-60 xs:w-60 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
                </div>

                <div className="relative flex h-80 sm:h-[350px] w-full md:w-1/2">
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