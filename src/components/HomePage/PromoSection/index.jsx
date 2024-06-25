import React from "react";
import PromoCard from "../../Shared/PromoCard";
import { PercentageIcon, PlusIcon, RotatedPercentageIcon } from "../../../assets/icons";
import { useNavigate } from "react-router-dom";
import { allBooksData } from "../../../utils/MockupData";


const PromoSection = () => {
    const navigate = useNavigate();
    const handelBestBook = () => {
        const findBestBook = allBooksData.find((item) => Math.max(item.rating.views));
        navigate(`/all-books/book-detail/${findBestBook.id}`)
    }
    const handelDiscount = (code) => {
        alert(`congragulation you are now able to get 3% discount using the promocode ${code}`);
    }
    return (
        <div className="flex items-center gap-2 mb-4 ">
            <PromoCard
                text="Discounts"
                size="w-[40%]"
                onClick={() => handelDiscount('123mbu123')}
            >
                <div>
                    <PercentageIcon className="absolute extra-small:h-16 extra-small:w-16 sm:w-20 sm:h-20 md:w-auto md:h-auto top-0 left-0" />
                    <RotatedPercentageIcon className="absolute bottom-0 left-16 w-12 h-12 sm:w-auto sm:h-auto" />
                </div>
            </PromoCard>
            <PromoCard
                text="The best boooks for a gift"
                size="w-[60%]"
                onClick={handelBestBook}
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