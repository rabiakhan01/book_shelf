import React from "react";
import PromoCard from "../../Shared/PromoCard";
import icons from "../../../assets/icons/icons";
import images from "../../../assets/images/images";


const PromoSection = () => {
    return (
        <div className="flex items-center gap-2 mb-2 ">
            <PromoCard
                text="Discounts"
                size="w-[40%]"
            >
                <div>
                    <img src={icons.percentage} alt="" className="absolute extra-small:h-16 extra-small:w-16 sm:w-20 sm:h-20 md:w-auto md:h-auto top-0 left-0" />
                    <img src={icons.rotatedPercentage} alt="" className="absolute bottom-0 left-16 w-12 h-12 sm:w-auto sm:h-auto" />
                </div>
            </PromoCard>
            <PromoCard
                text="The best boooks for a gift"
                size="w-[60%]"
            >
                <div>
                    <img src={icons.plus} alt="" className="absolute top-2 left-24" />
                    <img src={icons.plus} alt="" className="absolute bottom-2 left-[6rem] w-[4.5rem] h-[4.5rem]" />
                </div>
            </PromoCard>
        </div>
    )
}

export default PromoSection;