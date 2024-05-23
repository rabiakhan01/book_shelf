import React from "react";

const PaginationButton = ({ name, Icon, onClick, disabled, activeButton }) => {
    let size
    if (Icon) {
        size = `w-16 small-tab:w-20 h-8 sm:w-24 sm:h-10 bg-lightBlackColor`;
    }
    else {
        size = ` ${activeButton ? 'bg-black' : 'bg-blackTaupeColor'} w-7 h-7 sm:w-10 sm:h-10 `;
    }

    return (
        <div className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} flex gap-1 sm:gap-2 ${size} justify-center items-center rounded-full ${name == 'prev' ? 'flex-row' : 'flex-row-reverse'}`} onClick={onClick}>
            {
                Icon ?
                    <img src={Icon} alt="" className="" />
                    :
                    ''
            }
            <button className={` ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} uppercase text-textLightWhiteColor text-xs small-tab:text-sm sm:text-base`} disabled={disabled}>{name}</button>
        </div>
    )
}

export default PaginationButton;