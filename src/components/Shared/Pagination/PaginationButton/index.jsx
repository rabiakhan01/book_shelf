import React from "react";
import { NextIcon, PreviousIcon } from "../../../../assets/icons";

const PaginationButton = ({ name, isIcon, onClick, disabled, activeButton }) => {
    let size
    if (isIcon) {
        size = `w-14 small-tab:w-20 h-8 sm:w-24 sm:h-10 bg-lightBlackColor`;
    }
    else {
        size = ` ${activeButton ? 'bg-black' : 'bg-blackTaupeColor'} w-7 h-7 sm:w-10 sm:h-10 `;
    }

    return (
        <div className={`${disabled ? 'cursor-not-allowed bg-zinc-700' : 'cursor-pointer'} flex gap-1 sm:gap-2 ${size} justify-center items-center rounded-full ${name == 'prev' ? 'flex-row' : 'flex-row-reverse'}`} onClick={onClick}>
            {
                name === 'prev' ?
                    <PreviousIcon className="w-3 h-3 small-tab:w-4 small-tab:h-5 md:w-5 md:h-5" />
                    :
                    name === 'next' ?
                        <NextIcon className="w-3 h-3 small-tab:w-4 small-tab:h-5 md:w-5 md:h-5" />
                        :
                        ''
            }
            <button className={` ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} uppercase text-textLightWhiteColor text-[10px] small-tab:text-sm sm:text-base`} disabled={disabled}>{name}</button>
        </div>
    )
}

export default PaginationButton;