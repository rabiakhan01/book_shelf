import React from "react";

const PaginationButton = ({ name, Icon, onClick }) => {
    let size
    if (Icon) {
        size = "w-24 h-10 bg-lightBlackColor";
    }
    else {
        size = "w-10 h-10 bg-blackTaupeColor";
    }

    return (
        <div className={`cursor-pointer flex gap-2 ${size} justify-center items-center rounded-full ${name == 'prev' ? 'flex-row' : 'flex-row-reverse'}`} onClick={onClick}>
            {
                Icon ?
                    <img src={Icon} alt="" />
                    :
                    ''
            }
            <button className="uppercase text-textLightWhiteColor text-base">{name}</button>
        </div>
    )
}

export default PaginationButton;