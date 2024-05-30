import React from "react";

const BtnCartQuantity = ({ quantity, incrementQuantity, decrementQuantity }) => {
    return (
        <div className="flex gap-2 justify-center items-center w-24 h-10 sm:w-28 sm:h-12 border border-lightYellowColor rounded-lg sm:rounded-xl">
            <button className="flex justify-center items-center  border border-y-transparent border-l-transparent border-r-lightYellowColor h-full w-full text-3xl" onClick={decrementQuantity}>-</button>
            <p className="flex justify-center items-center w-20 text-base sm:text-xl">{quantity}</p>
            <button className="flex justify-center items-center border border-y-transparent border-r-transparent border-l-lightYellowColor h-full w-full text-2xl" onClick={incrementQuantity}>+</button>
        </div>
    )
}

export default BtnCartQuantity;