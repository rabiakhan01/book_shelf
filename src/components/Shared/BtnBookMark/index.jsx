import React from "react";
import icons from "../../../assets/icons/icons";

const BtnBookMark = () => {
    return (
        <div className="flex justify-center items-center bg-secondaryColor w-8 h-8 rounded-full">
            <button>
                <img src={icons.bookmark} alt="bookmark" className="h-5 w-5" />
            </button>
        </div>
    )
}

export default BtnBookMark;