import React from "react";

const PrevInformation = ({ heading, key1, key2, value1, value2, onClick }) => {
    return (
        <div className="flex justify-between bg-lightBlackColor p-3 rounded-xl">
            <div className="flex flex-col gap-2">
                <h1 className="text-md uppercase">{heading}</h1>
                <p>{key1}</p>
                <p>{key2}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
                <button className="border-b-2 border-primaryColor uppercase">edit</button>
                <p>{value1}</p>
                <p>{value2}</p>
            </div>
        </div>
    )
}

export default PrevInformation;