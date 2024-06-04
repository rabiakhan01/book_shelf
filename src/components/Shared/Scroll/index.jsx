import React from "react";
import icons from "../../../assets/icons/icons";

const Scroll = () => {

    const handelScroll = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className="flex justify-center items-center h-8 w-8 bg-lightYellowColor rounded-full cursor-pointer" onClick={handelScroll}>
            <img src={icons.upArrow} alt="up-arrow" className="h-5 w-5" />
        </div>
    )
}

export default Scroll;