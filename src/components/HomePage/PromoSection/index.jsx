import React from "react";
import PromoCard from "../../Shared/PromoCard";
import { PercentageIcon, PlusIcon, RotatedPercentageIcon } from "../../../assets/icons";

const PromoSection = () => {
    return (
        <div className="flex items-center gap-2 mb-4 ">
            <PromoCard
                text="Discounts"
                size="w-[40%]"
            >
                <div>
                    <PercentageIcon />
                    <RotatedPercentageIcon />
                </div>
            </PromoCard>
            <PromoCard
                text="The best boooks for a gift"
                size="w-[60%]"
            >
                <div>
                    <PlusIcon className="absolute top-0 sm:top-2 left-24" />
                    <PlusIcon className="absolute bottom-0 sm:bottom-2 left-[6rem] w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem]" />
                </div>
            </PromoCard>
        </div>
    )
}

export default PromoSection;