import React from "react";

const Button = ({ children, variant, size, color, onClick, disabled, type }) => {
    if (size === "extra-small") {
        size = "h-6 w-12 small-tab:h-7 small-tab:w-12 sm:h-8 sm:w-16 font-normal text-sm text-blackColor";
    }

    if (size === "small") {
        size = "h-9 w-20 sm:h-10 lg:h-11 lg:w-20 text-blackColor";
    }
    else if (size === "medium") {
        size = "h-10 w-24 sm:h-12 sm:w-28 lg:w-[8rem] text-blackColor"
    }
    else if (size === "large") {
        size = " h-14 w-16 small-tab:h-20 small-tab:w-20 sm:h-24 sm:w-28 text-blackColor"
    }
    else if (size == "extra-large") {
        size = "h-12 w-full text-blackColor"
    }
    if (variant === 'contained') {
        variant = "bg-btnPrimaryColor";
    }
    else if (variant === 'outlined') {
        variant = `bg-transparent border-2 ${color ? `border-${color} text-${color}` : 'border-lightYellowColor text-textYellowColor'}`;
    }
    return (
        <button
            className={`flex relative ${variant} ${size} rounded-lg sm:rounded-xl justify-center items-center text-xs sm:text-sm lg:text-base font-medium uppercase cursor-pointer}`} onClick={onClick} disabled={disabled} type={type}>
            {children}
        </button>
    )
}

export default Button;