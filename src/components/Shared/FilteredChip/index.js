import React from "react";
import icons from "../../../assets/icons/icons";


const FilteredChip = ({ name }) => {


    return (
        <div className="flex justify-center items-center gap-2 bg-chipColor w-auto p-2 rounded-full">
            <p className="text-sm text-textLightWhiteColor text-nowrap">{name}</p>
            <button className="flex justify-center items-center h-8 w-8 bg-secondaryColor rounded-full"><img src={icons.cross} className="w-3 h-3" /></button>
        </div>
    )
}

export default FilteredChip;