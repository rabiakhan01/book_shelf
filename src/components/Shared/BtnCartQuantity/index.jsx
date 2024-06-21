import React from "react";

const BtnCartQuantity = ({ quantity, incrementQuantity, decrementQuantity, size }) => {
    return (
        <div className={`flex gap-2 justify-center items-center ${size ? 'w-16 h-8 rounded-md' : 'w-20 h-8 sm:w-28 sm:h-12 rounded-lg sm:rounded-xl'}  border border-lightYellowColor `}>
            <button className={`flex justify-center items-center  border border-y-transparent border-l-transparent border-r-lightYellowColor h-full w-full ${size ? 'text-xl ' : ' text-2xl small-tab:text-3xl'} cursor-pointer`} onClick={decrementQuantity}>-</button>
            <p className={`flex justify-center items-center ${size ? 'w-7' : 'w-20 text-sm small-tab:text-base md:text-xl'}`}>{quantity}</p>
            <button className={`flex justify-center items-center border border-y-transparent border-r-transparent border-l-lightYellowColor h-full w-full t${size ? 'text-xl' : ' text-xl small-tab:text-2xl'}  cursor-pointer`} onClick={incrementQuantity}>+</button>
        </div>
    )
}

export default BtnCartQuantity;