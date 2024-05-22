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
        <div className={`flex gap-2 ${size} justify-center items-center rounded-full ${name == 'prev' ? 'flex-row' : 'flex-row-reverse'}`}>
            {
                Icon ?
                    <img src={Icon} alt="" />
                    :
                    ''
            }
            <button onClick={onClick} className="uppercase text-textLightWhiteColor text-base">{name}</button>
        </div>
    )
}

export default PaginationButton;