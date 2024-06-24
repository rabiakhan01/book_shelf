import React from "react";
import { VerticalLineIcon } from "../../../assets/icons";

const BreadCrumb = ({ name, onClick, isActive }) => {
    return (
        <div className="flex gap-2 small-tab:gap-3 items-center">
            <p onClick={onClick} className={`cursor-pointer ${isActive ? 'text-textLightGrayColor line-clamp-1' : 'text-textSecondaryColor text-nowrap'} text-xs small-tab:text-sm sm:text-base `}>{name}</p>
            {
                !isActive ?
                    <VerticalLineIcon />
                    :
                    false
            }
        </div>
    )
}

export default BreadCrumb;