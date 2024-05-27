import React from "react";
import icons from "../../../assets/icons/icons";

const BreadCrumb = ({ name, onClick, isActive }) => {
    return (
        <div className="flex gap-3 items-center">
            <p onClick={onClick} className={`cursor-pointer ${isActive ? 'text-textLightGrayColor' : 'text-textSecondaryColor'}`}>{name}</p>
            {
                !isActive ?
                    <img src={icons.line} alt="" className="w-2 h-4" />
                    :
                    false
            }
        </div>
    )
}

export default BreadCrumb;