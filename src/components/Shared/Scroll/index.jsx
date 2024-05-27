import React from "react";
import icons from "../../../assets/icons/icons";

const Scroll = () => {
    return (
        <div className="flex justify-center items-center h-8 w-8 bg-lightYellowColor rounded-full sticky bottom-10 -right-40 cursor-pointer">
            <img src={icons.upArrow} alt="up-arrow" className="h-5 w-5" />
        </div>
    )
}

export default Scroll;