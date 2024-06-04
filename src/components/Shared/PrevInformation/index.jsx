import React from "react";

const PrevInformation = ({ heading, key1, key2, value1, value2, onClick }) => {
    return (
        <div className="flex justify-between bg-lightBlackColor p-3 rounded-xl">
            <div className="flex flex-col gap-1 small-tab:gap-2">
                <h1 className="text-sm text-nowrap sm:text-md uppercase">{heading}</h1>
                <p className="text-xs small-tab:text-sm sm:text-base">{key1}</p>
                <p className="text-xs small-tab:text-sm sm:text-base">{key2}</p>
            </div>
            <div className="flex flex-col items-end gap-1 small-tab:gap-2">
                <button className="border-b-2 border-primaryColor uppercase text-sm sm:text-base">edit</button>
                <p className="text-xs small-tab:text-sm sm:text-base">{value1}</p>
                <p className="text-xs small-tab:text-sm sm:text-base">{value2}</p>
            </div>
        </div>
    )
}

export default PrevInformation;